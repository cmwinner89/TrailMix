import { connect } from 'react-redux';
import React from 'react';
import { fetchPark } from '../../actions/park_actions';
import ParkShow from './parks_show';

const mSTP = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.parkId]
});

const mDTP = (dispatch) => ({
    fetchPark: parkId => dispatch(fetchPark(parkId))
});

export default connect(mSTP, mDTP)(ParkShow);