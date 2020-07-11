import React, { useState } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { flightOptions } from './flightOptions'
import { parseFlightOffer } from './lib/amadeusParser'

function App ({ dispatch, flights }) {
  const [payload, setPayload] = useState({})

  const handleOnChange = (e) => {
    const newPayload = { ...payload, [e.target.name]: e.target.value }
    if (e.target.name === 'origin') {
      delete newPayload.destination
    }
    console.log({ newPayload })
    setPayload(newPayload)
  }

  return (
    <div className="App">
      Origin:
      <select name="origin" onChange={handleOnChange}>
        {[''].concat(Object.keys(flightOptions)).map((origin) => {
          return (
            <option key={origin} value={origin}>
              {origin}
            </option>
          )
        })}
      </select>
      Destination:
      <select name="destination" onChange={handleOnChange}>
        {payload.origin &&
          [''].concat(flightOptions[payload.origin]).map((destination) => {
            return (
              <option key={destination} value={destination}>
                {destination}
              </option>
            )
          })}
      </select>
      Date:{' '}
      <input name="date" placeholder="2020-08-01" onChange={handleOnChange} />
      Adults: <input name="adults" onChange={handleOnChange} />
      <div
        onClick={() => {
          dispatch({ type: 'FLIGHT_SEARCH_REQUESTED', payload: payload })
        }}
      >
        Request some flights
      </div>
      {parseFlightOffer(flights).map((flight, flightOption) => {
        return (
          <div key={flightOption}>
            Flight option: {flightOption + 1}{' '}
            {flight.map((itineraries, itineraryIndex) => {
              return itineraries.map((segment, segmentIndex) => {
                return (
                  <div key={flightOption + itineraryIndex + segmentIndex}>
                    Origin: {segment.origin} Destination: {segment.destination}{' '}
                    start: {segment.start} end: {segment.end}
                  </div>
                )
              })
            })}
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({ flights: state.flights })

App.propTypes = {
  dispatch: PropTypes.func,
  flights: PropTypes.array
}
export default connect(mapStateToProps)(App)
