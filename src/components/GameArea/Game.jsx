import React, { useRef } from "react";
import styles from "./Game.module.css";
import toast, { Toaster } from "react-hot-toast";

const Game = ({ player }) => {
  const userSelection = player;
  let pcSelection = player === "big_zero.svg" ? "big_x.svg" : "big_zero.svg";
  let changeTurn = useRef(null);
  const buttons = useRef(null);
  const refreshBtn = useRef(null);
  let gameArr = [
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ];
  const userWinLogic = () => {
    if (
      (gameArr[0] === "user" &&
        gameArr[1] === "user" &&
        gameArr[2] === "user") ||
      (gameArr[3] === "user" &&
        gameArr[4] === "user" &&
        gameArr[5] === "user") ||
      (gameArr[6] === "user" &&
        gameArr[7] === "user" &&
        gameArr[8] === "user") ||
      (gameArr[0] === "user" &&
        gameArr[3] === "user" &&
        gameArr[6] === "user") ||
      (gameArr[1] === "user" &&
        gameArr[4] === "user" &&
        gameArr[7] === "user") ||
      (gameArr[2] === "user" &&
        gameArr[5] === "user" &&
        gameArr[8] === "user") ||
      (gameArr[0] === "user" &&
        gameArr[4] === "user" &&
        gameArr[8] === "user") ||
      (gameArr[2] === "user" &&
        gameArr[4] === "user" &&
        gameArr[6] === "user")
    ) {
      gameArr = [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ];
      console.log("user wins");
    }
  };
  const pcWinLogic = () => {
    if (
      (gameArr[0] === "cpu" &&
        gameArr[1] === "cpu" &&
        gameArr[2] === "cpu") ||
      (gameArr[3] === "cpu" &&
        gameArr[4] === "cpu" &&
        gameArr[5] === "cpu") ||
      (gameArr[6] === "cpu" &&
        gameArr[7] === "cpu" &&
        gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" &&
        gameArr[3] === "cpu" &&
        gameArr[6] === "cpu") ||
      (gameArr[1] === "cpu" &&
        gameArr[4] === "cpu" &&
        gameArr[7] === "cpu") ||
      (gameArr[2] === "cpu" &&
        gameArr[5] === "cpu" &&
        gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" &&
        gameArr[4] === "cpu" &&
        gameArr[8] === "cpu") ||
      (gameArr[2] === "cpu" && gameArr[4] === "cpu" && gameArr[6] === "cpu")
    ) {
      gameArr = [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ];
      console.log("pc wins");
    }
  };
  function pcPlay() {
    let randomBtn = Math.floor(Math.random() * 9);
    if (gameArr[randomBtn] === "empty") {
      gameArr[randomBtn] = "cpu";
      buttons.current.children[
        randomBtn
      ].innerHTML = `<img src=/assets/icons/${pcSelection} alt="0"/>`;
      changeTurn.current.innerHTML = `<img src='/assets/icons/cross.svg' alt='X'/>`;
      pcWinLogic();
    } else {
      pcPlay();
    }
  }

  const userPlay = (e) => {
    if (gameArr[e.target.id] === "empty") {
      refreshBtn.current.style.visibility = "visible";
      e.target.innerHTML = `<img src='/assets/icons/${userSelection}' alt='X'/>`;
      gameArr[e.target.id] = "user";
      console.log(gameArr);
      pcPlay();
      userWinLogic();
      changeTurn.current.innerHTML = `<img src='/assets/icons/game_cross.svg' alt='X'/>`;
    } else {
      toast.error("Already Occupied", {
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
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.icons}>
            <img src="/assets/icons/cross.svg" alt="X" />
            &nbsp;
            <img src="/assets/icons/zero.svg" alt="0" />
          </div>
          <div className={styles.turn_container}>
            <span className={styles.game_cross} ref={changeTurn}>
              <img src="/assets/icons/game_cross.svg" alt="X" />
            </span>
            <span className={styles.text}>TURN</span>
          </div>
          <button className={styles.refresh_btn} ref={refreshBtn}>
            <img src="/assets/icons/refresh.svg" alt="refresh" />
          </button>
        </div>
        <div className={styles.game_container} ref={buttons}>
          <button
            className={styles.game_btn}
            id="0"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="1"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="2"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="3"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="4"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="5"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="6"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="7"
            onClick={userPlay}
          ></button>
          <button
            className={styles.game_btn}
            id="8"
            onClick={userPlay}
          ></button>
        </div>

        <div className={styles.score_container}>
          <div className={styles.score}>
            X (YOU)
            <span className={styles.score_value}>0</span>
          </div>
          <div className={styles.score}>
            TIES <span className={styles.ties_value}>0</span>
          </div>
          <div className={styles.score}>
            O (CPU) <span className={styles.cpu_score}>0</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
