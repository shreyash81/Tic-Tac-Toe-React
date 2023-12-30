import React,{useEffect, useRef} from 'react'
import styles from './Win.module.css'
const Win = ({result,setNextRound,nextRound,homeScreen,xZero}) => {
        
   function next_Round() {
      if(nextRound===true) { setNextRound(false)
         console.log(nextRound);
      }
      else{
       setNextRound(true)
       
      }

   }

   let icon = useRef(null);
   let win_text = useRef(null);
   useEffect(() => {
      if(xZero==='big_x.svg'){
         icon.current.src='/assets/icons/big_x.svg'
    win_text.current.style.color='var(--text-color)'
      } else if(xZero==='noOne'){ 
         icon.current.src='/assets/icons/refresh.svg'
          win_text.current.innerHTML = 'No-One Wins'
         win_text.current.style.color='#ffa607'
      }
      else{
         icon.current.src='/assets/icons/big_zero.svg'
         win_text.current.style.color='var(--color-accent-2)'
      }
   }, [xZero])
  return (
     <div className={styles.container}>
        <div className={styles.head}>{result}</div>
        <div className={styles.center_container}>
         <img src='/assets/icons/big_x.svg'  ref={icon} className={styles.center_img}/>
        <h2 className={styles.center_text} ref={win_text}>Takes The Round</h2>
        </div>
        <div className={styles.button_container}>
            <button className={styles.quit_btn} onClick={homeScreen}>Quit</button>
            <button className={styles.next_btn} onClick={next_Round}>Next Round</button>
        </div>
     </div>
  )
}

export default Win