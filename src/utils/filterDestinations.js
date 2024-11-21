export const filterDestinations = (destinations, query) =>
    query
      ? destinations.filter((destination) =>
          destination.name.toLowerCase().includes(query.toLowerCase())
        )
      : destinations;