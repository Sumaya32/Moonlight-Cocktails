import * as React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./about.module.css";


const About = ({ data: { wpPage: { aboutPageField } } }) => {
  const picture1 = getImage(aboutPageField.picture1.localFile);
  const picture2 = getImage(aboutPageField.picture2.localFile);
  const picture3 = getImage(aboutPageField.picture3.localFile);
  const picture4 = getImage(aboutPageField.picture4.localFile);
  return (
    <Layout>
      <div className={styles.underlineDiv}><div className={styles.underline}></div></div>

      <div className={styles.container} >
        <div className={styles.textDiv}>
          <h1 className={styles.h1Text}>{aboutPageField.title}</h1>
          <p className={styles.text}>{aboutPageField.discription}</p>
        </div>

        <div className={styles.imgGroup}>
          <GatsbyImage className={styles.img} image={picture1} />
          <GatsbyImage className={styles.img} image={picture2} />
          <GatsbyImage className={styles.img} image={picture3} />
          <GatsbyImage className={styles.img} image={picture4} />
        </div>

      </div>
    </Layout >
  )
}


export const query = graphql`
query  {
wpPage(slug: {eq: "about"}) {
  aboutPageField {
    title
    discription
    picture1 {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    picture2 {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    picture3 {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    picture4 {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}}`

export default About;
