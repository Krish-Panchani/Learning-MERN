const User = require("../model/user-model");
const bcrypt = require("bcryptjs");

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

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        

        const usercreated = await User.create({username, email, phone, password: hashedPassword});

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