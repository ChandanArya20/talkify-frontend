import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import { LOGIN, LOGOUT, REGISTER, REQ_USER, SEARCH_USER } from "./action-type";

export const register = (userData) => async (dispatch) => {
   
    const response = await axios.post(`${BASE_API_URL}/user/register`,userData,{ withCredentials: true });
    
    const resData = response.data;
    localStorage.setItem("user", JSON.stringify(resData));
    localStorage.setItem("isLoggedin", JSON.stringify(true));
    console.log("User registered ", resData);
    dispatch({ type: REGISTER, payload: resData });
};

