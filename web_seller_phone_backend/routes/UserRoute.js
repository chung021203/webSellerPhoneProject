import express from 'express';
import {
    createUser,loginUser
} from '../controller/UserController.js';

const router = express.Router();
router.post('/post/user', (req, res) => createUser(req, res));
router.post('/post/login', (req, res) => loginUser(req, res));
export default router;
