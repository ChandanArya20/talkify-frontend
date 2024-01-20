import axios from "axios";
import { BASE_API_URL } from "./config/api";

export const register = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/user/register`,userData);
        const resData = response.data;
        console.log("User registered ", resData);
        dispatch({ type: "REGISTER", payload: resData });
    } catch (error) {
        console.log(error);
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/user/login`,userData,{ withCredentials: true });
        const resData = response.data;
        console.log("User loggedin ", resData);
        dispatch({ type: "LOGGIN", payload: resData });
    } catch (error) {
        console.log(error);
    }
};

export const currentUser = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/user/profile`, {withCredentials: true});
        const resData = response.data;
        console.log("User ", resData);
        dispatch({ type: "REQ_USER", payload: resData });
    } catch (error) {
        console.log(error);
    }
};

export const SearchUser = (query) => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/user/search-user?query=${query}`,
        { withCredentials: true });
        const resData = response.data;
        console.log("Users ", resData);
        dispatch({ type: "SEARCH_USER", payload: resData });
    } catch (error) {
        console.log(error);
    }
};
