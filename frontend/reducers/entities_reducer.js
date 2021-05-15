import {combineReducers} from 'redux';
import ParksReducer from './parks_reducer';
import trailsReducer from './trails_reducer'
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer ,
    trails: trailsReducer,
    parks: ParksReducer
});

export default entitiesReducer;