import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USERS:
            let newState = { ...state };
            action.users.forEach(user => (
                newState[user.id] = user
            ))
            return newState;
        default:
            return state;
    }
}

export default usersReducer;