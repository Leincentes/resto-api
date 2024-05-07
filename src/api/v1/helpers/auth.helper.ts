
import User from "../models/user.model"
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const findUserByEmail = async (email: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

export const validateUserInput = (email: string, password: string) => {
    if (!email || !password) {
        throw new Error('Please provide email and password.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error('Please provide valid email address.');
    }
}

export const comparePasswords = async (password: string, hashedPass: string) => {
    const isMatch = await bcrypt.compare(password, hashedPass);
    if (!isMatch) {
      throw new Error('Invalid credentials.');
        // return true;
    }
    return true;
}

export const generateAuthToken = (userId: string) => {
    return JWT.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
}
