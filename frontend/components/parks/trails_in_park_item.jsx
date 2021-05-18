import React from 'react';

const TrailsInParkItem = (props) => {

    const { trail } = props;
    console.log("yo from trailsItem", props);
    return (
        <div className='trails-in-park-sub-container'>
            <div className="trail-in-park-img-container">
                <div className="trail-in-park-img">
                    <img src={props.trail.backgroundPhotoUrl} />
                </div>
            </div>
            <div className="trail-in-park-card-container">

                <div className="trail-in-trailName-parkName">

                    <div className="trail-in-park-name">
                        <p>{trail.trailName}</p>
                    </div>
                    <div className="trail-in-park-park-name">
                        <p>{props.parkName}</p>
                    </div>
                </div>
                <div className="trail-in-park-indepth-details-cont">

                    <div className="trail-in-park-diff-rating-cont">
                        <div className="trail-in-park-difficulty">
                            {trail.difficulty}
                        </div>
                        <div className="trail-in-park-rating">
                            <p>rating: ⚝⚝⚝⚝⚝ </p>
                            {/* {trail.rating} */}
                        </div>
                    </div>
                    <div className="trail-in-park-legnth-container">
                        <p>Length: </p>
                        <p>{trail.length} mi.</p>

                    </div>
                </div>
                <div className="trail-in-park-summary-container">
                    {trail.summary}
                </div>
            </div>
        </div>
    )
}

export default TrailsInParkItem;