import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

function App ({ dispatch, flights }) {
  return (
    <div className="App">
      <div onClick={() => { dispatch({ type: 'FLIGHT_SEARCH_REQUESTED' }) }}>Request some flights</div>
      {flights.map((flight) => {
        return (JSON.stringify(flight))
      })}
    </div>
  )
}

const mapStateToProps = state => ({ flights: state.flights })

App.propTypes = {
  dispatch: PropTypes.function,
  flights: PropTypes.array
}
export default connect(mapStateToProps)(App)
