import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Bio />
      <article>
        <p>
          A View on Access was created in 2015 in conjunction with the Audio Description Association and from 2016 to June 2022 had a home on RNIB Connect. It was developed to create a better sense of access and inclusion in the arts and entertainment sector, that includes theatre, cinema, museums and galleries, attractions, conventions, events and sport for those blind and partially sighted - but also to provide an audio platform for other disabilities.
        </p>
        <p>
          Over the last 7 Years, <strong>A View on Access</strong> has gone from strength to strength, developing relationships with relevant companies, charities, venues and organisations in order to create better awareness of access and audio description.
        </p>
        <p>
          The project operates from a positive viewpoint to encourage communities to engage with the arts and events but also helps to improve services by feeding back any issues or problems and offering advice on how to fix them.
        </p>
        <p>
          <strong>A View on Access</strong> is produced and presented by <em>Tim Calvert</em> of <em>Calvert Creative Concepts</em> in collaboration with the Audio Description Association: Showcasing the best of entertainment, arts and culture around the UK from an accessible point of view; highlighting the audio description available and how inclusive content and venues are. This is presented in the form of an audio podcast feature. <a href="https://audioboom.com/channels/5082711/">Listen to Tim on <strong>Audioboom</strong></a>
        </p>
        <p>
          For information, to make a suggestion or to get involved email: <a href="mailto:aviewonaccess@gmail.com">aviewonaccess@gmail.com</a>
        </p>
      </article>
      <article>
        <h2>About Tim Calvert</h2>
        <p>
          <strong>A View on Access</strong> is presented and produced by <em>Tim Calvert</em> of <em>Calvert Creative Concepts</em>.
        </p>
        <p>
          Tim is a skilled consultant in access, inclusion and audio description, and is a highly qualified audio producer with a BA honours degree from Staffordshire University.
        </p>
        <p>
          Tim is Vice chair of the Audio description association, and sits on the UK Cinema Association working disability group and has worked with many companies and organisations to improve accessibility including ATG, Trafalgar Entertainment, Hampstead Theatre, Appetite Stoke, and The Independent Cinema Office.
        </p>
      </article>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `