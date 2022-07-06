const getFeedbacks = (req, res) => {
    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
}
const createFeedback = (req, res) => {

}

module.exports = {
    getFeedbacks,
    createFeedback
}