import styles from './Adults.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Adults = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [drop_visible, setDropVisible] = useState(false);

    const on_button_click = () => {
        setDropVisible(!drop_visible);  
        
    }

    const handleClickOutside = event => {
        console.log(event.target.className)
     
     //ivda aan problem ulllath!!!!!
        if (event.target.className) {
          setDropVisible(setDropVisible(!drop_visible))
        }
      }
    // Ivdam vare
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [])

    
    return (  
        <div className={styles.mainbody}>
           <p>{adults}:Adults</p>
           <p>{children}:Children</p>
           <p>{rooms}:Rooms</p>
            <div className={styles.buttonbody}>
                <button className={styles.button} onClick={()=>{on_button_click()}} />

            </div>
 
            { drop_visible && 
            <div className={styles.dropdown}>
                <div className={styles.dropsection}>
                    <button className={styles.buttondrop}></button>
                    <p>Adults</p>
                    <button className={styles.buttondrop}></button>
                </div>
                <div className={styles.dropsection}>
                    <button className={styles.buttondrop}></button>
                    <p>Children</p>
                    <button className={styles.buttondrop}></button>                </div>
                <div className={styles.dropsection}>
                    <button className={styles.buttondrop}></button>
                    <p>Rooms</p>
                    <button className={styles.buttondrop}></button>                </div>
          </div>
    }
          </div>
    );
}
 
export default Adults;