import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SelectLanguagePage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [targetLanguage, setTargetLanguage] = useState("de"); // Default to German
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  const handleLanguageChange = (lang) => {
    setTargetLanguage(lang);
    setIsLanguageSelected(true);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  const handleContinue = () => {
    if (isLanguageSelected) {
      navigate("/surveyQuestions");
    }
  };

  const handleGermanClick = () => {
    setTargetLanguage("de");
    setIsLanguageSelected(true);
    localStorage.setItem("language", "de");
    i18n.changeLanguage("de");
  };

  // Load language from local storage or default to 'de'
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setTargetLanguage(savedLang);
      i18n.changeLanguage(savedLang);
      setIsLanguageSelected(true);
    } else {
      i18n.changeLanguage("de");
    }
  }, [i18n]);

  return (
    <div className="bg-[fdfdfd] container mx-auto mt-60">
      <h1 className="text-center font-semibold text-[#ecb206] text-4xl">
        Select Language
      </h1>
      <div className="flex justify-center my-10 items-center">
        <div className="flex gap-5 justify-center items-center border-2 rounded-3xl py-2 px-3 border-[#ecb206]">
          <button
            onClick={handleGermanClick}
            className={`py-1 px-3 font-semibold${
              targetLanguage === "de" ? "font-bold text-[#ecb206]" : ""
            }`}
          >
            German
          </button>
          <select
            value={targetLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="py-1 px-3 border-none outline-none bg-transparent text-[#ecb206]"
          >
         <option value="af">Afrikaans</option>
            <option value="sq">Albanian</option>
            <option value="am">Amharic</option>
            <option value="ar">Arabic</option>
            <option value="hy">Armenian</option>
            <option value="az">Azerbaijani</option>
            <option value="eu">Basque</option>
            <option value="be">Belarusian</option>
            <option value="bn">Bengali</option>
            <option value="bs">Bosnian</option>
            <option value="bg">Bulgarian</option>
            <option value="ca">Catalan</option>
            <option value="ceb">Cebuano</option>
            <option value="ny">Chichewa</option>
            <option value="zh">Chinese (Simplified)</option>
            <option value="zh-TW">Chinese (Traditional)</option>
            <option value="co">Corsican</option>
            <option value="hr">Croatian</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="eo">Esperanto</option>
            <option value="et">Estonian</option>
            <option value="tl">Filipino</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="fy">Frisian</option>
            <option value="gl">Galician</option>
            <option value="ka">Georgian</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="gu">Gujarati</option>
            <option value="ht">Haitian Creole</option>
            <option value="ha">Hausa</option>
            <option value="haw">Hawaiian</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="hmn">Hmong</option>
            <option value="hu">Hungarian</option>
            <option value="is">Icelandic</option>
            <option value="ig">Igbo</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="jw">Javanese</option>
            <option value="kn">Kannada</option>
            <option value="kk">Kazakh</option>
            <option value="km">Khmer</option>
            <option value="rw">Kinyarwanda</option>
            <option value="ko">Korean</option>
            <option value="ku">Kurdish (Kurmanji)</option>
            <option value="ky">Kyrgyz</option>
            <option value="lo">Lao</option>
            <option value="la">Latin</option>
            <option value="lv">Latvian</option>
            <option value="lt">Lithuanian</option>
            <option value="lb">Luxembourgish</option>
            <option value="mk">Macedonian</option>
            <option value="mg">Malagasy</option>
            <option value="ms">Malay</option>
            <option value="ml">Malayalam</option>
            <option value="mt">Maltese</option>
            <option value="mi">Maori</option>
            <option value="mr">Marathi</option>
            <option value="mn">Mongolian</option>
            <option value="my">Myanmar (Burmese)</option>
            <option value="ne">Nepali</option>
            <option value="no">Norwegian</option>
            <option value="or">Odia (Oriya)</option>
            <option value="ps">Pashto</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="pa">Punjabi</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sm">Samoan</option>
            <option value="gd">Scots Gaelic</option>
            <option value="sr">Serbian</option>
            <option value="st">Sesotho</option>
            <option value="sn">Shona</option>
            <option value="sd">Sindhi</option>
            <option value="si">Sinhala</option>
            <option value="sk">Slovak</option>
            <option value="sl">Slovenian</option>
            <option value="so">Somali</option>
            <option value="es">Spanish</option>
            <option value="su">Sundanese</option>
            <option value="sw">Swahili</option>
            <option value="sv">Swedish</option>
            <option value="tg">Tajik</option>
            <option value="ta">Tamil</option>
            <option value="tt">Tatar</option>
            <option value="te">Telugu</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="tk">Turkmen</option>
            <option value="uk">Ukrainian</option>
            <option value="ur">Urdu</option>
            <option value="ug">Uyghur</option>
            <option value="uz">Uzbek</option>
            <option value="vi">Vietnamese</option>
            <option value="cy">Welsh</option>
            <option value="xh">Xhosa</option>
            <option value="yi">Yiddish</option>
            <option value="yo">Yoruba</option>
            <option value="zu">Zulu</option>

          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleContinue}
          disabled={!isLanguageSelected}
          className={`py-2 px-4 rounded-md ${
            isLanguageSelected ? "bg-[#ecb206] text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
