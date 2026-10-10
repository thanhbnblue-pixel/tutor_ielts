'use client';

import React, { useState, useEffect, useRef } from 'react';
import questionBank from '@/data/question_bank.json';
import { useDailyQuests } from '@/hooks/useDailyQuests';

interface QuizInterfaceProps {
  onComplete: () => void;
}

export default function QuizInterface({ onComplete }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const answersRef = useRef(answers);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);
  const { updateLevel, currentMonth } = useDailyQuests();

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]); // Note: having timeLeft in dep array causes timer to reset every second, acting like setTimeout. It works but can be optimized.

  const handleSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: optionIndex });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionBank.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questionBank.forEach((q, index) => {
      if (answersRef.current[index] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / questionBank.length) * 100);
    setScorePercentage(percentage);
    updateLevel(percentage);
    setIsSubmitted(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (isSubmitted) {
    return (
      <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center mt-10">
        <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Quiz Completed!</h2>
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Your Score: {scorePercentage}%</p>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Based on your performance, your new learning path is set to: <strong className="text-blue-500">Month {currentMonth}</strong>
        </p>
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const currentQuestion = questionBank[currentQuestionIndex];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Adaptive Testing</h2>
        <div className="text-xl font-mono bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded text-red-500 dark:text-red-400">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="mb-8">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Question {currentQuestionIndex + 1} of {questionBank.length}
        </div>
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
          {currentQuestion.text}
        </h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left px-4 py-3 rounded border transition ${
                answers[currentQuestionIndex] === idx
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>

        {currentQuestionIndex === questionBank.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
