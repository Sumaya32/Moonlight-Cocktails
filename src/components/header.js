import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.css"

const Header = () => (
  <header className={styles.headerContainer} >
      <a className={styles.imgLogo} href="/"> <img className={styles.logo} src="/logo1.png"></img></a>
        <Link to="/" className={styles.item} >Home</Link>
        <Link to="/cocktails" className={styles.item}>Cocktails</Link>
        <Link to="/about" className={styles.item}>About</Link>
        <Link to="/contact" className={styles.item}>Contact</Link>
  </header>
)

export default Header;
