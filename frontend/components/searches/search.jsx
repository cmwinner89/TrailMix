import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParks } from '../../actions/park_actions';
import { fetchTrails } from '../../actions/trail_actions';
import { useHistory } from 'react-router';


const Search = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState("");
    const [dropDownHovered, setDropDownHovered] = useState(false);
    const parks = useSelector((state) => state.entities.parks.parks);
    const trails = useSelector((state) => state.entities.trails.trails);

    // console.log("parks", parks);
    // console.log("trails", trails);
    const [filterParks, setFilterParks] = useState([]);
    const [filterTrails, setFilterTrails] = useState([]);

    const prepFilter = (e) => {
        e.preventDefault();

        setSearchText(e.currentTarget.value);

        setFilterValues(e);
    }

    const setFilterValues = (e) => {

        setFilterParks(parks.filter(park => {
            if (park.park_name.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                return park;
            }
        }));

        setFilterTrails(trails.filter(trail => {
            if (trail.trail_name.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                return trail;
            }
        }));
    }


    const handleSubmit = (e) => {
        if (filterParks.length > 0) {
            history.push(`/parks/${filterParks[0].id}`);
        } else if (filterTrails.length > 0) {
            history.push(`/trails/${filterTrails[0].id}`);
        }
    }

    const clearFilter = () => {
        if (!dropDownHovered) {
            setFilterParks([]);
            setFilterTrails([]);
        }
    }

    useEffect(() => {
        dispatch(fetchTrails());
        dispatch(fetchParks());
    }, [])

    return (
        <div className="search-bar">
            <div className='search-text'>
                <form onSubmit={handleSubmit}>
                    <input
                        onFocus={setFilterValues}
                        onBlur={clearFilter}
                        value={searchText}
                        onChange={prepFilter}
                        className="search-bar-text"
                        type="text"
                    />
                </form>
            </div>
            <div onClick={handleSubmit} onMouseEnter={() => setDropDownHovered(true)} onMouseLeave={() => setDropDownHovered(false)} className='search-button'>
                <img src="https://cdn.discordapp.com/attachments/768905648288956421/842228298889297950/3762887.png" />
            </div>
            <div className="dropdown-container" onMouseEnter={() => setDropDownHovered(true)} onMouseLeave={() => setDropDownHovered(false)}>

                {filterParks[0] && filterParks.map(park => {
                    return (
                        <div onClick={() => history.push(`/parks/${park.id}`)} className="dropdown-container__item">
                            {park.park_name}
                        </div>
                    )
                })}

                {filterTrails[0] && filterTrails.map(trail => {
                    return (
                        <div onClick={() => history.push(`/trails/${trail.id}`)} className="dropdown-container__item">
                            {trail.trail_name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;