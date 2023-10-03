import React from "react"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <Image src="" className="img-fluid" alt="Company_logo" />
        </a>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Navbar
