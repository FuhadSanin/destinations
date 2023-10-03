import React from "react"
import Cards from "./Cards"

const Destinations = ({ CardsData }) => {
  return (
    <>
      {CardsData &&
        CardsData.map(card => (
          <div className="destinations">
            <div className="destinations-card">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        ))}
    </>
  )
}

export default Destinations
