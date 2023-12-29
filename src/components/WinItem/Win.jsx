import React from 'react'
import styles from './Win.module.css'
const Win = ({result}) => {
  return (
     <div className={styles.container}>
        <div className={styles.head}>You Win !</div>
        <div className={styles.center_container}>
        <img src='/assets/icons/big_zero.svg' alt='X' className={styles.center_img}/>
        <h2 className={styles.center_text}>Takes The Round</h2>
        </div>
        <div className={styles.button_container}>
            <button className={styles.quit_btn}>Quit</button>
            <button className={styles.next_btn}>Next Round</button>
        </div>
     </div>
  )
}

export default Win