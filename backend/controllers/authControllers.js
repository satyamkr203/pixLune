
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });

        const savedUser = await user.save();
        res.status(201).json({ userId: savedUser._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ message: 'Email not found' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword){
            return res.status(400).json({ message: 'Wrong credentials' });
            console.log('wrong credentials');
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password"); // don't return password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user); // send user info
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
