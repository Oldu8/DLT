import React from "react";
import styles from "./MyButton.module.scss";
import Link from "next/link";

interface Props {
  link: string;
  name: string;
}

function MyButton({ link, name }: Props) {
  return (
    <Link href={link} className={styles.button}>
      {name}
    </Link>
  );
}

export default MyButton;
