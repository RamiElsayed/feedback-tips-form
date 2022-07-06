const path = require('path')
const { readFromFile } = require("../../helpers");

const   TIPS_FILE_PATH = path.join(__dirname, '../../db/tips.json' )

const getTips = (req, res) => {
   
    try {
        const tips = readFromFile(TIPS_FILE_PATH);
    
        return res.json(JSON.parse(data));

    } catch (error) {
        res.status(500).json({succss: false, message: error.message});
    }
}
const createTip = (req, res) => {

}

module.exports = {
    getTips,
    createTip
}