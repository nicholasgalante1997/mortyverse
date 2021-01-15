export default function episodes (state={}, action) {
    switch(action.type){
        case 'SET_EPISODES': 
            return action.payload.value;
        default:
            return state;
    }
}