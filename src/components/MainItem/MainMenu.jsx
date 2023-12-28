import React from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
  const copyLink = () => {
    navigator.clipboard.writeText("https://tictactoe-frontend.netlify.app/");
    toast.success('Invite Link Copied', {
      style: {
        height:'2.5rem',
        width:'13rem',
        border:'none',
        padding: '0.5rem',
        color: 'var(--color-accent-2)',
        background: 'var(--color-accent)',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  };
  return (
    <div className={styles.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.icons}>
        <img src="/assets/icons/cross.svg" alt="X" />
        &nbsp;
        <img src="/assets/icons/zero.svg" alt="0" />
      </div>
      <div className={styles.play_card}>
        <h2>Pick Player</h2>
        <div className={styles.play_card_buttons}>
          <button className={styles.button} id={styles.cross}>
            <img src="/assets/icons/cross.svg" alt="X" />
          </button>
          <button className={styles.button} id={styles.zero}>
            <img src="/assets/icons/zero.svg" alt="0" />
          </button>
        </div>
      </div>
      <button className={styles.new_game_cpu}>New Game ( VS CPU )</button>
      <button className={styles.new_game_human}>
        New Game ( VS Human ) <span>Coming Soon</span>
      </button>
      <button className={styles.invite_btn} onClick={copyLink}>
        Invite Your Friend
      </button>
    </div>
  );
};

export default MainMenu;
