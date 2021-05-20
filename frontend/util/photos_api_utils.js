//fetchPhotos()
//createPhoto(photo)

export const fetchPhotos = (trail_id) => ({
    method: 'GET',
    url: `/api/trails/${trail_id}/photos`
});

export const createPhoto = (photo) => ({
    method: 'POST',
    url: '/api/photos',
    data: { photo },
    contentType: false,
    processData: false
});