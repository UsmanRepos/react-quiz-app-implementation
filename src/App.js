import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Header from './components/header';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = (category = "", difficulty = "") => {
    const api = `https://opentdb.com/api.php?amount=10${category&&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    fetch(api)
      .then(response => response.json())
      .then(data => setQuestions(data.results));
  };
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
        </Route>
        <Route path='/quiz'>
          <Quiz name={name} questions={questions} score={score} setName={setName} setQuestions={setQuestions} setScore={setScore}/>
        </Route>
        <Route path='/result'>
          <Result name={name} score={score}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
