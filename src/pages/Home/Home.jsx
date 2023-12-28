import React from "react";
import Quote from "../../components/QuoteItem/Quote";
import MainMenu from '../../components/MainItem/MainMenu'


import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.quote_container}>
        <Quote />
      </div>
      <div className={styles.game_container}>
        <MainMenu />
      </div>
    </div>
  );
};

export default Home;
