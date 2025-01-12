import express from 'express';
import { createSharableLink, shareLink } from '../controllers/linkController';
import { verifyUser } from '../middlewares/authMiddleware';
const linkRoutes = express.Router();
linkRoutes.post('/', verifyUser, createSharableLink)
linkRoutes.get('/:link', shareLink)
export default linkRoutes;