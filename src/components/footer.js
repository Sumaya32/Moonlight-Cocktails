import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.css"
import { StaticImage } from "gatsby-plugin-image";




const Footer = () => (
  <footer className={styles.footerContainer} >
    <div className={styles.socialsContainer} > 
        <Link to="https://www.facebook.com" target="_blank" className={styles.item}> <StaticImage className={styles.img} className={styles.face}  src="../images/facebook.png"></StaticImage> </Link>
        <Link to="https://twitter.com" target="_blank"  className={styles.item}> <StaticImage className={styles.img} className={styles.twitt} src="../images/twitter.png"></StaticImage> </Link>
        <Link to="https://www.pinterest.com" target="_blank" className={styles.item} > <StaticImage className={styles.img}  src="../images/Pinterest.png"></StaticImage> </Link>   
        <Link to="https://www.instagram.com" target="_blank"  className={styles.item} > <StaticImage className={styles.img} className={styles.insta} src="../images/instagram.png"></StaticImage> </Link>  
        </div> 
        <div className={styles.copyright} >© Moonlight-Cocktails  2022</div> 
  </footer>
)


export default Footer;
