import { Button, Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import { pink, green } from "@mui/material/colors";
import check from "./check.png";
import cancel from "./cancel.png";

import { createTheme, ThemeProvider } from "@mui/material";

import "./Test.css";

const Test = ({ onClick, nQuestions, questionList, shuffleQuestions, state }) => {
  const [checked, setChecked] = useState([false]);
  const [question, setQuestion] = useState(
    questionList[Math.floor(Math.random() * questionList.length)]
  );
  const [questionAnswered, setQuestionAnswered] = useState(0);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [right, setRight] = useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: '"Nunito", sans-serif',
      fontSize: 14.5,
    },
  });

  const onCheckClicked = () => {
    setChecked(true);
    setFinalAnswers([...checkedOptions]);
    setCheckedOptions([...checkedOptions, ...question.answerId]);
  };

  useEffect(() => {
    const isRight =
      JSON.stringify(question.answerId) === JSON.stringify(finalAnswers);
    setRight(isRight);
    if (!isRight) {
      shuffleQuestions();
    }
    console.log("Right Update : " + isRight);
  }, [finalAnswers, questionList, questionAnswered]);

  const onNextClicked = () => {
    setChecked(false);
    setCheckedOptions([]);
    setFinalAnswers([]);
    setQuestionAnswered(
      questionAnswered + 1 === questionList.length ? 0 : questionAnswered + 1
    );
    if (right) {
      questionList.splice(questionList.indexOf(question), 1);
    }
    if (questionList.length === 0) {
      onClick();
    }
    setQuestion(questionList[Math.floor(Math.random() * questionList.length)]);
  };
  const handleCheck = (index) => {
    if (!checked) {
      setCheckedOptions((prev) => {
        if (prev.includes(index)) {
          return prev.filter((item) => item !== index);
        } else {
          return [...prev, index];
        }
      });
    }
  };
  useEffect(() => {
    setChecked(false);
    setQuestionAnswered(0);
    setCheckedOptions([]);
  }, [state]);
  const renderQuestionCard = (question) => {
    return (
      <div className="container">
        <Box
          sx={{
            width: "70%",
            margin: "0 auto",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            display: "block",
            top: 0,
          }}
        >
          <LinearProgressWithLabel
            value={((nQuestions - questionList.length) / nQuestions) * 100} sx = {{color:"white"}}
          />
        </Box>{" "}
        <div className="row justify-content-center">
          <motion.div
            className="card-test col-10 col-md-7"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              placeItems: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div>
              <div className="question">{question.text}</div>
              <div className="options">
                {question.options.map((option, index) => (
                  <div style={{ textAlign: "left" }}>
                    <ThemeProvider theme={theme}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkedOptions.includes(index)}
                            onChange={() => handleCheck(index)}
                            sx={{
                              color:
                                checked &&
                                finalAnswers.includes(index) &&
                                !question.answerId.includes(index)
                                  ? pink[800]
                                  : checked && question.answerId.includes(index)
                                  ? green[900]
                                  : "inherit", // default color when not checked or doesn't match the condition
                              "&.Mui-checked": {
                                color:
                                  checked &&
                                  finalAnswers.includes(index) &&
                                  !question.answerId.includes(index)
                                    ? pink[600]
                                    : checked &&
                                      question.answerId.includes(index)
                                    ? green[900]
                                    : "inherit", // checked color
                              },
                            }}
                          />
                        }
                        label={option}
                      />
                    </ThemeProvider>
                  </div>
                ))}
              </div>
              {checked && <Button onClick={onNextClicked}>Next</Button>}
              {!checked && <Button onClick={onCheckClicked}>Check</Button>}
            </div>
          </motion.div>
          {checked && (
            <>
              <div className="col-md-1"></div>
              <motion.div
                className="card-answer col-10 col-md-4 d-flex justify-content-center align-items-center"
                style={{
                  background: right
                    ? "rgba(4, 106, 26, 0.5)"
                    : "rgba(247, 50, 50, 0.5)",
                }}
                initial={{ opacity: 0, x: 50 }} // Initial state
                animate={{ opacity: 1, x: 0 }} // Animate to
                transition={{ duration: 0.5 }} // Duration of the animation
              >
                {question.explanation}
              </motion.div>
            </>
          )}
        </div>
        {checked && (
          <motion.div
            className="box"
            style={{
              backgroundImage: right ? `url(${check})` : `url(${cancel})`, 
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        )}
      </div>
    );
  };

  return <div className="Test">{renderQuestionCard(question)}</div>;
};

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default Test;
