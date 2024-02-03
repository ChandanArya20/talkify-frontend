const user=JSON.parse(localStorage.getItem("user"));
const isLoggedin=localStorage.getItem("isLoggedin") === "true";;

const initialState = {
    userData: user || null,
    isAuthenticated: isLoggedin || false,
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REGISTER":
            return { ...state, userData: payload, isAuthenticated: true };
        
        case "REQ_USER":
            return{...state,userData:payload};

        case "LOGIN":
            return { ...state, isAuthenticated: true };

        case "LOGOUT":
            return { ...state, userData:null, isAuthenticated: false };

        default:
            return state;
    }
};
