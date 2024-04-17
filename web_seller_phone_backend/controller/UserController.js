import { CreateUser } from '../services/User/CreateUserService.js';
import { LoginUser } from '../services/User/LoginService.js';
import { ListUsers } from '../services/User/ListUser.js';

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        if (!username || !email || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email',
            });
        }
        const response = await CreateUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        if (!email || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email',
            });
        }
        const response = await LoginUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const response = await ListUsers();
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'error',
            message: 'User not found',
        });
    }
};

export { createUser, loginUser, getAllUser };
