import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./contact.module.css"
import { StaticImage } from "gatsby-plugin-image";



const Contact = ({ data: { wpPage: { contactPageField } } }) => {
  const contactImage = getImage(contactPageField.headerContact.picture.localFile);
  return (
    <Layout>
      <div className={styles.container}>

        <div className={styles.contactImg}>
          <GatsbyImage className={styles.img} image={contactImage} />
          <div className={styles.headerContainer}>
            <div>{contactPageField.headerContact.title}</div>
            <div>{contactPageField.headerContact.description}</div>
          </div>

          <div className={styles.contactInfo}>

            <div className={styles.companyInformation}>
              <div>{contactPageField.companyInformation.address}</div>
              <div>{contactPageField.companyInformation.city}</div>
              <div>{contactPageField.companyInformation.postcode}</div>
              <div><a href="tel:+4733378901">{contactPageField.companyInformation.phoneNumber}</a></div>
              <div><a href="mailto:moonlight-cocktails@hotmail.com">{contactPageField.companyInformation.email}</a></div>
            </div>

            <div className={styles.mapDiv}>
           <iframe className={styles.map} src={contactPageField.map} loading="lazy"></iframe>
            </div>

          </div>

        </div>
      </div>
    </Layout >
  )
}


export default Contact;

export const query = graphql`
query {
  wpPage(slug: {eq: "contact"})  {
  contactPageField {
    headerContact {
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      title
      description
    }
    companyInformation {
      city
      address
      postcode
      phoneNumber
      email
    }
    map
  }
}
}`