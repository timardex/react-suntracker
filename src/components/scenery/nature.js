import React from 'react';
import '../../assets/styles/nature.scss'

const Nature = () => {
        return(
            <div>
                <div className="cloud left"></div>
                <div className="cloud right flip"></div>

                <div className="hills">
                    <div className="hill hill-left"></div>
                    <div className="hill hill-right"></div>
                    <div className="hill hill-center">
                        <div className="tree tree-1">
                            <div className="trunk">
                                <div className="leftbranch"></div>
                                <div className="rightbranch"></div>
                            </div>
                        </div>

                        <div className="tree tree-2">
                            <div className="trunk">
                                <div className="leftbranch"></div>
                                <div className="rightbranch"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mountains">
                    <div className="mountain-one">
                        <div className="mountain-top">
                            <div className="mountain-cap-1 mountain-cap"></div>
                            <div className="mountain-cap-2 mountain-cap"></div>
                            <div className="mountain-cap-3 mountain-cap"></div>
                        </div>
                    </div>
                    <div className="mountain-two">
                        <div className="mountain-top">
                            <div className="mountain-cap-1 mountain-cap"></div>
                            <div className="mountain-cap-2 mountain-cap"></div>
                            <div className="mountain-cap-3 mountain-cap"></div>
                        </div>
                    </div>
                    <div className="mountain-three">
                        <div className="mountain-top">
                            <div className="mountain-cap-1 mountain-cap"></div>
                            <div className="mountain-cap-2 mountain-cap"></div>
                            <div className="mountain-cap-3 mountain-cap"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Nature;