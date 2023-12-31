import React, { useEffect, useMemo, useState } from "react";
import Quote from "../../components/QuoteItem/Quote";
import MainMenu from "../../components/MainItem/MainMenu";
import Game from "../../components/GameArea/Game";

import styles from "./Home.module.css";
const Home = () => {
  let [player, setPlayer] = useState("");
   
  let [page, setPage] = useState(1);
     
// let [localStore,setLocalStore]=useState(0);  
 
  useEffect(() => {
   
    

     if(localStorage.getItem('userScore') > 0 || localStorage.getItem('cpuScore') > 0 || localStorage.getItem('tiesScore') > 0) {
       setPage(2);
     }
   
  //  (Math.floor(Math.random()*2) ===1 ? setPlayer('big_x.svg') : setPlayer('big_zero.svg')) 
   if(localStorage.getItem('players') != null) {
    //  localStorage.setItem('players',player);
    setPlayer(localStorage.getItem('players'));
   }
  //  (localStorage.getItem('players') == null ? setPlayer('big_x.svg') : setPlayer('big_zero.svg'))
     
  },[])


  return (

    <div className={styles.home}>
      <div className={styles.quote_container}>
        <Quote />
      </div>
      <div className={styles.game_container}>
        {page===1 && (
          <MainMenu
          player={player}
          setPlayer={setPlayer}
          page={page}
          setPage={setPage}
          />
          )}
        {page === 2 && (
          <Game player={player} setPlayer={setPlayer} setPage={setPage} page={page}  />
          )}
      </div>
    </div>

  );
};

export default Home;
