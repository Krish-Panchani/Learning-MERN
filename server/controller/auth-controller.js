const home = async (req, res) => {
    try {
        res
            .status(200)
            .send('Router is Here');
    } catch (error) {
        console.log(error);
    }
}

const reg = async (req, res) => {
    try {
        console.log(req.body);
        res
            .status(200)
            .json({message: req.body});
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({message: error});
    }
}

module.exports = {home, reg};