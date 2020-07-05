import Amadeus from 'amadeus'

export function getAmadeus () {
  const amadeus = new Amadeus({
    clientId: process.env.REACT_APP_AMADEUS_API_KEY,
    clientSecret: process.env.REACT_APP_AMADEUS_API_SECRET
  })

  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2020-08-01',
    adults: '2'
  }).then(function (response) {
    console.log(response.data)
  }).catch(function (responseError) {
    console.log(responseError.code)
  })
}
