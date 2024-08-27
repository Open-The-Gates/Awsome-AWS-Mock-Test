import { Button } from "@mui/material";
import "./End.css";


const End = ({ onClick }) => {
  return (
    <div>
      <div className="astronaut">
        <img
          src="/astronaut.png"
          style={{ height: "50vh" }}
          alt="Developer Advancing AWS"
        />
      </div>
      <div className="text-end">
        Great job! Keep up the momentum and ace the real test!
      </div>
      <Button
        sx={{
          backgroundColor: "#333",
          width: "300px",
          padding: "10px 20px",
          opacity : "0.7",
          marginTop: "20px", // Dark background color
          color: "#fff", // White text color
          "&:hover": {
            backgroundColor: "#555", // Slightly lighter dark background on hover
          },
        }}
        variant="outlined"
        onClick={onClick}
      >
        Continue Learning !
      </Button>
    </div>
  );
};

export default End;
