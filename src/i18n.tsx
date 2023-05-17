import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "navbar.about": "about",
          "navbar.offer": "our offer",
          "navbar.contact": "contact",

          "banner.title": "Our company offers services of the highest quality.",
          "banner.subtitle": "Don't take our word for it - check it out yourself!",
          "banner.buttonTitle": "our offer",

          "specialists.title": "Our specialists",

          "offer.title": "What does our company do?",

          "offer.new": "(new)",

          "service.audit": "Audit",
          "service.tax": "Tax advisory",
          "service.consulting": "Consulting",
          "service.accounting": "Accounting",
          "service.reporting": "Financial reporting",
          "service.erp": "ERP technical support",


          "footer.title": "BC Group - All rights reserved, 2023",


          navbar: {
            about: "about us",
            oferta: "our offer",
            contact: "contact"
          },
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "To get started, edit <1>src/App.js</1> and save to reload.",
          "Welcome to React": "Welcome to React and react-i18next",
          welcome: "Hello <br/> <strong>World</strong>"
        }
      },
      pl: {
        translations: {
          "navbar.about": "o nas",
          "navbar.offer": "oferta",
          "navbar.contact": "kontakt",

          "banner.title": "Nasza firma oferuje najwyższej jakości produkty.",
          "banner.subtitle": "Nie wierz nam na słowo - sprawdź",
          "banner.buttonTitle": "oferta",

          "specialists.title": "Nasi specjaliści",

          "offer.title": "Czym zajmuje się nasza firma?",

          "offer.new": "(nowość)",


          "service.audit": "Audyt",
          "service.tax": "Doradztwo podatkowe",
          "service.consulting": "Consulting",
          "service.accounting": "Księgowość",
          "service.reporting": "Raportowanie finansowe",
          "service.erp": "Wsparcie techniczne systemów ERP",

          "footer.title": "Nazwa firmy - wszelkie prawa zastrzeżone, 2023",


          navbar: {
            about: "o nas",
            oferta: "oferta",
            contact: "kontakt"
          }
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;