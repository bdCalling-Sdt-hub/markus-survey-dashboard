// translate.js
const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
        format: 'text',
      }),
    });
    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Fallback to original text in case of error
  }
};














// // services/translateApi.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const API_KEY = "AIzaSyAjiUy3TvN_HXlFhyT38srvm8mrUkf-g7w"

// export const translateApi = createApi({
//   reducerPath: 'translateApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://translation.googleapis.com/language/translate/v2',
//   }),
//   endpoints: (builder) => ({
//     translateText: builder.query({
//       query: (text, targetLanguage) => ({
//         url: '',
//         params: {
//           q: text,
//           target: targetLanguage,
//           key: API_KEY,
//         },
//       }),
//     }),
//   }),
// });

// export const { useTranslateTextQuery } = translateApi;
