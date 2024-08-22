// utils/translate.js
const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'AIzaSyAjiUy3TvN_HXlFhyT38srvm8mrUkf-g7w';

export const translateText = async (text, targetLang) => {
  try {
    const response = await fetch(`${GOOGLE_TRANSLATE_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch translation');
    }

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // fallback to the original text
  }
};
