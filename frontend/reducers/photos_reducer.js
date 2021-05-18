import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';

const PhotosReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        case RECEIVE_PHOTO:
            return Object.assign({}, state, {[action.photo.id]: action.photo})
        default:
            return state;
    }
}

export default PhotosReducer;