import React from "react"

const Destinations = ({ CardsData }) => {
  return (
    <>
      {console.log(CardsData)}
      {CardsData &&
        CardsData.map(card => (
          <div>
            <h1>{card.name}</h1>
          </div>
        ))}
    </>
  )
}

export default Destinations
