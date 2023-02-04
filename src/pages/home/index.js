import React, { useState, } from 'react';
import Image from '../../images/quiz.svg';
import Categories from '../../Data';
import { useHistory  } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import ErrorMessage from '../../components/ErrorMessage';
import './styles.css';

const Index = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();

    const clickHandler = () =>{
        if(!name || !category || !difficulty){
            setError(true);
            return;
        }
        else{
            setError(false);
            fetchQuestions(category, difficulty);
            history.push('/quiz');
        }
    }
    return (
        <div className="home">
            <div className="home__body">
                <div className="home__bodyRight">
                    <h1 className="home__bodyText">Quiz Setting</h1>
                    <div className="home__bodyInputCon">
                        {error && <ErrorMessage>please fill all empty fields.</ErrorMessage>}
                        <TextField
                            label="Enter Your Name"
                            variant="outlined"
                            style={{ marginBottom: 20 }}
                            onChange = {(e) => setName(e.target.value)}
                            value = {name}
                        />
                        <TextField
                            select
                            label="Select Quiz Category"
                            variant="outlined"
                            style={{ marginBottom: 20 }}
                            onChange = {(e) => setCategory(e.target.value)}
                            value = {category}
                        >
                            {Categories.map(category => (
                                <MenuItem key={category.category} value={category.value}>
                                    {category.category}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            label="Select Difficulty Level"
                            variant="outlined"
                            style={{ marginBottom: 20 }}
                            onChange = {(e)=> setDifficulty(e.target.value)}
                            value = {difficulty}
                        >
                            <MenuItem key="Easy" value="easy"> Easy </MenuItem>
                            <MenuItem key="Medium" value="medium"> Medium</MenuItem>
                            <MenuItem key="Difficult" value="Difficult"> Difficult </MenuItem>
                        </TextField>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            onClick = {clickHandler}
                        >
                            quiz start
                        </Button>
                    </div>
                </div>
                <div className="home__bodyLeft">
                    <img src={Image} alt="Eror" />
                </div>
            </div>

        </div>
    )
}

export default Index;
