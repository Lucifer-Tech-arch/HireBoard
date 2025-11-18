import {Inngest} from 'inngest';
import { connectDB } from './db';
import User from '../models/Usermodel.js'

//create a client to send and recieve events
export const inngest = new Inngest({id: 'hireboard'});

const syncUser= inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        const {id, email_address, first_name, last_name, image_url} = event.data

        const newUser = {
            clerkId: id,
            email: email_address[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            profileAvtar: image_url 
        }

        await User.create(newUser);

        //do something else
    }
)

const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user-from-db"},
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        const {id} = event.data
        await User.deleteOne({clerkId: id});

        //do something else
    }
)

export const functions = [syncUser, deleteUserFromDB]