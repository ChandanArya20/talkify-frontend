import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGES } from "./actionType";

export const createMessage = (messageData) => async(dispatch) => {
   
    const response = await axios.post(`${BASE_API_URL}/message/send`,messageData,{ withCredentials: true });
    const resData = response.data;
    
    console.log(resData);
    dispatch({ type: CREATE_NEW_MESSAGE, payload: resData });
};

export const getAllMessages = (chatId) => async(dispatch) => {
   
    const response = await axios.get(`${BASE_API_URL}/message/chat/${chatId}`,{ withCredentials: true });
    const resData = response.data;
    
    console.log(resData);
    dispatch({ type: GET_ALL_MESSAGES, payload: resData });
};



