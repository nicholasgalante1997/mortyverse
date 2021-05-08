export default function characters (state={}, action) {
    switch(action.type){
        case 'SET_CHARACTERS': 
            console.log(action, "Inside the reducer");
            return action.payload.value;
        default:
            return state;
    }
}