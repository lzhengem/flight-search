import React from 'react'

const displayFlights = (flights) => {
  const itineraries = flights.map((flight) => {
    return flight.itineraries.map((itinerary) => {
      return itinerary.segments.map((segment) => {
        const startDateTime = new Date(segment.departure.at)
        const endDateTime = new Date(segment.arrival.at)
        const data = {
          origin: segment.departure.iataCode,
          destination: segment.arrival.iataCode,
          start: `${startDateTime.toLocaleDateString()} ${startDateTime.toLocaleTimeString()} `,
          end: `${endDateTime.toLocaleDateString()} ${endDateTime.toLocaleTimeString()} `
        }
        return data
      })
    })
  })

  return itineraries.map((flight, flightOption) => {
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
  })
}

export { displayFlights }
