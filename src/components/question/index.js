import React, { useState } from 'react';
import { Button, } from '@material-ui/core';
import { useHistory  } from 'react-router-dom';
import './styles.css';
import ErrorMessage from '../ErrorMessage';

function Index({curQuestion, questions, options, correct_answer, score, setCurQuestion, setScore}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSelect = (op) => {
        if(selected === op && op === correct_answer){
            return "right";
        }
        else if(selected === op && op !== correct_answer){
            return "wrong";
        }
        else if(op === correct_answer){
            return "right";
        }
    }
    const clickHandler = (op) =>{
        setSelected(op);
        setError(false);
        if(op === correct_answer){
            setScore( score+1);
        }
    }
    const handleNext = () => {
        if(curQuestion > 8){
            history.push('/result');
        }
        else if(selected){
            setCurQuestion(curQuestion + 1);
            setSelected();
        }
        else {
            setError("please select an option first");
        }
    }
    return (
        <div className="question">
            <h1 className="title"> Question {curQuestion + 1}</h1>
            <div className="box">
                <h2 className="question__text">{questions[curQuestion].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{ error }</ErrorMessage>}
                    {options && 
                        options.map((option, index) => (
                            <button
                                onClick={()=> clickHandler(option)}
                                className={`single__option ${selected && handleSelect(option)}`}
                                disabled={selected}
                            >{option}</button>
                        ))
                    }
                </div>
                <div className="control__buttons">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{width:130}}
                        href='/'
                    >
                        quit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{width:130}}
                        onClick={handleNext}
                    >
                        next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Index;
