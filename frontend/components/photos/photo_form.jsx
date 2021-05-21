import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';

const PhotoForm = (props) => {

    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.session.id)

    useEffect(() => {
            
    }, [])
    return (
        <div>
            <form>
                <input 
                    type="file"
                 />
            </form>
        </div>
    )
}

export default PhotoForm;
