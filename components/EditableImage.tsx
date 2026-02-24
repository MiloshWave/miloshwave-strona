import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { useImages } from '../contexts/ImageContext';
import { IMAGES } from '../constants';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageKey: keyof typeof IMAGES;
  wrapperClassName?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ 
  imageKey, 
  wrapperClassName = "", 
  className = "", 
  alt,
  ...props 
}) => {
  const { images, updateImage, isEditMode } = useImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await updateImage(imageKey, e.target.files[0]);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling if inside other clickable elements
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative group/edit ${wrapperClassName}`}>
      <img 
        src={images[imageKey]} 
        alt={alt} 
        className={className} 
        {...props} 
      />
      
      {isEditMode && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/edit:opacity-100 transition-opacity z-50">
          <button 
            onClick={triggerUpload}
            className="bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg transform hover:scale-105"
            type="button"
          >
            <Upload size={18} className="text-primary-600" />
            <span className="text-sm">Zmień</span>
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default EditableImage;