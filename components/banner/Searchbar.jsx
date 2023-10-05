import React, { useState, useEffect, useRef } from "react"
import styles from "./Searchbar.module.css"
import {GrLocation} from "react-icons/gr";

const Searchbar = () => {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Replace this with your logic to fetch suggestions from an API
    const staticSuggestions = ["Apple", "Banana", "Cherry", "Orange"]
    const filteredSuggestions = staticSuggestions.filter(item =>
      item.toLowerCase().includes(newQuery.toLowerCase())
    )

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    if (filteredSuggestions.length === 0) {
      setShowSuggestions(false);
    }
  }

  const handleSuggestionClick = suggestion => {
    setQuery(suggestion)
    setShowSuggestions(false)
  }

  const handleClickOutside = event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.searchbody} ref={searchRef}>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Where are you going?"
        value={query}
        onChange={handleInputChange}
        onClick={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className={styles.suggestionlist}>
          {suggestions.map((suggestion, index) => (
            <li
            key={index}
            className={styles.suggestionitem}
            onClick={() => handleSuggestionClick(suggestion)}
            >
            <GrLocation  className={styles.loc}/><hr />
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Searchbar;
