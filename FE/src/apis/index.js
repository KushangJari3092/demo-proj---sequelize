import { API } from "../constants/apiConst"
import axios from 'axios';


export const getRequest = async (route, payload) => {
    const url = API + route
    try {
        const res = await axios.get(url, payload);
        return { success: res }
    } catch (error) {
        console.error('Error in getRequest:', error.response.data.error);
        return { err: error.response.data.error };
    }
}
export const postRequest = async (route, payload) => {
    const url = API + route
    try {
        const res = await axios.post(url, payload);
        return { success: res?.data?.success }
    } catch (error) {
        return { err: error.response.data.error };
    }
}