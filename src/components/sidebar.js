import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import LoadingSpinner from './loadingSpinner';

import APIkey from './API-key';

const Sidebar = props => {
    const showInfoList = () => {
        if(props.infoActive) {
            return <div className="info-list text-left">
                        <p className="text-center">This is your information:</p>
                        <ul>
                            <li><u>Latitude</u>: <i>{props.lat}</i></li>
                            <li><u>Longitude</u>: <i>{props.lng}</i></li>
                            <li><u>Country</u>: <i>{props.country}</i></li>
                            <li><u>Sunrise</u>: <i>{props.sunrise}</i></li>
                            <li><u>Sunset</u>: <i>{props.sunset}</i></li>
                            <li><u>Time now</u>: <i>{props.timenow}</i></li>
                            <li><u>Date</u>: <i>{props.today}</i></li>
                        </ul>
                    </div>
        }
    }
    return(
        <div className={`information ${props.sidebarActive ? 'active' : 'inactive'}`}>
            <div className="trigger-sidebar" onClick={(e) => props.toggleSidebar()}>
                <img src={require(`../assets/menu-arrow-${props.sidebarActive ? 'right' : 'left'}.png`)} alt="Open close menu" />
            </div>

            <div className="inner text-center">
                <div className="inner-info">
                    <h1>Sun Tracker</h1>
                    <p className="text-left">
                        This app is a live Sun tracker which is using your geolocation (Latitude and Longitude). You need to give access for the app to use it!
                    </p>
                    <button className="btn btn-warning mb-3" onClick={(e) => props.getCoordinates()}>{props.btnText}</button>
                    {showInfoList()}
                    <LoadingSpinner />
                </div>
            </div>
        </div>
    )
}

let coordinates = [];
let _lat, _lng;
const getPosition = (options) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}
    
getPosition()
.then((position) => {
    coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    })
})
.catch((err) => {
    console.error(err.message);
});

setTimeout(() => {
    _lat = parseFloat(coordinates.map(val => val.lat))
    _lng = parseFloat(coordinates.map(val => val.lng))
}, 1000)


function mapStateToProps(state) {
    return{
        sidebarActive: state.sidebarActive,
        btnText: state.btnText,
        infoActive: state.infoActive,
        lat: state.lat,
        lng: state.lng,
        country: state.country,
        sunrise: state.sunrise,
        sunset: state.sunset,
        timenow: state.timenow,
        today: state.today
    }
}

function mapDispatchToProps(dispatch) {
    
    return{
        toggleSidebar:() => {
            const action = {type: 'TOGGLE_SIDEBAR'}
            dispatch(action)
        },
        getCoordinates:() => {
            setTimeout(() =>{
                const action = {type: 'PUSH_BTN'}
                dispatch(action)
            })
            setTimeout(() =>{
                const action = {type: 'GET_COORDINATES', lat: _lat, lng: _lng}
                dispatch(action)
            }, 3000)
            setTimeout(() => {
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${_lat}&lon=${_lng}&APPID=${APIkey}`;
                axios.get(url)
                    .then(response => {
                        const action = {type: 'LOAD_SUNRISE_SUNSET', response: response}
                        dispatch(action)
                    }).catch(response => {
                        return Promise.reject(response)
                    })
            },4000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);