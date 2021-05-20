//fetchPark(parkId)

export const fetchPark = (parkId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/parks/${parkId}`
    })
}

export const fetchTrailsInPark = (parkId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/parks/trails_in_park/${parkId}`
    })
}

export const fetchParks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/parks'
    })
};

// $.ajax({
//     method: 'GET',
//     url: `/api/parks/5`
// }).then(resp => console.log(resp));

// $.ajax({
//     method: 'GET',
//     url: `/api/parks/trails_in_park/2`
// }).then(resp => console.log(resp)); 