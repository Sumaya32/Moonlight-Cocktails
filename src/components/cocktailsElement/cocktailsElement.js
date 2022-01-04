import React from "react"
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./cocktailsElement.module.css";



export const CocktailsElement = ({ cocktail, slug }) => {
  const bannerFoto = getImage(cocktail.cocktailField.bannerFoto.localFile)

  return (
    <Link to={slug} >
         <div className={styles.text}> {cocktail.cocktailField.name}</div>
        <div className={styles.imgDiv}> <GatsbyImage className={styles.img} image={bannerFoto} /> </div> <br />
    </Link>
  )}
export default CocktailsElement;