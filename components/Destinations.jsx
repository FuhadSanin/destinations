import React from "react"
import Cards from "./Cards"

const Destinations = ({ CardsData }) => {
  return (
    <>
      {CardsData &&
        CardsData.map(card => (
          <div className="destinations">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        ))}
    </>
  )
}

export default Destinations
