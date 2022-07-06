const path = require("path");

const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../../helpers");

const FEEDBACK_FILE_PATH = path.join(__dirname, "../../db/feedback.json");

const getFeedbacks = (req, res) => {
  try {
    const feedbacks = readFromFile(FEEDBACK_FILE_PATH);

    return res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ succss: false, message: error.message });
  }
};

const createFeedback = (req, res) => {
  const { email, feedbackType, feedback } = req.body;

  if (email && feedbackType && feedback) {

    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuidv4(),
    };

    readAndAppend(newFeedback, "./db/feedback.json");

    const response = {
      status: "success",
      body: newFeedback,
    };

    return res.json({ succes: true, message: "Feedback posted successfully 🚀" });
  } else {
   return  res.status(500).json({ succes: false, message: "Error in posting feedback" });
  }
};

module.exports = {
  getFeedbacks,
  createFeedback,
};
