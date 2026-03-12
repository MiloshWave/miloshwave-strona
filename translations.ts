

export const content = {
  pl: {
    nav: {
      about: "O mnie",
      offer: "Oferta",
      reviews: "Opinie",
      faq: "FAQ",
      calendar: "Kalendarz",
      location: "Lokalizacja",
      contact: "Kontakt",
      book: "Zapisz się",
      bookLesson: "Zapisz się na lekcję"
    },
    hero: {
      locationBadge: "Neustadt an der Weinstraße",
      titleMain: "Profesjonalna nauka pływania",
      titleHighlight: "bez stresu i bariery językowej.",
      description: "Jako Magister WF z 10-letnim stażem pomagam dzieciom i dorosłym poczuć się pewnie w wodzie. Indywidualne podejście w Twoim języku – w Neustadt i okolicach.",
      viewOffer: "Zobacz ofertę",
      callNow: "Umów bezpłatną rozmowę (10 min)",
      contact: "Skontaktuj się",
      meetInstructor: "Poznaj trenera",
      availableDates: "Dostępne terminy",
      individualApproach: "Indywidualne podejście"
    },
    stats: {
      clients: { value: "150+", label: "Zadowolonych uczniów" },
      lessons: { value: "2000+", label: "Przeprowadzonych lekcji" },
      certificates: { value: "8", label: "Certyfikatów i szkoleń" }
    },
    about: {
      languageBadgeLabel: "Język",
      languageBadgeValue: "Polski & Niemiecki",
      subtitle: "Twój instruktor",
      title: "Pasja do pływania,\nprofesjonalne podejście.",
      p1: "Cześć, nazywam się Miłosz. Jestem Magistrem Wychowania Fizycznego (AWF Kraków) i od ponad dekady uczę pływania. Moje doświadczenie zdobywałem m.in. w szkołach międzynarodowych, co nauczyło mnie, że każde dziecko i dorosły potrzebuje innego klucza do sukcesu.",
      p2: "Na moich lekcjach nie ma krzyku ani presji – jest za to pasja, biomechanika i zrozumienie Twoich potrzeb. Prowadzę Cię za rękę od pierwszego zanurzenia do pełnej swobody w wodzie.",
      p3: "",
      p4: "",
      card1Title: "Certyfikowany Trener",
      card1Desc: "Licencja ratownika i instruktora pływania uznawana w UE.",
      card2Title: "Bez Stresu",
      card2Desc: "Cierpliwość i przyjazna atmosfera to podstawa moich zajęć."
    },
    services: {
      subtitle: "Oferta",
      title: "Zajęcia dopasowane do Twoich potrzeb",
      description: "Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z wodą, czy chcesz poprawić technikę – znajdziemy odpowiedni plan dla Ciebie.",
      kids: {
        title: "Dla Dzieci",
        description: "Nauka poprzez zabawę. Oswajanie z wodą i podstawy stylów pływackich dla najmłodszych.",
        price: "od 25€ / lekcja",
        features: ['Małe grupy lub 1:1', 'Gry i zabawy w wodzie', 'Bezpieczeństwo przede wszystkim', 'Budowanie pewności siebie']
      },
      adults: {
        title: "Dla Dorosłych",
        description: "Nigdy nie jest za późno na naukę. Przełam strach i naucz się pływać poprawnie technicznie.",
        price: "od 50€ / lekcja",
        features: ['Nauka od podstaw', 'Korekta błędów technicznych', 'Trening oddechowy', 'Elastyczne godziny'],
        popularTag: "Najczęściej wybierane"
      },
      pro: {
        title: "Doskonalenie Techniki",
        description: "Dla osób, które już pływają, ale chcą poprawić wydajność, szybkość i styl.",
        price: "60€ / lekcja",
        features: ['Analiza wideo', 'Zaawansowane ćwiczenia', 'Plany treningowe', 'Przygotowanie do zawodów']
      },
      choose: "Wybieram"
    },
    pricing: {
      subtitle: "Cennik",
      title: "Szczegółowy cennik usług",
      note: "* Ceny nie zawierają biletu wstępu na basen.",
      headers: {
        service: "Rodzaj zajęć",
        time: "Czas",
        single: "1 Lekcja",
        pack5: "Pakiet 5",
        pack10: "Pakiet 10",
        info: "W cenie"
      },
      rows: [
        {
          name: "Grupa (Dzieci i Dorośli)",
          badge: "Wkrótce",
          time: "45 min",
          single: "30€",
          pack5: "140€",
          pack5PerLesson: "(28€ / lekcja)",
          pack10: "270€",
          pack10PerLesson: "(27€ / lekcja)",
          info: "Startujemy wkrótce! Zapisy otwarte."
        },
        {
          name: "Dzieci (Indywidualnie)",
          time: "45 min",
          single: "50€",
          pack5: "225€",
          pack5PerLesson: "(45€ / lekcja)",
          pack10: "425€",
          pack10PerLesson: "(42.5€ / lekcja)",
          info: "Pełna uwaga trenera, szybsze efekty"
        },
        {
          name: "Dorośli (Indywidualnie)",
          time: "45 min",
          single: "50€",
          pack5: "225€",
          pack5PerLesson: "(45€ / lekcja)",
          pack10: "425€",
          pack10PerLesson: "(42.5€ / lekcja)",
          info: "Indywidualny plan, korekta techniki"
        },
        {
          name: "Pary (Dorośli)",
          time: "45 min",
          single: "70€",
          pack5: "325€",
          pack5PerLesson: "(65€ / lekcja)",
          pack10: "600€",
          pack10PerLesson: "(60€ / lekcja)",
          info: "Cena za 2 osoby, wspólna nauka"
        },
        {
          name: "Rodzeństwo",
          time: "45 min",
          single: "Kontakt",
          pack5: "-",
          pack5PerLesson: "",
          pack10: "-",
          pack10PerLesson: "",
          info: "Cena ustalana indywidualnie"
        },
        {
          name: "Analiza Wideo PRO",
          time: "60 min",
          single: "60€",
          pack5: "-",
          pack5PerLesson: "",
          pack10: "-",
          pack10PerLesson: "",
          info: "Nagranie, analiza, plan naprawczy"
        }
      ],
      pricingFeatures: [
        {
          title: "Zajęcia Grupowe",
          subtitle: "Dla dzieci i dorosłych",
          badge: "Wkrótce",
          price: "30€",
          duration: "45 min",
          features: ["Małe grupy", "Atrakcyjna cena", "Start wkrótce"]
        },
        {
          title: "Indywidualne",
          subtitle: "Dzieci i Dorośli",
          price: "50€",
          duration: "45 min",
          features: ["100% uwagi trenera", "Szybsze postępy", "Dopasowany program"]
        },
        {
          title: "Dla Par / Duo",
          subtitle: "Dorośli i Rodzeństwo",
          price: "70€",
          priceDetail: "(35€ za osobę)",
          duration: "45 min",
          features: ["Wspólna motywacja", "Niższa cena za osobę", "Elastyczny program"]
        }
      ]
    },
    calendar: {
      subtitle: "Terminarz",
      title: "Sprawdź dostępność",
      description: "Poniżej znajdziesz mój kalendarz z wolnymi terminami. Wybierz pasującą datę i skontaktuj się, aby zarezerwować lekcję.",
      openNewWindow: "Otwórz kalendarz w nowym oknie",
      cookiesRequired: "Aby zobaczyć kalendarz, musisz zaakceptować pliki cookies.",
      enableCookies: "Zmień ustawienia cookies"
    },
    testimonials: {
      subtitle: "Opinie",
      title: "Co mówią rodzice i moi uczniowie?",
      items: [
        { name: 'Marta', location: 'mama 5-letniego Antosia', text: 'Długo szukaliśmy instruktora, który mówi po polsku i ma cierpliwość do dzieci. Pan Miłosz to magik! Antoś, który panicznie bał się wody, po trzech lekcjach sam robi bąbelki i nie chce wychodzić z basenu. Polecam każdemu rodzicowi!' },
        { name: 'Piotr', location: 'nauka od podstaw (34 lata)', text: 'Myślałem, że w moim wieku nauka pływania to już wyzwanie. Dzięki Panu Miłoszowi przełamałem lęk. Pełen profesjonalizm, wiedza z AWF i zero stresu. Każda lekcja 1-na-1 jest warta swojej ceny.' },
        { name: 'Krzysztof', location: 'przygotowanie do zawodów', text: 'Polecam Pana Miłosza za jego oko do techniki. Analiza wideo pozwoliła mi wyeliminować błędy w kraulu, których nie widziałem przez lata. Pływam teraz lżej i znacznie szybciej.' }
      ]
    },
    faq: {
      subtitle: "Pytania i odpowiedzi",
      title: "Warto wiedzieć",
      items: [
        { question: "Gdzie odbywają się zajęcia?", answer: "Wszystkie lekcje odbywają się na basenie Stadionbad w Neustadt an der Weinstraße (Sauterstraße 14). Jest to nowoczesny obiekt z basenami odpowiednimi zarówno dla dzieci, jak i dorosłych." },
        { question: "Ile trwają lekcje?", answer: "Standardowa lekcja trwa 45 minut. Jest to optymalny czas, aby utrzymać koncentrację (szczególnie u dzieci) i efektywnie popracować nad techniką." },
        { question: "Czy cena obejmuje wstęp na basen?", answer: "Nie, bilet wstępu na basen należy zakupić we własnym zakresie w kasie pływalni. Oferuję jednak pomoc w zakupie karnetów, które wychodzą korzystniej cenowo." },
        { question: "Czy muszę umieć mówić po niemiecku?", answer: "Absolutnie nie! To jest główna zaleta moich zajęć. Cała komunikacja odbywa się w języku polskim, co eliminuje stres i pozwala szybciej robić postępy." },
        { question: "Co muszę zabrać na pierwszą lekcję?", answer: "Wygodny strój kąpielowy, klapki, ręcznik oraz okularki pływackie. Jeśli masz długie włosy, czepek będzie bardzo przydatny." }
      ]
    },
    contact: {
      subtitle: "Lokalizacja i Kontakt",
      title: "Zacznij pływać w Neustadt",
      description: "Masz pytania? Chcesz zapisać dziecko lub siebie na zajęcia? Zadzwoń lub napisz. Odpowiadam po polsku i po niemiecku.",
      call: "Zadzwoń do mnie",
      email: "Napisz email",
      whatsapp: "Napisz na WhatsApp",
      addressLabel: "Lokalizacja basenu",
      openMap: "Otwórz w Google Maps",
      formTitle: "Formularz kontaktowy",
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "np. Jan Kowalski",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Dzień dobry, chciałbym zapisać syna na lekcje pływania...",
      submit: "Wyślij wiadomość",
      privacy: "Twoje dane są bezpieczne. Odpowiem najszybciej jak to możliwe.",
      success: "Dziękujemy za wiadomość! Skontaktujemy się wkrótce."
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      desc: "Profesjonalny Schwimmlehrer w Neustadt an der Weinstraße.",
      cookies: "Ustawienia Cookies"
    },
    cookies: {
      text: "Ta strona używa plików cookies, aby zapewnić najlepszą jakość korzystania z naszej witryny. Niektóre z nich są niezbędne, inne pomagają nam w celach marketingowych i analitycznych.",
      accept: "Akceptuj wszystkie",
      decline: "Tylko niezbędne"
    }
  },
  de: {
    nav: {
      about: "Über mich",
      offer: "Angebot",
      reviews: "Bewertungen",
      faq: "FAQ",
      calendar: "Kalender",
      location: "Standort",
      contact: "Kontakt",
      book: "Anmelden",
      bookLesson: "Stunde buchen"
    },
    hero: {
      locationBadge: "Neustadt an der Weinstraße",
      titleMain: "Professionelles Schwimmtraining in Neustadt",
      titleHighlight: "– Effizienz durch Fachkompetenz.",
      description: "Master of Physical Education & 10 Jahre Erfahrung. Individuelles Coaching für Kinder und Erwachsene. Sportwissenschaftlicher Ansatz für schnellere Fortschritte und maximale Sicherheit.",
      viewOffer: "Angebot ansehen",
      callNow: "Jetzt Beratungsgespräch buchen",
      contact: "Kontakt aufnehmen",
      meetInstructor: "Trainer kennenlernen",
      availableDates: "Verfügbare Termine",
      individualApproach: "Individueller Ansatz"
    },
    stats: {
      clients: { value: "150+", label: "Zufriedene Schüler" },
      lessons: { value: "2000+", label: "Gegebene Stunden" },
      certificates: { value: "8", label: "Zertifikate" }
    },
    about: {
      languageBadgeLabel: "Sprache",
      languageBadgeValue: "Polnisch & Deutsch",
      subtitle: "Ihr Schwimmlehrer",
      title: "Leidenschaft fürs Schwimmen,\nprofessioneller Ansatz.",
      p1: "Mein Name ist Miłosz, ich bin Diplom-Sportlehrer (Master of PE) mit über 10-jähriger Erfahrung im internationalen Bildungsbereich. Mein Coaching basiert auf sportwissenschaftlichen Erkenntnissen und moderner Pädagogik.",
      p2: "Ob Wassergewöhnung für Kinder oder Technikoptimierung für Erwachsene – ich biete Ihnen eine fundierte Analyse und ein hocheffizientes 1-zu-1 Training, das Sie schneller und sicherer an Ihr Ziel bringt. Professionalität und Sicherheit stehen bei mir an erster Stelle.",
      p3: "",
      p4: "",
      card1Title: "Zertifizierter Trainer",
      card1Desc: "Rettungsschwimmer- und Schwimmlehrerlizenz, anerkannt in der EU.",
      card2Title: "Kein Stress",
      card2Desc: "Geduld und eine freundliche Atmosphäre sind die Grundlage meines Unterrichts."
    },
    services: {
      subtitle: "Angebot",
      title: "Auf Ihre Bedürfnisse zugeschnitten",
      description: "Egal, ob Sie Ihr Abenteuer im Wasser gerade erst beginnen oder Ihre Technik verbessern möchten – wir finden den richtigen Plan für Sie.",
      kids: {
        title: "Für Kinder",
        description: "Lernen durch Spielen. Wassergewöhnung und Grundlagen der Schwimmstile für die Kleinsten.",
        price: "ab 25€ / Lektion",
        features: ['Kleine Gruppen oder 1:1', 'Spiele im Wasser', 'Sicherheit steht an erster Stelle', 'Selbstvertrauen aufbauen']
      },
      adults: {
        title: "Für Erwachsene",
        description: "Es ist nie zu spät zu lernen. Überwinden Sie Ihre Angst und lernen Sie die richtige Technik.",
        price: "ab 50€ / Lektion",
        features: ['Lernen von Grund auf', 'Korrektur technischer Fehler', 'Atemtraining', 'Flexible Zeiten'],
        popularTag: "Am beliebtesten"
      },
      pro: {
        title: "Technikverbesserung",
        description: "Für Personen, die bereits schwimmen, aber ihre Leistung, Geschwindigkeit und ihren Stil verbessern möchten.",
        price: "60€ / Lektion",
        features: ['Videoanalyse', 'Fortgeschrittene Übungen', 'Trainingspläne', 'Wettkampfvorbereitung']
      },
      choose: "Auswählen"
    },
    pricing: {
      subtitle: "Preisliste",
      title: "Detaillierte Preisliste",
      note: "* Preise beinhalten nicht den Eintritt ins Schwimmbad.",
      headers: {
        service: "Dienstleistung",
        time: "Dauer",
        single: "1 Lektion",
        pack5: "5er Karte",
        pack10: "10er Karte",
        info: "Inklusive"
      },
      rows: [
        {
          name: "Gruppe (Kinder & Erwachsene)",
          badge: "Bald verfügbar",
          time: "45 min",
          single: "30€",
          pack5: "140€",
          pack5PerLesson: "(28€ / Lektion)",
          pack10: "270€",
          pack10PerLesson: "(27€ / Lektion)",
          info: "Startet bald! Anmeldung offen."
        },
        {
          name: "Kinder (Einzel)",
          time: "45 min",
          single: "50€",
          pack5: "225€",
          pack5PerLesson: "(45€ / Lektion)",
          pack10: "425€",
          pack10PerLesson: "(42.5€ / Lektion)",
          info: "Volle Aufmerksamkeit, schnellere Ergebnisse"
        },
        {
          name: "Erwachsene (Einzel)",
          time: "45 min",
          single: "50€",
          pack5: "225€",
          pack5PerLesson: "(45€ / Lektion)",
          pack10: "425€",
          pack10PerLesson: "(42.5€ / Lektion)",
          info: "Individueller Plan, Technikkorrektur"
        },
        {
          name: "Paare (Erwachsene)",
          time: "45 min",
          single: "70€",
          pack5: "325€",
          pack5PerLesson: "(65€ / Lektion)",
          pack10: "600€",
          pack10PerLesson: "(60€ / Lektion)",
          info: "Preis für 2 Personen, gemeinsames Lernen"
        },
        {
          name: "Geschwister",
          time: "45 min",
          single: "Kontakt",
          pack5: "-",
          pack5PerLesson: "",
          pack10: "-",
          pack10PerLesson: "",
          info: "Preis auf Anfrage / Individuell"
        },
        {
          name: "Videoanalyse PRO",
          time: "60 min",
          single: "60€",
          pack5: "-",
          pack5PerLesson: "",
          pack10: "-",
          pack10PerLesson: "",
          info: "Aufnahme, Analyse, Korrekturplan"
        }
      ],
      pricingFeatures: [
        {
          title: "Gruppenunterricht",
          subtitle: "Kinder & Erwachsene",
          badge: "Bald verfügbar",
          price: "30€",
          duration: "45 min",
          features: ["Kleine Gruppen", "Günstigerer Preis", "Startet bald"]
        },
        {
          title: "Einzelunterricht",
          subtitle: "Kinder und Erwachsene",
          price: "50€",
          duration: "45 min",
          features: ["100% Aufmerksamkeit", "Schnellere Fortschritte", "Angepasstes Programm"]
        },
        {
          title: "Für Paare / Duo",
          subtitle: "Erwachsene und Geschwister",
          price: "70€",
          priceDetail: "(35€ pro Person)",
          duration: "45 min",
          features: ["Gemeinsame Motivation", "Günstigerer Preis pro Person", "Flexibles Programm"]
        }
      ]
    },
    calendar: {
      subtitle: "Termine",
      title: "Verfügbarkeit prüfen",
      description: "Unten finden Sie meinen Kalender mit freien Terminen. Wählen Sie ein passendes Datum und kontaktieren Sie mich, um eine Lektion zu buchen.",
      openNewWindow: "Kalender in neuem Fenster öffnen",
      cookiesRequired: "Um den Kalender zu sehen, müssen Sie Cookies akzeptieren.",
      enableCookies: "Cookie-Einstellungen ändern"
    },
    testimonials: {
      subtitle: "Bewertungen",
      title: "Das sagen meine Kunden",
      items: [
        { name: 'Sabine', location: 'Mutter von Elias (6 J.)', text: 'Hervorragendes pädagogisches Geschick! Miłosz hat eine unglaubliche Geduld. Als Master of PE weiß er genau, wie er Kinder motiviert. Mein Sohn hat enorme Fortschritte beim Seepferdchen-Training gemacht. Absolut empfehlenswert!' },
        { name: 'Thomas', location: 'Technik-Optimierung', text: 'Ich habe jemanden gesucht, der die Biomechanik des Schwimmens versteht. Die Videoanalyse bei Miłosz war ein Game-Changer für meinen Kraulstil. Professionell, kompetent und zielorientiert. Top-Coach in der Pfalz!' },
        { name: 'Annett', location: 'Angstabbau Erwachsene', text: 'Sehr einfühlsamer Unterricht. Miłosz nimmt einem die Angst und erklärt jeden Schritt wissenschaftlich fundiert. Ich fühle mich zum ersten Mal sicher im Wasser. Danke für die tolle Unterstützung!' }
      ]
    },
    faq: {
      subtitle: "FAQ",
      title: "Wissenswertes",
      items: [
        { question: "Wo findet der Unterricht statt?", answer: "Alle Lektionen finden im Stadionbad in Neustadt an der Weinstraße (Sauterstraße 14) statt. Es ist eine moderne Anlage mit Becken, die sowohl für Kinder als auch für Erwachsene geeignet sind." },
        { question: "Wie lange dauern die Lektionen?", answer: "Eine Standardlektion dauert 45 Minuten. Das ist die optimale Zeit, um die Konzentration aufrechtzuerhalten (besonders bei Kindern) und effektiv an der Technik zu arbeiten." },
        { question: "Ist der Eintritt ins Schwimmbad im Preis inbegriffen?", answer: "Nein, die Eintrittskarte für das Schwimmbad muss selbst an der Kasse gekauft werden. Ich helfe jedoch beim Kauf von Dauerkarten, die preislich günstiger sind." },
        { question: "Muss ich Deutsch sprechen können?", answer: "Absolut nicht! Das ist der Hauptvorteil meines Unterrichts. Die gesamte Kommunikation findet auf Polnisch statt, was Stress eliminiert und schnellere Fortschritte ermöglicht." },
        { question: "Was muss ich zur ersten Lektion mitbringen?", answer: "Bequeme Badekleidung, Badeschuhe, Handtuch und Schwimmbrille. Wenn Sie lange Haare haben, ist eine Badekappe sehr nützlich." }
      ]
    },
    contact: {
      subtitle: "Standort und Kontakt",
      title: "Beginnen Sie mit dem Schwimmen",
      description: "Haben Sie Fragen? Möchten Sie Ihr Kind oder sich selbst anmelden? Rufen Sie an oder schreiben Sie. Ich antworte auf Polnisch und Deutsch.",
      call: "Rufen Sie mich an",
      email: "E-Mail schreiben",
      whatsapp: "Schreiben Sie auf WhatsApp",
      addressLabel: "Standort des Schwimmbads",
      openMap: "In Google Maps öffnen",
      formTitle: "Kontaktformular",
      nameLabel: "Vor- und Nachname",
      namePlaceholder: "z.B. Jan Kowalski",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      messagePlaceholder: "Guten Tag, ich möchte meinen Sohn für den Schwimmunterricht anmelden...",
      submit: "Nachricht senden",
      privacy: "Ihre Daten sind sicher. Ich antworte so schnell wie möglich.",
      success: "Danke für Ihre Nachricht! Wir werden uns bald bei Ihnen melden."
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      desc: "Professioneller Schwimmlehrer in Neustadt an der Weinstraße.",
      cookies: "Cookie-Einstellungen"
    },
    cookies: {
      text: "Diese Website verwendet Cookies, um Ihnen das beste Nutzungserlebnis zu bieten. Einige sind notwendig, andere helfen uns zu Marketing- und Analysezwecken.",
      accept: "Alle akzeptieren",
      decline: "Nur notwendige"
    }
  }
};