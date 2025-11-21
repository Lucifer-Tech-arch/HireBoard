import { requireAuth } from "@clerk/express";
import User from '../models/Usermodel.js'

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId;
            if(!clerkId) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            const user = await User.findOne({ clerkId });
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = user;
            next();
        } catch (error) {
            
        }
    }

]