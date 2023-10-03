import styles from './Adults.module.css';
import { useState } from 'react';

const Adults = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);

    return (  
        <div className={styles.mainbody}>
           <p>{adults} : Adults</p>
           <p>{children} : Children</p>
           <p>{rooms} : Rooms</p>

           <button className={styles.button} />
         </div>
    );
}
 
export default Adults;