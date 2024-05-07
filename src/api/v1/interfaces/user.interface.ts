import { Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    address?: string[];
    phone: string;
    usertype: 'client' | 'admin' | 'vendor' | 'driver';
    profile?: string;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IUser;