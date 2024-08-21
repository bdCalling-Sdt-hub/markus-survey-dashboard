import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "question1": "How satisfied are you with your current work environment?",
        "question2": "How would you rate the support you receive from your team?",
        "question3": "How do you feel about the work-life balance in your company?",
        "question4": "How do you feel about your workload?",
      }
    },
    de: {
      translation: {
        "question1": "Wie zufrieden sind Sie mit Ihrem aktuellen Arbeitsumfeld?",
        "question2": "Wie würden Sie die Unterstützung bewerten, die Sie von Ihrem Team erhalten?",
        "question3": "Wie fühlen Sie sich bezüglich der Work-Life-Balance in Ihrem Unternehmen?",
        "question4": "Wie fühlen Sie sich bezüglich Ihrer Arbeitsbelastung?",
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
