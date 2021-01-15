export default function locations (state={}, action) {
    switch(action.type){
        case 'SET_LOCATIONS': 
            return action.payload.value;
        default:
            return state;
    }
}