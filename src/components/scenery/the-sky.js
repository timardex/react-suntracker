import React from 'react'
import {connect} from 'react-redux'
import '../../assets/styles/theSky.scss'

const TheSky = props => {
    return(
        <div>
            {props.boolean ?
                <div className="day-sky" style={{background: props.scenery}}>
                    <div className="sun" style={{bottom: props.sunStyle + '%'}}>
                        <img src={require(`../../assets/sun-${props.sunUpDown}.png`)} alt="Sun up down" />
                    </div>
                </div>
                :
                <div className="night-sky" style={{background: props.scenery}}>
                    <div className="moon">
                        <div className="craters-top"></div>
                        <div className="craters-bottom"></div>
                    </div>
                    <div className="stars">
                        {[...Array(1500)].map((e, i) => <div key={i} className={'star star-' + i}></div>)}
                    </div>
                </div>
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        boolean: state.boolean,
        scenery: state.scenery,
        sunStyle: state.sunStyle,
        sunUpDown: state.sunUpDown
    }
}

export default connect(mapStateToProps)(TheSky);