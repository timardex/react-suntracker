import React from 'react';
import {Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';

const LoadingSpinner = props => {
    return (
        <div>
            {props.loading_calculation && <Spinner animation="border" variant="warning" />}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        loading_calculation: state.loading_calculation
    }
}

export default connect(mapStateToProps)(LoadingSpinner);