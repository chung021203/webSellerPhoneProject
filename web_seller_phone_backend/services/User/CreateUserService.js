import User from '../../model/UserModel.js';
import bcrypt from 'bcryptjs';
const CreateUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const { username, email, password } = newUser
        try{
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null){
                resolve({
                    status: 'ERR',
                    message: 'The email is already'
                })
            }
            const hash = bcrypt.hashSync(password, 10);
            const createUser = await User.create({
                username, 
                email, 
                password: hash, 
            })
            if (createUser){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser
                })
            }
            
        }catch (e) {
            reject(e)
        }
    })
};
export { CreateUser };