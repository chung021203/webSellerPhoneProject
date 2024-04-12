import User from '../../model/UserModel.js';
import bcrypt from 'bcryptjs';
import { genneralAccessToken, genneralRefreshToken } from "../JwtService.js";
import { CLIENT_RENEG_LIMIT } from 'tls';

const LoginUser = (userLogin) => {
    return new Promise(async(resolve, reject) => {
        const { username, email, password } = userLogin
        try{
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null){
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            if(!comparePassword){
                relosve ({
                    status:'ERR',
                    message:'the password or user is incorrect ',
                })
            }
            const access_token = await genneralAccessToken({
                id_user:checkUser.id_user,
                isAdmin: checkUser.isAdmin
            })
            const refresh_token = await genneralAccessToken({
                id_user:checkUser.id_user,
                isAdmin: checkUser.isAdmin
            })
            resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    access_token,
                    refresh_token
                })
            
            
        }catch (e) {
            reject(e)
        }
    })}

export { LoginUser };