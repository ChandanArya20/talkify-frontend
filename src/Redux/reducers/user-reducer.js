const initialState = {
    userData: null,
    isAuthenticated: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REGISTER":
            return { ...state, userData: payload, isAuthenticated: true };
        
        case "REQ_USER":
            return{...state,userData:payload};

        case "LOGIN":
            return { ...state, isAuthenticated: true };

        default:
            return state;
    }
};
