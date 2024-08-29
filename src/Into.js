import "./Intro.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import logo from './Webinar-bro.svg'; // Tell webpack this JS file uses this image


const Intro = ({ onClick }) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-1 col-md-0"></div>
        <motion.div
          class="col-10 col-md-5"
          style={{ display: "table-cell" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="App-content">
            <div className="App-title">
            Launch to Success: AWS SAA-C03 Rocket Training Mock Test
            </div>
            <div className="App-description">
            Gear up for your interstellar AWS journey with our AWS SAA-C03 mock test. Navigate through a galaxy of realistic questions and receive instant feedback to fine-tune your skills and ensure you're mission-ready.
            </div>
            <Button
              sx={{
                backgroundColor: "#333",
                width: "100%",
                padding: "10px 20px",
                marginTop: "20px", // Dark background color
                color: "#fff", // White text color
                "&:hover": {
                  backgroundColor: "#555", // Slightly lighter dark background on hover
                },
              }}
              variant="outlined"
              onClick={onClick}
            >
              Start Learning, It's Free !
            </Button>
          </div>
        </motion.div>
        <motion.div
          class="col-12 col-md-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ display:"flex",
            alignItems: "center",
                     }}
          transition={{
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          {" "}
          <img src={logo} style={{ height: "auto" , width: "100%" }} alt="Developer Learning AWS" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
