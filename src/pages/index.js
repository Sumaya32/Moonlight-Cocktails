import * as React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import CocktailsElement from "../components/cocktailsElement/cocktailsElement";
import * as styles from "./home.module.css";


const IndexPage = ({ data: { wpPage: { homePageField } } }) => {

  //const headerImage = getImage(homePageField.header.bannerFoto.localFile);
  /*
  
            <h1 className={styles.featuresTitle}>{homePageField.classicCocktails.title}</h1>
            <div className={styles.featuresDescription}>{homePageField.classicCocktails.description}</div><br />
            <div className={styles.smallContainer}>
              {homePageField.classicCocktails.cocktails.map((item) =>
                <CocktailsElement
                  slug={`cocktails/${item.slug}`}
                  cocktail={item}
                />
              )}
            </div>
          </div>
  
  
          <div className={styles.bigContainer}>
            <h1 className={styles.featuresTitle}>{homePageField.latestCocktails.title}</h1>
            <div className={styles.featuresDescription}>{homePageField.latestCocktails.description}</div><br />
            <div className={styles.smallContainer}>
              {homePageField.latestCocktails.cocktails.map((item) =>
                <CocktailsElement
                  slug={`cocktails/${item.slug}`}
                  cocktail={item}
                />
              )}
            </div>
          </div>
  
          <div className={styles.bigContainer}>
            <h1 className={styles.featuresTitle}>{homePageField.top5Cocktails.title}</h1>
            <div className={styles.featuresDescription}>{homePageField.top5Cocktails.description}</div><br />
  
            <div className={styles.smallContainer}>
              {homePageField.top5Cocktails.cocktails.map((item) =>
                <CocktailsElement
                  slug={`cocktails/${item.slug}`}
                  cocktail={item}
                />
              )}
            </div>
          </div>
  
  */

  return (
    <Layout>
      <div className={styles.container}>

        <div className={styles.headerContainer}>
          <h1>{homePageField.header.title}</h1>
          <div className={styles.headerDescription}>{homePageField.header.description}</div>
        </div>

        <div className={styles.bigContainer}>
          {[homePageField.classicCocktails, homePageField.latestCocktails, homePageField.top5Cocktails].map(headTitle =>
            <div className={styles.bigContainer}>

              <h1 className={styles.featuresTitle}>{headTitle.title}</h1>
              <div className={styles.featuresDescription}>{headTitle.description}</div><br />

              <div className={styles.smallContainer}>
                {headTitle.cocktails.map((item) =>

                  <CocktailsElement
                    slug={`cocktails/${item.slug}`}
                    cocktail={item}
                  />
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </Layout >
  )
}

export const query = graphql`
query {
    wpPage(slug: {eq: "home"}) {
    homePageField {
      header {
        title
        description
        bannerFoto {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      classicCocktails {
        title
        description
        cocktails {
          ... on WpCocktail {
            id
            cocktailField {
              name
              bannerFoto {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            slug
          }
        }
      }
      latestCocktails {
        title
        description
        cocktails {
          ... on WpCocktail {
            id
            cocktailField {
              name
              bannerFoto {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            slug
          }
        }
      }
   top5Cocktails {
        title
        description
        cocktails {
          ... on WpCocktail {
            id
            cocktailField {
              name
              bannerFoto {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
             slug
          }
        }
      }

    }
  }
}
`

export default IndexPage
