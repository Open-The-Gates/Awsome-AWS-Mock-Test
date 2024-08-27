import React, { useReducer, useState, useEffect } from "react";
import { reducer, initialState, actionTypes } from "./TestReducer";

import "./App.css";

import Intro from "./Into";
import Prep from "./Prep";
import Test from "./Test";
import End from "./End";

function App() {
  const [nQuestions, setNQuestions] = useState(0);
  const [totalQuestionList, setTotalQuestionList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("/aws.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTotalQuestionList(data.questions);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(questionList);
      }
    };

    fetchData();
  }, []);

  const shuffleAndSlice = (totalQuestionList) => {
    if (totalQuestionList.length > 0) {
      setQuestionList(shuffle(totalQuestionList).slice(0, nQuestions));
    }
  };

  // Function to handle starting the test
  const chooseTest = () => {
    dispatch({ type: actionTypes.CHOOSE_TEST });
  };

  const startTest = () => {
    shuffleAndSlice(totalQuestionList);
    dispatch({ type: actionTypes.START_TEST });
  };

  // Function to handle ending the test
  const endTest = () => {
    dispatch({ type: actionTypes.END_TEST });
  };

  // Function to go back to the homepage
  const goToHomepage = () => {
    dispatch({ type: actionTypes.GO_TO_HOMEPAGE });
  };

  // Conditional rendering based on the current page
  const renderPage = () => {
    switch (state.page) {
      case "HOMEPAGE":
        return <Intro onClick={chooseTest} />;
      case "CHOOSE_TEST":
        return (
          <Prep
            onClick={startTest}
            nQuestions={nQuestions}
            setNQuestions={setNQuestions}
          />
        );
      case "START_TEST":
        return (
          <Test
            onClick={endTest}
            nQuestions={nQuestions}
            questionList={questionList}
            state={state}
          />
        );
      case "END_TEST":
        return <End onClick={chooseTest} />;
      default:
        return <Intro onClick={chooseTest} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">{renderPage()}</header>
      <div className="App-footer">Made By Ayman O.</div>
    </div>
  );
}
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default App;
