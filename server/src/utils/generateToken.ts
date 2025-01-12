import jwt from 'jsonwebtoken';

export const createToken = (payload: {userId: string}) => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "12341234"
    return jwt.sign(payload, JWT_SECRET_KEY)
}

