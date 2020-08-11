import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.GOOGLE_GEOCODE_KEY)
Geocode.setLanguage('en')
Geocode.setRegion('us')

export default Geocode
