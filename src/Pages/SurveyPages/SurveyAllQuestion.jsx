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
import {
  useGetSurveyQNQuery,
  usePostSurveyQnMutation,
} from "../../redux/api/baseapi";

const SurveyQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [translatedQuestion, setTranslatedQuestion] = useState("");
  const navigate = useNavigate();
  const { Option } = Select;
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "de"
  );

  // RTK Query for fetching survey questions
  const { data: surveydata } = useGetSurveyQNQuery({});
  const [postSurveyQn, { data: surveyQn, isLoading }] =
    usePostSurveyQnMutation();

  // handle star or emoji
  const emoji = surveydata?.survey?.survey?.emoji_or_star === "emoji";

  // Handle Questions:
  const SVquestions = surveydata?.survey?.survey?.questions || [];
  const questionsId = surveydata?.survey?.survey?.questions;

  if (questionsId && Array.isArray(questionsId)) {
    questionsId.forEach((question) => {
      const questionId = question?.id;
      // console.log(questionId);
    });
  } else {
    // console.log('error');
  }

  const currentComment = SVquestions[currentQuestion]?.comment;
  // Handle translation on component mount and language change
  useEffect(() => {
    const fetchTranslation = async () => {
      const questionText = SVquestions[currentQuestion]?.question_en || "";

      const translated = await translateText(
        questionText,
        language,
        import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY
      );
      setTranslatedQuestion(translated || questionText);
    };

    fetchTranslation();
  }, [currentQuestion, language, SVquestions]);

  // Handle language change
  const handleLanguageChange = (value) => {
    localStorage.setItem("language", value);
    setLanguage(value);
  };

  // Handle answer selection
  const handleAnswerClick = (answer, displayValue) => {
    setSelectedAnswer(displayValue);
  };

  // Handle "Next" button click
  console.log(SVquestions[2]);
  const handleNextClick = async () => {
    try {
      if (selectedAnswer) {
        const questionId = SVquestions[currentQuestion]?.id;
        const commentText = document.querySelector("textarea")?.value || "";

        // Create FormData and append the question, answer, and comment
        console.log(questionId);
        let data = new FormData();
        data.append("question_id", questionId);
        data.append("answer", selectedAnswer);
        data.append("comment", currentComment === 1 ? commentText : "");

        for (const [key, value] of data.entries()) {
          console.log(`${key}: ${value}`);
        }

        // Submit current answer to the server
        const response = await postSurveyQn(data)
          .unwrap()
          .then((res) => {
            alert("thank you");
            setCurrentQuestion(currentQuestion + 1);
          })
          .catch((err) => {
            alert(
              err?.data?.message || "you have already submitted that survay"
            );
            if (err?.status == 409) {
              setCurrentQuestion(currentQuestion + 1);
            }
          });

        console.log("Server response:", response);

        // Update progress and state
        const updatedAnswers = {
          ...answers,
          [currentQuestion]: selectedAnswer,
        };
        setAnswers(updatedAnswers);

        const newProgress = ((currentQuestion + 1) / SVquestions.length) * 100;
        setProgress(newProgress);

        // Navigate to the next question or finish
        if (currentQuestion < SVquestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          navigate("/allQuestionAnsPage", {
            state: { SVquestions, answers: updatedAnswers, language, emoji },
          });
        }
      } else {
        alert("Please select an answer before proceeding.");
      }
    } catch (error) {
      console.error("Error submitting survey answer:", error);
    }
  };

  const handleQuitClick = () => {
    navigate("/thankYouPage");
  };

  // Render stars rating
  const renderStars = () => (
    <div className="flex gap-5 justify-center items-center my-12">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className={`btn ${answerIndex === index  ? "h-16" : "h-10"} cursor-pointer`}
          src={starImage}
          alt={`star ${index + 1}`}
          onClick={() => {
            handleAnswerClick(index + 1, "⭐");
            setAnswerIndex(index);
          }}
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
            {/* Additional language options */}
            <Option value="de">German</Option>
            <Option value="en">English</Option>
          </Select>
        </div>

        {/* Display translated question */}
        <div>
          <p className="text-center mt-10 px-5">{translatedQuestion}</p>
        </div>

        {/* Render Stars or Emojis based on the emoji flag */}
        {emoji ? renderEmojis() : renderStars()}

        <div className="p-5 w-11/12 mx-auto">
          <p>Total Questions: {SVquestions.length} </p>
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
          {/* Conditionally render the textarea if comment === 1 */}
          {currentComment === 1 && (
            <div className="flex justify-center items-center">
              <img src={commentImg} alt="comment" className="h-8 -mr-8 z-10" />
              <TextArea
                rows={1}
                placeholder="Write your comment here"
                className="pl-14 text-start"
              />
            </div>
          )}
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
