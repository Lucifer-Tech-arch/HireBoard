import { chatClient } from "../lib/stream";


export async function getStreamToken(req,res) {
    try {
        const token = await chatClient.createToken(req.user.clerkId); //use clerkid for stream not mongodb id -> it should match the id we have in the stream dashboard
        res.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}