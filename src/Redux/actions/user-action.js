import axios from "axios";
import { BASE_API_URL } from "../../config/api";

export const register = (userData) => async (dispatch) => {
   
    const response = await axios.post(`${BASE_API_URL}/user/register`,userData,{ withCredentials: true });
    
    const resData = response.data;
    localStorage.setItem("user", JSON.stringify(resData));
    localStorage.setItem("isLoggedin", JSON.stringify(true));
    console.log("User registered ", resData);
    dispatch({ type: "REGISTER", payload: resData });
};

export const login = (userData) => async(dispatch) => {
    
    const response = await axios.post(`${BASE_API_URL}/user/login`,userData,{ withCredentials: true });
    
    const resData = response.data;
    localStorage.setItem("user", JSON.stringify(resData));
    localStorage.setItem("isLoggedin", JSON.stringify(true));
    console.log("User logged in ", resData);
    dispatch({ type: "LOGIN", payload: resData });
};

export const logout = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${BASE_API_URL}/user/logout`,{ withCredentials: true }
        );
        const resData = response.data;
        console.log("User logged out : ", resData);
    
    } catch (error) {
        console.log(error);
    } finally{
        localStorage.removeItem("user");
        localStorage.setItem("isLoggedin",JSON.stringify(false));
        dispatch({ type: "LOGOUT", payload: null });
    }
};

export const currentUser = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/user/profile`, {
            withCredentials: true,
        });
        const resData = response.data;
        console.log("User ", resData);
        dispatch({ type: "REQ_USER", payload: resData });
    } catch (error) {
        console.log(error);
    }
};

export const SearchUser = (query) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${BASE_API_URL}/user/search-user?query=${query}`,
            { withCredentials: true }
        );
        const resData = response.data;
        console.log("Users ", resData);
        dispatch({ type: "SEARCH_USER", payload: resData });
    } catch (error) {
        console.log(error);
    }
};
