const parseFlightOffer = (flights) => {
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
  return itineraries
}
export { parseFlightOffer }
