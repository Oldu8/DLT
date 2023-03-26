import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.wrap}>
      <a href={"https://oleh-dudko.netlify.app/"} className={styles.content}>
        <p className={styles.name}>Made by Oleh Dudko</p>
      </a>
    </footer>
  );
}

export default Footer;
