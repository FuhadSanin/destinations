import React from "react"
import Searchbar from "./banner/Searchbar"
import styles from "./Banner.module.css"
import Calender from "./banner/Calender"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Searchbar />
      <Calender />
    </div>
  )
}

export default Banner
