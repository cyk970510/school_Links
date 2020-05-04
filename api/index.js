import request from '../utils/request';

export const getDetail = () => {
    return request.post('/home/details');
}
