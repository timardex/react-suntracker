import React from 'react'
import {connect} from 'react-redux'
import '../assets/styles/errorMsg.scss'

const ErrorMsg = props => {
  if(isNaN(props.lat)) {
    return(
      <div class="show-error-msg">
          <div class="text-center">
            <p><b>Oops! Something went wrong or you didn't allow the app to use your geolocation.</b></p>
            <p>Please refresh the app or enable geolocation and push the <b>Track the Sun</b> button again!</p>
          </div>
      </div>
    )
  } else {
    return null
  }
}

function mapStateToProps(state) {
  return {
    lat: state.lat
  }
}

export default connect(mapStateToProps)(ErrorMsg)