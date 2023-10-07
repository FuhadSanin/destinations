import styles from "./Adults.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { icons } from "react-icons";
import { AiOutlineMinusSquare,AiOutlinePlusSquare,AiOutlineDown } from "react-icons/ai";

const Adults = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [drop_visible, setDropVisible] = useState(false);
  const inputRef = useRef(null);

  const on_button_click = () => {
    setDropVisible(!drop_visible);
  };

  const handleClickOutside = (event) => {
    console.log(event.target.className);

    //ivda aan problem ulllath!!!!!
    if (event.target.className) {
      setDropVisible(setDropVisible(!drop_visible));
    }
  };
  // Ivdam vare
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mainbody} ref={inputRef}>
      <p>{adults}:Adults</p><hr />
      <p>{children}:Children</p><hr />
      <p>{rooms}:Rooms</p><hr />
      <div className={styles.buttonbody}>
        <AiOutlineDown
          className={styles.button}
          onClick={() => {
            on_button_click();
          }}
        />
      </div>
      <div className={styles.main} inputRef={inputRef}>
        {drop_visible && (
          <div className={styles.dropdown}>
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop} />
              <p>Adults</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
              <hr />
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop}/>
              <p>Children</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
              <hr />
            <div className={styles.dropsection}>
              <AiOutlineMinusSquare className={styles.buttondrop}/>
              <p>Rooms</p>
              <AiOutlinePlusSquare className={styles.buttondrop}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adults;
