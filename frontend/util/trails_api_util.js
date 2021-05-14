//fetchTrail(trailId)
//fetchTrails()

export const fetchTrails = () => {
    return $.ajax ({
        method: 'GET',
        url: '/api/trails'
    })
};

export const fetchTrail = (trailId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/trails/${trailId}`
    })
};

export const fetchNearbyTrails = (trailId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/trails/nearby_trails/${trailId}`
    })
};


// $.ajax({
//     method: 'GET',
//     url: `/api/trails/nearby_trails/3`
// }).then(resp => console.log(resp));

// $.ajax({
//     method: 'GET',
//     url: `/api/trails/3`
// }).then(resp => console.log(resp));