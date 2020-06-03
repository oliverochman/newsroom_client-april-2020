import axios from 'axios'

const getPlace = (dispatch) => {
  navigator.geolocation.getCurrentPosition(async (location) => {
    debugger;
    const apiKey = 'key'
    const long = location.coords.longitude;
    const lat = location.coords.latitude
    const address = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`)

    dispatch({
      type: 'SET_LOCATION',
      payload: {
        location:  {
          address: address,
          longitude: long,
          latitiude: lat
        }
      }
    })
  })
}

export { getPlace };