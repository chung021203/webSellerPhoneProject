import request from '../utils/request';
export const getAllProductRequest = async () => {
    try {
        const res = await request.get('/api/get/product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
