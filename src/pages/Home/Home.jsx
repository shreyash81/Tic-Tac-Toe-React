import React from "react";

import Quote from "../../components/QuoteItem/Quote";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.quote_container}>
        <Quote />
      </div>
      <div className={styles.game_container}>
        <h2>helo</h2>
      </div>
    </div>
  );
};

export default Home;
