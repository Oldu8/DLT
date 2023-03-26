import React, { useState } from "react";
import RightNav from "../RightNav/RightNav";
import styles from "./Burger.module.scss";

function Burger() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className={styles.burgerWrap} onClick={() => setisOpen(!isOpen)}>
        <div className={!isOpen ? styles.burgerItem : styles.burgerItemOpen} />
        <div className={!isOpen ? styles.burgerItem : styles.burgerItemOpen} />
        <div className={!isOpen ? styles.burgerItem : styles.burgerItemOpen} />
      </div>
      <RightNav isOpen={isOpen} />
    </>
  );
}

export default Burger;
