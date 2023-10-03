import React from 'react';
import Searchbar from './banner/Searchbar';
import styles from './Banner.module.css';
import Calender from './banner/Calender';
import Nationality from './banner/Nationality';
import Adults from './banner/Adults';

const Banner = () => {
    return (
        <div className={styles.banner}>

            <Searchbar />
            <Calender />
            <Nationality />
            <Adults />
        </div>
      );
    }

export default Banner;
