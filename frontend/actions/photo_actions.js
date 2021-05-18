import * as PhotoApiUtil from "../util/photos_api_utils";

//RECEIVE_PHOTOS
//RECEIVE_PHOTO

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

export const fetchPhoto = () => dispatch => {
    return PhotoApiUtil.fetchPhotos()
        .then(photos => dispatch(receivePhotos(photos)))
};

export const createPhoto = (photo) => dispatch => {
    return PhotoApiUtil.createPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)))
}
