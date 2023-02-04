import React, { useEffect, useState } from 'react';
import Question from '../../components/question';
import './styles.css';

const Index = ({ name, questions, score, setQuestions, setScore }) => {
    const [options, setOptions] = useState();
    const [curQuestion, setCurQuestion] = useState(0);
    useEffect(() => {
        setOptions(
            questions && handleShuffle([
                questions[curQuestion].correct_answer,
                ...questions[curQuestion].incorrect_answers
            ])
        );

    }, [questions, curQuestion])
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    }
    return (
        <div className="quiz">
            <div className="quiz__header">
                <span className="subtitle">Welcome {name} </span>
            </div>
            {questions ? (
                <div className="quiz__body">
                    <div className="quiz__info">
                        <span>{questions[curQuestion].category}</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question 
                        curQuestion={curQuestion}
                        questions={questions}
                        options={options}
                        correct_answer={questions[curQuestion]?.correct_answer}
                        score={score}
                        setCurQuestion={setCurQuestion}
                        setScore={setScore}
                    />
                </div>
            ) : (
                <div className="loader">
                    <span className="loader__text">loading ...</span>
                </div>
            )}
        </div>
    )
}

export default Index;