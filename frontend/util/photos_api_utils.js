//fetchPhotos()
//createPhoto(photo)

export const fetchPhotos = () => ({
    method: 'GET',
    url: "/api/photos"
});

export const createPhoto = (photo) => ({
    method: 'POST',
    url: '/api/photos',
    data: { photo }
});