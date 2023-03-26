import React from "react";
import MyButton from "../MyButton/MyButton";
import styles from "./RightNav.module.scss";

interface Props {
  isOpen: boolean;
}

function RightNav({ isOpen }: Props) {
  return (
    <nav className={styles.nav + (isOpen ? " " + styles.open : "")}>
      <MyButton link="/" name="Home" />
      <MyButton link="/tests" name="Tests" />
      <MyButton link="/rules" name="Rules" />
      <MyButton link="/result" name="Results" />
      <MyButton link="/info" name="General Info" />
    </nav>
  );
}

export default RightNav;
