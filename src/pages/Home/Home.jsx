import React, { useState } from "react";
import Quote from "../../components/QuoteItem/Quote";
import MainMenu from "../../components/MainItem/MainMenu";
import Game from "../../components/GameArea/Game";

import styles from "./Home.module.css";
const Home = () => {
  let [player, setPlayer] = useState("");
  let [page, setPage] = useState(1);
  return (

    <div className={styles.home}>
      <div className={styles.quote_container}>
        <Quote />
      </div>
     
      <div className={styles.game_container}>
        {page === 1 && (
          <MainMenu
          player={player}
          setPlayer={setPlayer}
          page={page}
          setPage={setPage}
          />
          )}
        {page === 2 && (
          <Game player={player} setPlayer={setPlayer} setPage={setPage} />
          )}
      </div>
    </div>

  );
};

export default Home;
