import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_USERS:
            action.users.forEach(user => (
                newState[user.id] = user
            ))
            return newState;
        case RECEIVE_CURRENT_USER:
            console.log("newState", newState);
            console.log("state", state);
        //     console.log(action.currentuser);
        //     // newState.push(action.currentUser)
        //     return {...newState, [action.currentuser.id]: action.currentuser};
        default:
            return state;
    }
}

export default usersReducer;