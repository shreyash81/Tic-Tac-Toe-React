import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Game.module.css";
import toast, { Toaster } from "react-hot-toast";
import Win from "../WinItem/Win";


const Game = ({ player, setPage, setPlayer }) => {
  const userSelection = player;
  let pcSelection = player === "big_zero.svg" ? "big_x.svg" : "big_zero.svg";
  let changeTurn = useRef(null);
  const buttons = useRef(null);
  const refreshBtn = useRef(null);
  // let [userScore, setUserScore] = useState(0);
  // let [pcScore, setPcScore] = useState(0);
  // let [ties, setTies] = useState(0);
  let [whowins, setWhowins] = useState("");
  let [nextRound, setNextRound] = useState(false);
  let [xzero, setXzero] = useState(userSelection);
    
    // localStorage.setItem("cpuScore",0)
 
  let [gameArr, setGameARR] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);

  function refreshGame() {
    console.log("refresh");
    setGameARR([
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ])
    refreshBtn.current.style.display = "none";
    // setPcScore(0);
    // setUserScore(0);
    // setTies(0);
    setWhowins("");
    localStorage.setItem('cpuScore',0)
    localStorage.setItem('tiesScore',0)
    localStorage.setItem('userScore',0)
    setTimeout(() => {
      removeStyles();
      enablesButtons()
    }, 700);
  }

  function removeStyles() {
    for (let i = 0; i < 9; i++) {
      buttons.current.children[i].innerHTML = "";
    }
  }

  function homeScreen() {
    // setPcScore(0);
    // setUserScore(0);
    // setTies(0);
    localStorage.setItem('cpuScore',0)
    localStorage.setItem('tiesScore',0)
    localStorage.setItem('userScore',0)
    refreshGame();
    setPage(1);
    setPlayer("");
  }

  function disableButtons() {
    for (let i = 0; i < 9; i++) {
      buttons.current.children[i].disabled = true;
    }
  }

  function enablesButtons() {
    for (let i = 0; i < 9; i++) {
      buttons.current.children[i].disabled = false;
    }
  }


  useMemo(() => {
    // enablesButtons();
    if (nextRound == true) {
      setGameARR([
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ]);
      setWhowins("");
      removeStyles();
      refreshBtn.current.style.display = "none";
      enablesButtons();
      setNextRound(false); 
    }


  }, [nextRound]);

  // useMemo(()=>{
  //   localStorage.setItem("cpuScore",pcScore)
  // },[pcScore])
  // useMemo(()=>{
  //   localStorage.setItem("userScore",userScore)
  // },[userScore])
  // useMemo(()=>{
  //   localStorage.setItem("ties",ties)
  // },[ties])

  useEffect(() => {
    if (userSelection === "big_zero.svg") {
      changeTurn.current.innerHTML = `<img src='/assets/icons/game_zero.svg' alt='X'/>`;
    } 
  }, []);
  const tiesLogic = () => {
    if (
      gameArr[0] !== "empty" &&
      gameArr[1] !== "empty" &&
      gameArr[2] !== "empty" &&
      gameArr[3] !== "empty" &&
      gameArr[4] !== "empty" &&
      gameArr[5] !== "empty" &&
      gameArr[6] !== "empty" &&
      gameArr[7] !== "empty" &&
      gameArr[8] !== "empty"
    ) {
      setGameARR([
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ]);
      setWhowins("ties");
      // setTies(ties + 1);
      setXzero("noOne");
      let temp = localStorage.getItem('tiesScore')
      temp = Number(temp)+1
      console.log(temp)
       localStorage.setItem('tiesScore',temp)
    }
  };
  const userWinLogic = (e) => {
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
      (gameArr[2] === "user" && gameArr[4] === "user" && gameArr[6] === "user")
    ) {
      // setGameARR([
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      //   "empty",
      // ]);
      setXzero(userSelection);
      disableButtons();
      setWhowins("user");
      // setUserScore(userScore + 1);
       let temp = localStorage.getItem('userScore')
       temp = Number(temp)+1
       console.log(temp)
        localStorage.setItem('userScore',temp)
    }
  };

  const pcWinLogic = () => {
    if (
      (gameArr[0] === "cpu" && gameArr[1] === "cpu" && gameArr[2] === "cpu") ||
      (gameArr[3] === "cpu" && gameArr[4] === "cpu" && gameArr[5] === "cpu") ||
      (gameArr[6] === "cpu" && gameArr[7] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" && gameArr[3] === "cpu" && gameArr[6] === "cpu") ||
      (gameArr[1] === "cpu" && gameArr[4] === "cpu" && gameArr[7] === "cpu") ||
      (gameArr[2] === "cpu" && gameArr[5] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" && gameArr[4] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[2] === "cpu" && gameArr[4] === "cpu" && gameArr[6] === "cpu")
    ) {
      setGameARR([
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ]);
      setXzero(pcSelection);
      setWhowins("pc");
      // setPcScore(pcScore + 1);
      let temp = localStorage.getItem('cpuScore')
      temp = Number(temp)+1
      console.log(temp)
       localStorage.setItem('cpuScore',temp)

    }
  };
  function pcPlay() {
    disableButtons();
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
      (gameArr[2] === "user" && gameArr[4] === "user" && gameArr[6] === "user")
    ) {
      return;
    }
    setTimeout(() => {
      let randomBtn = Math.floor(Math.random() * 9);
      if (gameArr[randomBtn] === "empty") {
        gameArr[randomBtn] = "cpu";
        buttons.current.children[
          randomBtn
        ].innerHTML = `<img src=/assets/icons/${pcSelection} alt="0"/>`;
        pcWinLogic();
        if (userSelection === "big_zero.svg") {
          changeTurn.current.innerHTML = `<img src='/assets/icons/game_zero.svg' alt='X'/>`;
        } else {
          changeTurn.current.innerHTML = `<img src='/assets/icons/game_cross.svg' alt='X'/>`;
        }
      } else {
        pcPlay();
      }
      setTimeout(() => {
        enablesButtons();
      }, 800);
    }, 600);
  }

  const userPlay = (e) => {
    if (
      (gameArr[0] === "cpu" && gameArr[1] === "cpu" && gameArr[2] === "cpu") ||
      (gameArr[3] === "cpu" && gameArr[4] === "cpu" && gameArr[5] === "cpu") ||
      (gameArr[6] === "cpu" && gameArr[7] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" && gameArr[3] === "cpu" && gameArr[6] === "cpu") ||
      (gameArr[1] === "cpu" && gameArr[4] === "cpu" && gameArr[7] === "cpu") ||
      (gameArr[2] === "cpu" && gameArr[5] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[0] === "cpu" && gameArr[4] === "cpu" && gameArr[8] === "cpu") ||
      (gameArr[2] === "cpu" && gameArr[4] === "cpu" && gameArr[6] === "cpu")
    ) {
      return;
    }
    if (gameArr[e.target.id] === "empty") {
      refreshBtn.current.style.display = "block";
      e.target.innerHTML = `<img src='/assets/icons/${userSelection}' alt='X'/>`;
      gameArr[e.target.id] = "user";
      if (userSelection === "big_zero.svg") {
        changeTurn.current.innerHTML = `<img src='/assets/icons/game_cross.svg' alt='X'/>`;
      } else {
        changeTurn.current.innerHTML = `<img src='/assets/icons/game_zero.svg' alt='X'/>`;
      }
      pcPlay();
      userWinLogic();
      tiesLogic();
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
      {whowins === "user" ? (
        <Win
          result="You Win !"
          nextRound={nextRound}
          setNextRound={setNextRound}
          homeScreen={homeScreen}
          xZero={xzero}
        />
      ) : (
        ""
      )}
      {whowins === "pc" ? (
        <Win
          result="Cpu Wins !"
          nextRound={nextRound}
          setNextRound={setNextRound}
          homeScreen={homeScreen}
          xZero={xzero}
        />
      ) : (
        ""
      )}
      {whowins === "ties" ? (
        <Win
          result="Game Ties !"
          nextRound={nextRound}
          setNextRound={setNextRound}
          homeScreen={homeScreen}
          xZero={xzero}
        />
      ) : (
        ""
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.icons}>
            <img src="/assets/icons/cross.svg" alt="X"/>
            &nbsp;
            <img src="/assets/icons/zero.svg" alt="0" />
          </div>
          <div className={styles.turn_container}>
            <span className={styles.game_cross} ref={changeTurn}>
              <img src="/assets/icons/game_cross.svg" alt="X" />
            </span>
            <span className={styles.text}>TURN</span>
          </div>
          <button
            className={styles.refresh_btn}
            onClick={refreshGame}
            ref={refreshBtn}
          >
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
            <span className={styles.score_value}>{localStorage.getItem('userScore')}</span>
          </div>
          <div className={styles.score}>
            TIES <span className={styles.ties_value}>{localStorage.getItem('tiesScore')}</span>
          </div>
          <div className={styles.score}>
            O (CPU) <span className={styles.cpu_score}>{localStorage.getItem('cpuScore')}</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
