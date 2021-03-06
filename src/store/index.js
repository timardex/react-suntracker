import initialState from './initialState';
import {convertAMPMto24h, convertTimestamp} from './helpers';
import {createStore} from 'redux';

const reducer = (state = initialState, action) => {    
    switch(action.type) {
        case 'TOGGLE_SIDEBAR':
            return{
                ...state,
                sidebarActive: !state.sidebarActive 
            }
        case 'PUSH_BTN':
            return{
                ...state,
                btnText: 'Calculating ...',
                loading_calculation: true,
                infoActive: false,
            }
        case 'GET_COORDINATES':
            return{
                ...state,
                lat: action.lat,
                lng: action.lng,
                btnText: 'Track the Sun',
                loading_calculation: false,
                infoActive: true,
            }
        case 'LOAD_SUNRISE_SUNSET':
            let sunrise = convertAMPMto24h(action.response.data.sys.sunrise);
            let sunset = convertAMPMto24h(action.response.data.sys.sunset);

            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            hours = hours.toString();
            minutes = minutes.toString();

            let timenow = hours + minutes;

            let dd = String(date.getDate()).padStart(2, '0');
            let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = date.getFullYear();

            sunrise = sunrise.substring(0, sunrise.length - 1);
            sunset = sunset.substring(0, sunset.length - 1);
            timenow = timenow.substring(0, timenow.length - 1);

            sunrise = parseInt(sunrise);
            sunset = parseInt(sunset);
            timenow = parseInt(timenow);
        
            let dusk = sunrise - 10;
            let down = sunset + 10;
        
            let noon = sunset - sunrise;
            noon = noon / 2;
            noon = noon + sunrise;

            let _sunStyle, _sunUpDown = 'up', _boolean, _scenery;
            if (timenow >= sunrise && timenow <= noon) {
                _sunStyle = timenow - sunrise;
                _sunUpDown = 'up';
                _boolean = true;
                _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(155,194,204,1) 100%)';

                if (_sunStyle < 15) {
                    _scenery ='linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(255,127,0,1) 100%)';
                }
            }

            if (timenow > noon && timenow <= sunset) {
                _sunStyle = sunset - timenow;
                _sunUpDown = 'down';
                _boolean = true;
                _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(155,194,204,1) 100%)';
                
                if (_sunStyle < 15) {
                    _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(255,127,0,1) 100%)';
                }
            }

            if ((timenow < sunrise && timenow > dusk) || (timenow >= sunset && timenow < down)) {
                _sunStyle = -100;
                _boolean = true;
                _scenery = 'linear-gradient(to bottom, rgba(13,65,94,1) 0%,rgba(112,176,224,1) 75%,rgba(112,176,224,1) 80%,rgba(255,127,0,1) 100%)';
            }

            else if (timenow < sunrise || timenow > sunset) {
                _scenery ='#0D415E';
                _boolean = false;
            }

            return{
                ...state,
                sunrise: convertTimestamp(action.response.data.sys.sunrise),
                sunset: convertTimestamp(action.response.data.sys.sunset),
                country: action.response.data.sys.country,
                timenow: `${hours}:${minutes}`,
                today: `${dd}/${mm}/${yyyy}`,
                sunStyle: _sunStyle,
                sunUpDown: _sunUpDown,
                boolean: _boolean,
                scenery: _scenery
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;