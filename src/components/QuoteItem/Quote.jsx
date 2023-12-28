import React, { useEffect, useState } from "react";
import styles from "./Quote.module.css";
import axios from "axios";
const Quote = () => {
  // Api Call to get Quote
  const url = "https://api.adviceslip.com/advice";
  let [data, setData] = useState({
    id: 1,
    advice: "Loading...",
  });
  async function getQuote() {
    try {
      let response = await axios.get(url);
      setData(response.data.slip);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (data.id === 1) {
      getQuote();
    } else {
      setTimeout(() => {
        getQuote();
      }, 30000);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div>
        <h2>Quote #{data.id}</h2>
        <div className={styles.advice}>
          <p>{data.advice}</p>
        </div>
        <span>
          <img src="/src/assets/icons/quote_icon.svg" alt="Error"></img>
        </span>
      </div>
    </div>
  );
};

export default Quote;
