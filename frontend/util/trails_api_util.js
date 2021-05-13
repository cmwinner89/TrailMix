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

$.ajax({
    method: 'GET',
    url: `/api/trails/1`
}).then(resp => console.log(resp));