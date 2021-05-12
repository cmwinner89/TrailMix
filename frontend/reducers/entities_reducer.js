import {combineReducers} from 'redux';
import trailsReducer from './trails_reducer'
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer ,
    trails: trailsReducer
});

export default entitiesReducer;