import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import smile from "../../assets/images/smile.png";
import angry from "../../assets/images/angry.png";
import silent from "../../assets/images/silent.png";
import sad from "../../assets/images/sad.png";
import blushing from "../../assets/images/blushing.png";
import starImage from "../../assets/images/star.png";
import { Progress, Select } from "antd";
import { ConfigProvider } from "antd";
import translateText from "../../translateText"; // Adjust the path to where your function is located

// Toggle between emoji and star
const emoji = true;

const { Option } = Select;

const SurveyQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [translatedQuestion, setTranslatedQuestion] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "de"
  ); // Default to 'de'
  const navigate = useNavigate();

  // List of questions
  const questions = {
    1: "How satisfied are you with your current work environment?",
    2: "How would you rate the support you receive from your team?",
    3: "How do you feel about the work-life balance in your company?",
    4: "How do you feel about your workload?",
  };

  // Fetch translated question whenever the language or current question changes
  useEffect(() => {
    const fetchTranslation = async () => {
      const questionText = questions[currentQuestion + 1];
      const translated = await translateText(
        questionText,
        language,
        import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY
      );
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

      const newProgress =
        ((currentQuestion + 1) / Object.keys(questions).length) * 100;
      setProgress(newProgress);

      if (currentQuestion < Object.keys(questions).length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        console.log("Survey completed!", updatedAnswers);
        navigate("/allQuestionAnsPage", {
          state: { questions: Object.keys(questions), answers: updatedAnswers },
        });
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  const handleQuitClick = () => {
    navigate("/thankYouPage");
  };

  // Render star rating
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
            {/* Add language options here */}
          </Select>
        </div>

        <Progress
          percent={progress}
          status="active"
          strokeColor="rgb(250,219,20)"
          className="my-6"
        />

        <h2 className="text-2xl text-center my-6">{translatedQuestion}</h2>

        {/* Render Stars or Emojis based on the emoji flag */}
        {emoji ? renderEmojis() : renderStars()}

        {/* Submit and Quit Buttons */}
        <div className="flex justify-between px-12">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleQuitClick}
          >
            Quit
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default SurveyQuestions;
