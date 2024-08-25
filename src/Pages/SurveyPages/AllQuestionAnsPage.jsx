import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import smile from "../../assets/images/smile.png";
import angry from "../../assets/images/angry.png";
import silent from "../../assets/images/silent.png";
import sad from "../../assets/images/sad.png";
import blushing from "../../assets/images/blushing.png";
import starImage from "../../assets/images/star.png";
import translateText from "../../translateText";
import {
  useGetAllQnAnsQuery,
} from "../../redux/api/baseapi";

export default function AllQuestionAnsPage() {
  const selectedlanguage = localStorage.getItem("language") || "de";
  const [translatedQuestions, setTranslatedQuestions] = useState({});
  const { data: allQn } = useGetAllQnAnsQuery();
  // console.log(allQn);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    SVquestions = [],
    updatedAnswers = {},
    language = selectedlanguage,
    emoji = true,
  } = location.state || {};



  useEffect(() => {
    const translateAllQuestions = async () => {
      const translations = await Promise.all(
        SVquestions.map(async (question) => {
          const translated = await translateText(
            question.question_en || "",
            language,
            import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY
          );
          return { id: question.id, text: translated || question.question_en };
        })
      );
      const translationsObj = translations.reduce((acc, { id, text }) => {
        acc[id] = text;
        return acc;
      }, {});
      setTranslatedQuestions(translationsObj);
    };

    if (SVquestions.length > 0) {
      translateAllQuestions();
    }
  }, [SVquestions, language]);

  const handleDoneButton = () => {
    navigate("/thankYouPage");
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="flex items-center">
        <FaArrowLeft
          className="mt-10 mb-5 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-3xl flex items-end justify-center w-full mt-10 mb-5">
          All Results
        </h1>
      </div>
      <div className="space-y-2">
        <p>
          Company Name:{" "}
          <span className="text-[#ecb206] pl-2">Creative IT Institute</span>{" "}
        </p>
        <p>
          Project Name:
          <span className="text-[#ecb206] pl-2">Employee Feedback</span>{" "}
        </p>
        <p>
          Survey Name:
          <span className="text-[#ecb206] pl-2"> Survey No 01</span>
        </p>
        <p>
          Total Questions:
          <span className="text-[#ecb206] pl-2">{SVquestions.length}</span>
        </p>
      </div>
      <div>
        {SVquestions.length === 0 ? (
          <p>No questions available.</p>
        ) : (
          SVquestions.map(({ id, question_en }) => (
            <div key={id} className="my-5 p-2">
              <h2 className="py-3 text-[#4B4C53]">
                Question ID {id}:{" "}
                <span className="pl-2">
                  {translatedQuestions[id] || question_en}
                </span>
              </h2>

              <p className="mb-2">
                <span className="pr-2">Ans:</span>{" "}
                {updatedAnswers[id] ? (
                  emoji ? (
                    <>
                      {updatedAnswers[id] === "😠" && (
                        <img
                          src={angry}
                          alt="angry emoji"
                          className="inline-block h-6"
                        />
                      )}
                      {updatedAnswers[id] === "🤐" && (
                        <img
                          src={silent}
                          alt="silent emoji"
                          className="inline-block h-6"
                        />
                      )}
                      {updatedAnswers[id] === "😢" && (
                        <img
                          src={sad}
                          alt="sad emoji"
                          className="inline-block h-6"
                        />
                      )}
                      {updatedAnswers[id] === "😊" && (
                        <img
                          src={smile}
                          alt="smile emoji"
                          className="inline-block h-6"
                        />
                      )}
                      {updatedAnswers[id] === "🥰" && (
                        <img
                          src={blushing}
                          alt="blushing emoji"
                          className="inline-block h-6"
                        />
                      )}
                    </>
                  ) : (
                    [...Array(5)].map(
                      (_, i) =>
                        i < updatedAnswers[id] && (
                          <img
                            key={i}
                            src={starImage}
                            alt="star"
                            className="inline-block h-6"
                          />
                        )
                    )
                  )
                ) : (
                  "No answer provided"
                )}
              </p>
              <hr className="border-t border-gray-300" />
            </div>
          ))
        )}
      </div>
      <button
        className="py-2 w-full md:w-44 bg-[#ecb206] text-white rounded-md mt-12 mb-10"
        onClick={handleDoneButton}
      >
        Done
      </button>
    </div>
  );
}
