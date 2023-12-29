import React from 'react'
import styles from './Game.module.css'
const Game = () => {
  return (

       <div className={styles.container}>
        <div className={styles.header}>
             <div className={styles.icons}>
             <img src="/assets/icons/cross.svg" alt="X" />
             &nbsp;
             <img src="/assets/icons/zero.svg" alt="0" />
             </div>
             <div className={styles.turn_container}>
                <span className={styles.game_cross}><img src='/assets/icons/game_cross.svg' alt='X'/></span>
                <span className={styles.text}>TURN</span>
             </div>
             <button className={styles.refresh_btn}><img src='/assets/icons/refresh.svg' alt='refresh'/></button>
             </div>
         <div className={styles.game_container} >
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
            <button className={styles.game_btn} id={styles.btn_1}></button>
         </div>

    <div className={styles.score_container}>
        <div className={styles.score}>X (YOU)
        <span className={styles.score_value}>0</span></div>
        <div className={styles.score}>TIES <span className={styles.ties_value}>0</span></div>
        <div className={styles.score}>O (CPU) <span className={styles.cpu_score}>0</span> </div>
    </div>
        </div>
       

  )
}

export default Game