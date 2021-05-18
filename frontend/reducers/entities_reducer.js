import {combineReducers} from 'redux';
import ParksReducer from './parks_reducer';
import trailsReducer from './trails_reducer'
import usersReducer from './users_reducer';
import ReviewsReducer from './reviews_reducer'
import PhotosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer ,
    trails: trailsReducer,
    parks: ParksReducer,
    reviews: ReviewsReducer,
    photos: PhotosReducer
});

export default entitiesReducer;