import "./Prep.css";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";


const Prep = ({ onClick, setNQuestions, nQuestions}) => {
  const handleChange = (event) => {
    setNQuestions(event.target.value);
  };

  return (
    <div className="container">
      <motion.div className="card-main"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
        <div className="row">
          <div className="col-12 col-sm-6">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Number Of Questions
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nQuestions}
                label="Number Of Questions"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-sm-5">
            <Button
              disabled={nQuestions === 0}
              sx={{
                backgroundColor: "#333",
                width: "100%",
                height: "100%",
                margin: "5px 0px",
                opacity: "1",
                color: "#fff", // White text color
                "&:hover": {
                  backgroundColor: "#555", // Slightly lighter dark background on hover
                },
              }}
              variant="outlined"
              onClick={onClick}
            >
              Start The Test
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Prep;
