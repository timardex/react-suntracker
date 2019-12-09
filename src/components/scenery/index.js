import React from 'react';

import TheSky from './the-sky';
import Nature from './nature';
import LoadingSpinner from '../loadingSpinner';

const Scenery = props => {
    return (
        <div className="scenery">
            <div className="intro-text">
                <LoadingSpinner />
            </div>
            <TheSky />
            <Nature />
        </div>
    )
}

export default Scenery;