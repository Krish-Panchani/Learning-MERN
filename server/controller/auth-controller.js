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

// Register 
const reg = async (req, res) => {
    try {
        console.log(req.body);
        const {
            username, 
            email, 
            phone, 
            password
        } = req.body;

        //Check if user exists
        const userExist = await User.findOne({email});

        if (userExist) {
            return res
                .status(409)
                .json({message: "User already exists"});
        }

        //Hash Password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password
        });

        res
            .status(200)
            .json({
                msg: userCreated || "User Created Successfully",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });


    } catch (error) {
        // console.log(error);
        // res
        //     .status(500)
        //     .json({message: error});
        next(error);
    }
}


// Login
const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        //Check if user exists
        console.log(userExist);
        
        if (!userExist) {
            return res
                .status(400)
                .json({message: "Email does not exist"});
        }
        
        // const isMatch = await bcrypt.compare(password, userExist.password);
        const isMatch = await userExist.comparePassword(password);

        //Check if password is correct
        console.log(isMatch);
        if(isMatch){
            res
                .status(200)
                .json({
                    msg: "Login Successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });
        }
        else{
            res
                .status(401)
                .json({message: "Invalid Email or Password"});
        }

    } catch (error) {
        res
            .status(500)
            .json({message: error});
    }
}
module.exports = {home, reg, login};