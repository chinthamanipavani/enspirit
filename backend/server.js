const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.post("/api/review", (req, res) => {
  const { resume } = req.body;

  console.log("Resume received:");
  console.log(resume);

  res.status(200).json({
    success: true,
    message: "Resume received successfully",
    data: {
      length: resume.length,
    },
  });
});


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
