import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import smile from "../../assets/images/smile.png";
import angry from "../../assets/images/angry.png";
import silent from "../../assets/images/silent.png";
import sad from "../../assets/images/sad.png";
import blushing from "../../assets/images/blushing.png";
import starImage from "../../assets/images/star.png";
import commentImg from "../../assets/images/comment.png";
import { Progress } from "antd";
import { ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function SurveyQuestions() {
  const starOption = false; 
  // const starOption = true; 

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

  const handleAnswerClick = (answer, displayValue) => {
    setSelectedAnswer(displayValue);
    console.log(`Selected: ${displayValue}`);
  };
  

  const handleNextClick = () => {
    if (selectedAnswer) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestion].id]: selectedAnswer, // Store the character
      }));
      const newProgress = ((currentQuestion + 1) / questions.length) * 100;
      setProgress(newProgress);
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        console.log("Survey completed!", answers);
        navigate("/allQuestionAnsPage", { state: { questions, answers } });
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
        <div>
          <p className="text-center mt-10 px-5">
            {questions[currentQuestion].question}
          </p>
        </div>
        {starOption ? renderStars() : renderEmojis()}
        <div className="p-5  w-11/12 mx-auto">
          <p>Total Questions: {questions.length} </p>
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
}
