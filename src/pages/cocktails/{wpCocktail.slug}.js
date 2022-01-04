import * as React from "react";
import { graphql } from 'gatsby';
import * as styles from "./wpCocktail.module.css";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Cocktail = ({ data: { wpCocktail: { cocktailField } } }) => {

  const bannerFoto = getImage(cocktailField.bannerFoto.localFile.childImageSharp.gatsbyImageData)
  const picture = getImage(cocktailField.picture.localFile.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className={styles.container}>

        <div className={styles.sectionOneBigContainer}>
          <div className={styles.sectionOneSmallContainer}>

            <div className={styles.infoContainer}>
              <div className={styles.name}><h1>{cocktailField.name}</h1></div>
              <div className={styles.description}>{cocktailField.description}</div>
            </div>

            <div className={styles.imgContainer}>
              <GatsbyImage className={styles.bannerImg} image={bannerFoto} />
            </div>

          </div>
        </div>

        <div className={styles.sectionTowBigContainer}>
          <div className={styles.sectionTwoSmallContainer}>

            <div className={styles.ingredientsContainer}>
              <div className={styles.title}><h1>{cocktailField.ingredients.title}</h1></div>
              <ul className={styles.ingredients}>
                <li className={styles.ingredientGroup}> {cocktailField?.ingredients.ingredient1} </li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient2}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient3}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient4}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient5}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient6}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient7}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient8}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient9}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient10}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient11}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient12}</li>
                <li className={styles.ingredientGroup}>{cocktailField?.ingredients.ingredient13}</li>
              </ul>
              <div className={styles.title}><h1>{cocktailField.instructiontitle}</h1></div>
              <div className={styles.instructions}>{cocktailField.instructions}</div>
              <br/>
              <div className={styles.price}>Prijs: {cocktailField.price}€</div>
            </div>

            <div className={styles.imgContainer}>
              <GatsbyImage className={styles.picture} image={picture} />
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Cocktail;


export const query = graphql`
query($id: String) {
  wpCocktail(id: {eq: $id}) {
      cocktailField {
        bannerFoto {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        name
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ingredients {
          title
          ingredient1
          ingredient10
          ingredient11
          ingredient12
          ingredient13
          ingredient2
          ingredient3
          ingredient4
          ingredient5
          ingredient6
          ingredient7
          ingredient8
          ingredient9
          ingredient10
          ingredient11
          ingredient12
          ingredient13
        }
        instructiontitle
        instructions
        cocktailHistory {
          title
          history
          origin
        }
        price
      }
    }

}
`
