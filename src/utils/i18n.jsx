import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
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
    de: {
      translation: {
        questions: {
          "1": "Wie zufrieden sind Sie mit Ihrem aktuellen Arbeitsumfeld?",
          "2": "Wie würden Sie die Unterstützung bewerten, die Sie von Ihrem Team erhalten?",
          "3": "Wie fühlen Sie sich bezüglich der Work-Life-Balance in Ihrem Unternehmen?",
          "4": "Wie fühlen Sie sich bezüglich Ihrer Arbeitsbelastung?",
        }
      }
    }
  },
  lng: "en", // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss
  }
});

export default i18n;
