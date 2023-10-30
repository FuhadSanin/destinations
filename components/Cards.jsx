import React, { useState } from "react"
import Image from "next/image"

const Cards = ({ name, image, rating, desc, card, onSelect }) => {
  const handleBookNow = () => {
    onSelect(card)
  }
  return (
    <>
      <div class="card-container">
        <div class="card-image">
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/${image}`}
            width={150}
            height={150}
            objectFit="cover"
            alt="Circular Image"
          />
        </div>
        <div class="card-content">
          <h1 class="card-title">{name}</h1>
          <div class="rating">
            {rating} <span>&#9733;</span>{" "}
          </div>
          <p class="card-description">{desc}</p>
          <a href="#booking">
            <button class="contact-button" onClick={handleBookNow}>
              Book Now
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Cards
