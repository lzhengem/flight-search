export const FLIGHT_SEARCH_RECEIVED = 'FLIGHT_SEARCH_RECEIVED'

const initialState = {
  flights: []
}

function flightReducer (state = initialState, action) {
  switch (action.type) {
    case FLIGHT_SEARCH_RECEIVED:
      return {
        ...state,
        flights: [...action.payload]
      }
    default:
      return state
  }
}

export { flightReducer }
