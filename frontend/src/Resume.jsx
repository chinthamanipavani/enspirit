import React, { useState } from "react";
import axios from "axios";

const Resume = () => {
  const [resumeText, setResumeText] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/review", {
        resume: resumeText,
      });

      setResponse(res.data);
    } catch (error) {
      console.error("Error submitting resume", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div>
        <center>
          <h2 style={{ color: "orange" }}>AI Resume Review</h2>

          <form onSubmit={handleSubmit}>
            <textarea
              rows="10"
              placeholder="Paste your resume here"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
              required
            />
            <button type="submit">Submit Resume</button>
          </form>
        </center>
      </div>
      <br />

      {response && (
        <div
          style={{
            marginTop: "20px",
            border: "2px solid orange",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <h3>Backend Response:</h3>
          <p>
            <b>Resume Text:</b> {response.postedResume}
          </p>
          <p>
            <b>Message:</b> {response.message}
          </p>
          <p>
            <b>Length:</b> {response.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Resume;
