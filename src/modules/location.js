import axios from 'axios'

const getLocation = (dispatch) => {
  let location;
  navigator.geolocation.getCurrentPosition(locate => {
    translateLocation(locate, dispatch)
  })
}

const translateLocation = (location, dispatch) => {
  
}