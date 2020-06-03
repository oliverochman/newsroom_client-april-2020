import axios from 'axios'

const getPlace = async (dispatch) => {
  debugger;
  const location = await navigator.geolocation.getCurrentPosition(translateLocation)
  const long = location.coords.longitude;
  const lat = location.coords.latitude
  debugger;
  translateLocation(long, lat , dispatch)
  
}

const translateLocation = async (long, lat , dispatch) => {
  debugger;
  const apiKey = process.env.OPEN_CAGE_API_KEY
  const address = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`)
  debugger;
  // dispatch({

  // })
}

export { getPlace };