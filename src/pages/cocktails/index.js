import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from 'gatsby';
import CocktailsElement from "../../components/cocktailsElement/cocktailsElement";
import * as styles from "./cocktailsPage.module.css";


const Cocktails = ({ data: { allWpCocktail: { edges } } }) => {

  return (
    <Layout>
      <div className={styles.container} >
      <div className={styles.underlineDiv} ><span className={styles.underline}></span></div>
       <div className={styles.bigContainer}>
      <div className={styles.smallContainerCocktailPage}>
      {edges.map(({node}) =>
        <CocktailsElement
        slug={`${node.slug}`}
        cocktail={node}
      />
      )}
      </div>
      </div>
      </div>
    </Layout>
  )


}


export const query = graphql`
query  {
  allWpCocktail {
    edges {
      node {
        cocktailField {
          bannerFoto {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          name
        }
        slug
      }
    }
  }
}
`

export default Cocktails;
