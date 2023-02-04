import { Button, requirePropFactory } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import image from '../../images/result.svg';
import './styles.css';

const Index = ({ name, score }) => {
    const [promts, setPromts] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (name) {
            history.push('/');
        }
        if (score > 8){
            setPromts("Great, Excellent Bro, You Are Future Scientist...");
        }
        if(score > 5){
            setPromts("Ooh Nice Bro, You Are Intelligent ...");
        }
        else{
            setPromts("Not Bad Bro, Better Luck Next Time ...");
        }

        
    }, [])
    return (
        // <div className="result">
        //     <div className="image__con">
        //         <img src={image} alt="Error" className="image"/>
        //     </div>
        //     <div className="result__info">
        //         <span className="score__text">Final Score: {score}</span>
        //         <Button
        //             variant="contained"
        //             color="secondary"
        //             size="large"
        //             href="/"
        //             style={{alignSelf:"center",marginTop:20}}
        //         >
        //             Go To Home
        //         </Button>
        //     </div>
        // </div>
        <div className="result">
            <div className="result__info">
                <span className="score__text">{score}</span>
            </div>
            <div className="promts">
                <span style={{color:"darkblue", fontSize:"larger", fontWeight:"600"}}>{promts}</span>
            </div>
            <div className="control__button">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="/"
                    style={{ width: "100%"}}
                >
                    Go To Home
                </Button>
            </div>
        </div>
    )
}

export default Index;