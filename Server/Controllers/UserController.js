import User from "../Models/User.js";
import JWT from 'jsonwebtoken';

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
   
    try {
        const user = await User.findOne({ email: email });

        if (user) {
            const isPasswordValid = await user.isPasswordCorrect(password);

            if (isPasswordValid) {
                const token = JWT.sign({ id: user._id, fullName: user.fullName, email: user.email }, process.env.JWT_SECRET, { expiresIn: "2d" });
                res.cookie("JwtToken", token).status(200).json({ message: "Login Success" });
            } else {
                res.status(401).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const handleLogOut = (req, res) => {
    res.clearCookie("JwtToken").status(200).json({ message: 'Logout Success' });
};

const handleRegistration = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            await User.create({ fullName, email, password });
            res.status(201).json({ message: `Welcome ${fullName}` });
        } else {
            res.status(409).json({ message: "User already registered" });
        }
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
};

const refreshUser = (req, res) => {
    const token = req.cookies && req.cookies.JwtToken;

    if (!token) {
        return res.status(401).json({ error: "Token not found" });
    }

    const tokenSecret = process.env.JWT_SECRET;

    JWT.verify(token, tokenSecret, (err, verified) => {
        if (err) {
            console.error("Error verifying token:", err);
            return res.status(401).json({ error: "Invalid token" });
        } else {
            return res.status(200).json(verified);
        }
    });
};

export { handleLogin, handleRegistration, handleLogOut, refreshUser };
