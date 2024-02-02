import bcrypt from "bcryptjs";
import User from "../models/user.model.js"

export const signup = async (req, res) => {

    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match!"})
        }

        const user = await User.findOne({userName});

        if (user) {
            return res.status(400).json({error:"User already exists!"})
        }

        // password hashing

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

    
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    
        const newUser = new User ({
            fullName,
            userName,
            password : hashedPassword,
            gender,
            profilePicture : gender === "male" ? boyProfilePic : girlProfilePic,
        })

        await newUser.save();

        res.status(201).json({
            id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePicture: newUser.profilePicture,
        })


    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal Server Error!"})
    }


}


export const login = (req, res) => {
    res.send("Login Page")
    console.log("Login")
}
export const logout = (req, res) => {
    res.send("Logout Page")
    console.log("Logout")
}