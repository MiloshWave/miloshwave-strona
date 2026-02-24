import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES } from '../constants';

type ImageKeys = keyof typeof IMAGES;
type ImagesType = typeof IMAGES;

interface ImageContextType {
  images: ImagesType;
  updateImage: (key: ImageKeys, file: File) => Promise<void>;
  resetImages: () => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImagesType>(IMAGES);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const savedImages = localStorage.getItem('site_images');
    if (savedImages) {
      try {
        setImages({ ...IMAGES, ...JSON.parse(savedImages) });
      } catch (e) {
        console.error("Failed to parse images from local storage", e);
      }
    }
  }, []);

  const updateImage = async (key: ImageKeys, file: File) => {
    // Check file size (limit to ~2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Obraz jest zbyt duży! Maksymalny rozmiar to 2MB.");
      return;
    }

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
      });

      const newImages = { ...images, [key]: base64 };
      setImages(newImages);
      try {
        localStorage.setItem('site_images', JSON.stringify(newImages));
      } catch (e) {
        alert("Brak miejsca w pamięci przeglądarki (localStorage). Obraz nie zostanie zapisany na stałe.");
      }
    } catch (error) {
      console.error("Error reading file", error);
      alert("Wystąpił błąd podczas odczytu pliku.");
    }
  };

  const resetImages = () => {
    if (window.confirm("Czy na pewno chcesz przywrócić domyślne zdjęcia?")) {
      setImages(IMAGES);
      localStorage.removeItem('site_images');
    }
  };

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  return (
    <ImageContext.Provider value={{ images, updateImage, resetImages, isEditMode, toggleEditMode }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within a ImageProvider');
  }
  return context;
};