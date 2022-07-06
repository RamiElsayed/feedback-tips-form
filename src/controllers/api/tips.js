const path = require("path");

const { readFromFile, readAndAppend } = require('../helpers');
const { v4: uuidv4 } = require('uuid');

const TIPS_FILE_PATH = path.join(__dirname, "../../db/tips.json");

const getTips = (req, res) => {
  try {
    const tips = readFromFile(TIPS_FILE_PATH);

    return res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ succss: false, message: error.message });
  }
};
const createTip = (req, res) => {

  const { username, topic, tip } = req.body;

  if (username, topic, tip) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };

    readAndAppend(newTip, "./db/tips.json");
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error("Error in adding tip");
  }
};

module.exports = {
  getTips,
  createTip,
};
