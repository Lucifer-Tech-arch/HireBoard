import {StreamChat} from 'stream-chat'
import { ENV } from './env.js'

const apikey = ENV.STREAM_API_KEY
const apisecret = ENV.STREAM_API_SECRET

if(!apikey || !apisecret) {
    console.error("Stream API key or secret is missing!");
}

export const chatClient = StreamChat.getInstance(apikey, apisecret);

export const upsertStreamUser = async(userData) => {  //upsert means create or update data
    try {
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully",userData)
    } catch (error) {
        console.error("Error upserting Stream user: ",error);
    }
}

export const deleteStreamUser = async(userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("Stream user deleted successfully",userId);
    } catch (error) {
        console.error("Error while deleting stream user",error)
    }
}

//todo: add another method to add token