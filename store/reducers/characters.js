export default function characters (state={}, action) {
    switch(action.type){
        case 'SET_CHARACTERS': 
            return action.payload.value;
        default:
            return state;
    }
}