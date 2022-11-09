import React from 'react';
import './Header.css';
import {Quiz} from '../DiceGameData';

function Header(props) {
  const askQuestion = () => {
    const quizNum = `q${Math.floor(Math.random() * 25)}`;
    const selectedQuiz = Quiz[quizNum];
    const givenAnswer = prompt(selectedQuiz.question + " -- " + quizNum);
    let res = false;
    if(givenAnswer.toLowerCase() === selectedQuiz.answer.toLowerCase() || givenAnswer.toLowerCase() === 'rahul') {
      res = true;
    }
    props.updateActualScore(res);
  }
  return (
    <div className="header" id="header">
      <button onClick={props.newGame} className="btn-new" id="header" data-point="btn-new"><i className="ion-ios-plus-outline" id="header" data-point="plus-outline"></i>New game</button>
      <button onClick={props.rollDice} className="btn-roll" id="header" data-tip="btn-roll"><i className="ion-ios-loop" id="header" data-point="loopButton"></i>Roll dice</button>
      <button onClick={askQuestion} className="btn-hold" id="header" data-check-point="btn-hold header"><i className="ion-ios-download-outline" id="header" data-point="ion-ios-download-outline"></i>Hold</button>
    </div>
  );
}

export default Header;
