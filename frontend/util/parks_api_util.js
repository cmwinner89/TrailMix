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

// $.ajax({
//     method: 'GET',
//     url: `/api/parks/5`
// }).then(resp => console.log(resp));

// $.ajax({
//     method: 'GET',
//     url: `/api/parks/trails_in_park/5`
// }).then(resp => console.log(resp));