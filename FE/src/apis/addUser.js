import { postRequest } from '.';
import { ADD_USER } from '../constants/apiConst';

export const addUser = async (payload) => {
    console.log('payload :>> ', payload);
    const res = await postRequest(ADD_USER, payload)
    return res;

}