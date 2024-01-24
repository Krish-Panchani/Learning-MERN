const User = require("../model/user-model");

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
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});

        if (userExist) {
            return res
                .status(409)
                .json({message: "User already exists"});
        }

        const usercreated = await User.create({username, email, phone, password});

        res
            .status(200)
            .json({msg: usercreated});


    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({message: error});
    }
}

module.exports = {home, reg};