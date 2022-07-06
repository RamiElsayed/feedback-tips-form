const path = require('path');

const renderFeedback = (req, res) => {

    res.sendFile(path.join(__dirname, '../../../public/pages/feedback.html'))
};
const renderHome = (req, res) => {
    
    res.sendFile(path.join(__dirname, '../../../public/index.html'))
};

module.exports = {
  renderFeedback,
  renderHome,
};
