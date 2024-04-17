import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN,{ expiresIn:'30m'})
    return access_token
}
const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        payload
    },  process.env.REFRESH_TOKEN,{ expiresIn:'365d'})
    return refresh_token
}

export {  genneralAccessToken,
    genneralRefreshToken,
};
