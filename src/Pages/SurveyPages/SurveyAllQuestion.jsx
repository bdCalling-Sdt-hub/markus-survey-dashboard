import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import smile from "../../assets/images/smile.png";
import angry from "../../assets/images/angry.png";
import silent from "../../assets/images/silent.png";
import sad from "../../assets/images/sad.png";
import blushing from "../../assets/images/blushing.png";
import starImage from "../../assets/images/star.png";
import commentImg from "../../assets/images/comment.png";
import { Progress, Select } from "antd";
import { ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import translateText from "../../translateText";
const SurveyQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [translatedQuestion, setTranslatedQuestion] = useState("");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "de"); // Default to 'de'
  const navigate = useNavigate();
  const { Option } = Select;
  const emoji = true;

  // List of questions
  const questions = {
    1: "How satisfied are you with your current work environment?",
    2: "How would you rate the support you receive from your team?",
    3: "How do you feel about the work-life balance in your company?",
    4: "How do you feel about your workload?",
  };


  // Translate text on component mount and language change
  useEffect(() => {
    const fetchTranslation = async () => {
      const questionText = questions[currentQuestion + 1];
      const translated = await translateText(questionText, language, import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY); // Replace with  API key
      setTranslatedQuestion(translated || questionText);
    };


    fetchTranslation();
  }, [currentQuestion, language]);


  // Handle language change
  const handleLanguageChange = (value) => {
    localStorage.setItem("language", value);
    setLanguage(value);
  };


  const handleAnswerClick = (answer, displayValue) => {
    setSelectedAnswer(displayValue);
    console.log(`Selected: ${displayValue}`);
  };


  const handleNextClick = () => {
    if (selectedAnswer) {
      const updatedAnswers = {
        ...answers,
        [currentQuestion + 1]: selectedAnswer,
      };
      setAnswers(updatedAnswers);


      const newProgress = ((currentQuestion + 1) / Object.keys(questions).length) * 100;
      setProgress(newProgress);


      if (currentQuestion < Object.keys(questions).length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        console.log("Survey completed!", updatedAnswers);
        navigate("/allQuestionAnsPage", { state: { questions, updatedAnswers, language, emoji } });

      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };


  const handleQuitClick = () => {
    navigate("/thankYouPage");
  };


  const renderStars = () => (
    <div className="flex gap-5 justify-center items-center my-12">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className={`btn ${selectedAnswer === index + 1 ? "h-14" : "h-10"}`}
          src={starImage}
          alt={`star ${index + 1}`}
          onClick={() => handleAnswerClick(index + 1, "⭐")}
        />
      ))}
    </div>
  );


  // Render emoji rating
  const renderEmojis = () => (
    <div className="flex gap-5 justify-center items-center my-12">
      <img
        className={`btn ${selectedAnswer === "angry" ? "h-14" : "h-10"}`}
        src={angry}
        alt="angry emoji"
        onClick={() => handleAnswerClick("angry", "😠")}
      />
      <img
        className={`btn ${selectedAnswer === "silent" ? "h-14" : "h-10"}`}
        src={silent}
        alt="silent emoji"
        onClick={() => handleAnswerClick("silent", "🤐")}
      />
      <img
        className={`btn ${selectedAnswer === "sad" ? "h-14" : "h-10"}`}
        src={sad}
        alt="sad emoji"
        onClick={() => handleAnswerClick("sad", "😢")}
      />
      <img
        className={`btn ${selectedAnswer === "blushing" ? "h-14" : "h-10"}`}
        src={blushing}
        alt="blushing emoji"
        onClick={() => handleAnswerClick("blushing", "😊")}
      />
      <img
        className={`btn ${selectedAnswer === "smile" ? "h-14" : "h-10"}`}
        src={smile}
        alt="smile emoji"
        onClick={() => handleAnswerClick("smile", "😊")}
      />
    </div>
  );


  return (
    <div className="container mx-auto bg-[fdfdfd] my-24">
      <ConfigProvider
        theme={{
          components: {
            Form: {
              itemMarginBottom: 20,
            },
            Input: {
              borderRadius: 10,
            },
            Progress: {
              defaultColor: "rgb(250,219,20)",
            },
          },
        }}
      >
        <h1 className="text-3xl text-center my-12">Survey</h1>


         {/* Language Selector */}
         <div className="flex justify-end px-14 items-center">
          <Select
            defaultValue={language}
            style={{ width: 120 }}
            onChange={handleLanguageChange}
          >
            <Option value="af">Afrikaans</Option>
            <Option value="sq">Albanian</Option>
            <Option value="am">Amharic</Option>
            <Option value="ar">Arabic</Option>
            <Option value="hy">Armenian</Option>
            <Option value="az">Azerbaijani</Option>
            <Option value="eu">Basque</Option>
            <Option value="be">Belarusian</Option>
            <Option value="bn">Bengali</Option>
            <Option value="bs">Bosnian</Option>
            <Option value="bg">Bulgarian</Option>
            <Option value="ca">Catalan</Option>
            <Option value="ceb">Cebuano</Option>
            <Option value="ny">Chichewa</Option>
            <Option value="zh">Chinese (Simplified)</Option>
            <Option value="zh-TW">Chinese (Traditional)</Option>
            <Option value="co">Corsican</Option>
            <Option value="hr">Croatian</Option>
            <Option value="cs">Czech</Option>
            <Option value="da">Danish</Option>
            <Option value="nl">Dutch</Option>
            <Option value="en">English</Option>
            <Option value="eo">Esperanto</Option>
            <Option value="et">Estonian</Option>
            <Option value="tl">Filipino</Option>
            <Option value="fi">Finnish</Option>
            <Option value="fr">French</Option>
            <Option value="fy">Frisian</Option>
            <Option value="gl">Galician</Option>
            <Option value="ka">Georgian</Option>
            <Option value="de">German</Option>
            <Option value="el">Greek</Option>
            <Option value="gu">Gujarati</Option>
            <Option value="ht">Haitian Creole</Option>
            <Option value="ha">Hausa</Option>
            <Option value="haw">Hawaiian</Option>
            <Option value="he">Hebrew</Option>
            <Option value="hi">Hindi</Option>
            <Option value="hmn">Hmong</Option>
            <Option value="hu">Hungarian</Option>
            <Option value="is">Icelandic</Option>
            <Option value="ig">Igbo</Option>
            <Option value="id">Indonesian</Option>
            <Option value="ga">Irish</Option>
            <Option value="it">Italian</Option>
            <Option value="ja">Japanese</Option>
            <Option value="jw">Javanese</Option>
            <Option value="kn">Kannada</Option>
            <Option value="kk">Kazakh</Option>
            <Option value="km">Khmer</Option>
            <Option value="rw">Kinyarwanda</Option>
            <Option value="ko">Korean</Option>
            <Option value="ku">Kurdish (Kurmanji)</Option>
            <Option value="ky">Kyrgyz</Option>
            <Option value="lo">Lao</Option>
            <Option value="la">Latin</Option>
            <Option value="lv">Latvian</Option>
            <Option value="lt">Lithuanian</Option>
            <Option value="lb">Luxembourgish</Option>
            <Option value="mk">Macedonian</Option>
            <Option value="mg">Malagasy</Option>
            <Option value="ms">Malay</Option>
            <Option value="ml">Malayalam</Option>
            <Option value="mt">Maltese</Option>
            <Option value="mi">Maori</Option>
            <Option value="mr">Marathi</Option>
            <Option value="mn">Mongolian</Option>
            <Option value="my">Myanmar (Burmese)</Option>
            <Option value="ne">Nepali</Option>
            <Option value="no">Norwegian</Option>
            <Option value="or">Odia (Oriya)</Option>
            <Option value="ps">Pashto</Option>
            <Option value="fa">Persian</Option>
            <Option value="pl">Polish</Option>
            <Option value="pt">Portuguese</Option>
            <Option value="pa">Punjabi</Option>
            <Option value="ro">Romanian</Option>
            <Option value="ru">Russian</Option>
            <Option value="sm">Samoan</Option>
            <Option value="gd">Scots Gaelic</Option>
            <Option value="sr">Serbian</Option>
            <Option value="st">Sesotho</Option>
            <Option value="sn">Shona</Option>
            <Option value="sd">Sindhi</Option>
            <Option value="si">Sinhala</Option>
            <Option value="sk">Slovak</Option>
            <Option value="sl">Slovenian</Option>
            <Option value="so">Somali</Option>
            <Option value="es">Spanish</Option>
            <Option value="su">Sundanese</Option>
            <Option value="sw">Swahili</Option>
            <Option value="sv">Swedish</Option>
            <Option value="tg">Tajik</Option>
            <Option value="ta">Tamil</Option>
            <Option value="tt">Tatar</Option>
            <Option value="te">Telugu</Option>
            <Option value="th">Thai</Option>
            <Option value="tr">Turkish</Option>
            <Option value="tk">Turkmen</Option>
            <Option value="uk">Ukrainian</Option>
            <Option value="ur">Urdu</Option>
            <Option value="ug">Uyghur</Option>
            <Option value="uz">Uzbek</Option>
            <Option value="vi">Vietnamese</Option>
            <Option value="cy">Welsh</Option>
            <Option value="xh">Xhosa</Option>
            <Option value="yi">Yiddish</Option>
            <Option value="yo">Yoruba</Option>
            <Option value="zu">Zulu</Option>
          </Select>
        </div>



        <div>
          <p className="text-center mt-10 px-5">{translatedQuestion}</p>
        </div>


            {/* Render Stars or Emojis based on the emoji flag */}
            {emoji ? renderEmojis() : renderStars()}


        <div className="p-5 w-11/12 mx-auto">
          <p>Total Questions: {Object.keys(questions).length} </p>
          <Progress percent={progress} status="active" />
        </div>


        <Form
          name="basic"
          labelCol={{ xs: 24, sm: 24, md: 24 }}
          wrapperCol={{ xs: 24, sm: 24, md: 24 }}
          style={{
            maxWidth: "100%",
            width: "400px",
            margin: "0 auto",
            padding: "10px",
          }}
          initialValues={{ remember: true }}
          onFinish={(values) => console.log("Success:", values)}
          onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
          autoComplete="off"
        >
          <div className="flex justify-center items-center">
            <img src={commentImg} alt="comment" className="h-8 -mr-8 z-10" />
            <TextArea
              rows={1}
              placeholder="Write your comment here"
              className="pl-14 text-start"
            />
          </div>
        </Form>
      </ConfigProvider>


      <div className="flex flex-col gap-5 justify-center items-center my-8">
        <button
          className="py-2 w-44 bg-[#ecb206] text-white rounded-md"
          onClick={handleNextClick}
        >
          Next
        </button>
        <button
          className="py-2 w-44 border-2 border-[#ecb206] rounded-md"
          onClick={handleQuitClick}
        >
          Quit
        </button>
      </div>
    </div>
  );
};


export default SurveyQuestions;
