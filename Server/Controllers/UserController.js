import User from "../Models/User.js";
import JWT from 'jsonwebtoken'
const secret = "abcdefc"



const handleLogin = async (req, res) => {
    const { email, password } = req.body
    const newUser = await User.findOne({ email: email })

    if (newUser) {
        try {
            const validatePassword = await newUser.isPasswordCorrect(password)
            if (validatePassword) {
                const token = JWT.sign({ id: newUser._id }, secret, { expiresIn: "2d" });
                res.cookie("JwtToken", token).status(200).json({ message: "Login Success" });
            }
            else {
                res.status(410).json({ message: "Invalid Password" })
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
    else {
        res.status(409).json({ message: "No Such User Found" })
    }
}
const handleLogOut = async (req, res) => {
    try {
        res.clearCookie("JwtToken").status(200).json({ message: "Login Success" });
    }
    catch (err) {
        
    }
}

const handleRegistation = async (req, res) => {
    const { fullName, email, password } = req.body
    const newUser = await User.findOne({ email: email })
    try {
        if (!newUser) {

            await User.create({
                fullName,
                email,
                password
            })
            res.status(200).json({ message: `Welcome ${fullName}` });

        }
        else {
            res.status(409).json({ message: "User already registered" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }

}
export { handleLogin, handleRegistation }