import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('language') || 'de'; // Default to 'de'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          questions: {
            "1": "How satisfied are you with your current work environment?",
            "2": "How would you rate the support you receive from your team?",
            "3": "How do you feel about the work-life balance in your company?",
            "4": "How do you feel about your workload?",
          }
        }
      },
    },
    lng: storedLanguage, // Set language from local storage
    fallbackLng: 'de', // Fallback language

    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
