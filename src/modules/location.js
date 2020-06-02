import axios from 'axios'

const getPlace = (dispatch) => {
  debugger;
  navigator.geolocation.getCurrentPosition(locate => {
    const long = locate.coords.longitude;
    const lat = locate.coords.latitude
    translateLocation(long, lat , dispatch)
  })
}

const translateLocation = async (long, lat , dispatch) => {
  const apiKey = process.env.OPEN_CAGE_API_KEY
  const address = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`)
  debugger;
  // dispatch({

  // })
}

export { getPlace };