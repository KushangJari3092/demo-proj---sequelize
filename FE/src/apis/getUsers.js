import { getRequest } from '.';
import { GET_USERS } from '../constants/apiConst';

export const getUsers = async (payload) => {
    console.log('payload :>> ', payload);
    const res = await getRequest(GET_USERS, payload)
    return res;

}