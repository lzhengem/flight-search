import { call, put, takeEvery } from 'redux-saga/effects'
import Amadeus from 'amadeus'

function amadeusFlightSearch (request) {
  const amadeus = new Amadeus({
    clientId: process.env.REACT_APP_AMADEUS_API_KEY,
    clientSecret: process.env.REACT_APP_AMADEUS_API_SECRET
  })

  return amadeus.shopping.flightOffersSearch.get({
    originLocationCode: request.origin,
    destinationLocationCode: request.destination,
    departureDate: request.date,
    adults: request.adults
  })
}

function * getAmadeus (action) {
  try {
    const flightSearch = yield call(() => amadeusFlightSearch(action.payload))

    yield put({ type: 'FLIGHT_SEARCH_RECEIVED', payload: flightSearch.data })
  } catch (e) {
    console.log(e)
  }
}

function * getAmadeusSaga () {
  yield takeEvery('FLIGHT_SEARCH_REQUESTED', getAmadeus)
}

export { getAmadeusSaga }
