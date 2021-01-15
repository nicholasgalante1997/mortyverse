const initialState = {
    isAuthenticated: false
}

export default function user (state=initialState, action){
    switch(action.type){
        case "HANDLE_SIGN_IN": 
            return {
                isAuthenticated: true,
                ...action.payload.value 
            }

    }
}