import express from 'express'
import { protectRoute } from '../middlewares/protectroute';

const chatRoutes = express.Router();

chatRoutes.get('/token',protectRoute,getstramtoken);

export default chatRoutes