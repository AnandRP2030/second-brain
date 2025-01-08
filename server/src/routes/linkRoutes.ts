import express from 'express';
import { createOrDeleteLink, shareLink } from '../controllers/linkController';
import { verifyUser } from '../middlewares/authMiddleware';
const linkRoutes = express.Router();
linkRoutes.post('/', verifyUser, createOrDeleteLink)
linkRoutes.get('/:link', shareLink)
export default linkRoutes;