import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import langimg1 from "../../assets/images/langFlag1.png";
import langimg2 from "../../assets/images/langFlag2.png";
import smile from "../../assets/images/smile.png";
import angry from "../../assets/images/angry.png";
import silent from "../../assets/images/silent.png";
import sad from "../../assets/images/sad.png";
import blushing from "../../assets/images/blushing.png";
import comment from "../../assets/images/comment.png";
import { Progress } from "antd";
import { Button, ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function SurveyQuestions() {
  const questions = [
    {
      id: 1,
      question: "How satisfied are you with your current work environment?",
    },
    {
      id: 2,
      question: "How would you rate the support you receive from your team?",
    },
    {
      id: 3,
      question: "How do you feel about the work-life balance in your company?",
    },
    {
      id: 4,
      question: "How do you feel about your workload?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); 

  const handleEmojiClick = (emoji) => {
    setSelectedAnswer(emoji);
  };

  const handleNextClick = () => {
    if (selectedAnswer) {
      // Store answer
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestion].id]: selectedAnswer,
      }));
      // Update progress
      const newProgress = ((currentQuestion + 1) / questions.length) * 100;
      setProgress(newProgress);

      // Go to next question or finish
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        console.log("Survey completed!", answers);
        navigate("/allQuestionAnsPage", { state: { questions, answers } });
      }
    } else {
      alert("Please select an emoji before proceeding.");
    }
  };

  const handleQuitClick = () => {
    navigate("/thankYouPage"); // Navigate to Thank You page on quit
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        {/* Translator div start */}
        <div className="flex justify-end px-14 items-center">
          <div className="flex gap-5 justify-center items-center border-2 rounded-3xl py-2 px-3 border-[#ecb206]">
            <button>
              <p className="text-[#ECB206]">DE</p>
            </button>
            <button>
              <p>Eng</p>
            </button>
          </div>
        </div>
        {/* Translator div end */}
        <div>
          <p className="text-center mt-10 px-5">
            {questions[currentQuestion].question}
          </p>
        </div>
        {/* emojies */}
        <div className="flex gap-5 justify-center items-center my-12">
          <img
            className={`btn ${selectedAnswer === "angry" ? "h-16 " : ""}`}
            src={angry}
            alt="angry emoji"
            onClick={() => handleEmojiClick("angry")}
          />
          <img
            className={`btn ${selectedAnswer === "silent" ? "h-16" : ""}`}
            src={silent}
            alt="silent emoji"
            onClick={() => handleEmojiClick("silent")}
          />
          <img
            className={`btn ${selectedAnswer === "sad" ? "h-16" : ""}`}
            src={sad}
            alt="sad emoji"
            onClick={() => handleEmojiClick("sad")}
          />
          <img
            className={`btn ${selectedAnswer === "blushing" ? "h-16" : ""}`}
            src={blushing}
            alt="blushing emoji"
            onClick={() => handleEmojiClick("blushing")}
          />
          <img
            className={`btn ${selectedAnswer === "smile" ? "h-16" : ""}`}
            src={smile}
            alt="smile emoji"
            onClick={() => handleEmojiClick("smile")}
          />
        </div>
        {/* emoji end */}
        <div className="p-5  w-11/12 mx-auto">
          <p>Total Questions: {questions.length} </p>
          <Progress  percent={progress} status="active" />
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex justify-center items-center">
            <img src={comment} alt="comment" className="h-8 -mr-8 z-10" />
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
}
