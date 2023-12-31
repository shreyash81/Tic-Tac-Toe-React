import React, { useState, useRef, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./MainMenu.module.css";

const MainMenu = ({ player, setPlayer, page, setPage }) => {
  const copyLink = () => {
    navigator.clipboard.writeText("https://tictactoe-reactgame.vercel.app/");
    toast.success("Invite Link Copied", {
      style: {
        height: "2.5rem",
        width: "13rem",
        border: "none",
        padding: "0.5rem",
        color: "var(--color-accent-2)",
        background: "var(--color-accent)",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  const featureComingSoon = () => {
    toast.error("Feature Under Development", {
      style: {
        height: "2.5rem",
        width: "13rem",
        border: "none",
        padding: "0.5rem",
        color: "var(--color-accent-2)",
        background: "var(--color-accent)",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  let cross = useRef(null);
  let zero = useRef(null);

  const clickCrossStyles = () => {
    cross.current.style.borderRadius = "0.3rem";
    cross.current.style.background = "#fff";
    cross.current.style.padding = "0.2rem 2rem";

    zero.current.style.borderRadius = "none";
    zero.current.style.background = "none";
    zero.current.style.padding = "none";
  };

  const clickZeroStyles = () => {
    zero.current.style.borderRadius = "0.3rem";
    zero.current.style.background = "#fff";
    zero.current.style.padding = "0.2rem 2rem";

    cross.current.style.borderRadius = "none";
    cross.current.style.background = "none";
    cross.current.style.padding = "0.2rem 2rem";
  };

  const setCross = () => {
    setPlayer("big_x.svg");
    clickCrossStyles();
  };

  const setZero = () => {
    setPlayer("big_zero.svg");
    clickZeroStyles();
  };
  
  const checkPlayer = () => {
    if (player === "") {
      toast.error("Kindly Select Zero or Cross", {
        style: {
          height: "2.5rem",
          width: "13rem",
          border: "none",
          padding: "0.5rem",
          color: "var(--color-accent-2)",
          background: "var(--color-accent)",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } else {
      setPage(2);
    }
  }

  return (
    <>
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
          <button
            className={styles.button}
            id={styles.cross}
            ref={cross}
            onClick={setCross}
            >
            <img src="/assets/icons/cross.svg" alt="X" />
          </button>
          <button
            className={styles.button}
            id={styles.zero}
            ref={zero}
            onClick={setZero}
            >
            <img src="/assets/icons/zero.svg" alt="0" />
          </button>
        </div>
      </div>
      <button className={styles.new_game_cpu} onClick={checkPlayer}>
        New Game ( VS CPU )
      </button>
      <button className={styles.new_game_human} onClick={featureComingSoon}>
        New Game ( VS Human ) <span>Coming Soon</span>
      </button>
      <button className={styles.invite_btn} onClick={copyLink}>
        Invite Your Friend
      </button>
    </div>
            </>
  );
};

export default MainMenu;
