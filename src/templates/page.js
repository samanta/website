import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

class PageTemplate extends React.Component {
  render() {

    const page = this.props.data.cosmicjsPages
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const location = get(this, 'props.location')

    return (
      <Layout location={location}>
        <style>
          {`
          .post-content {
            text-align: justify;
          }

        `}
        </style>
        <Helmet title={`${page.title} | ${siteTitle}`} />
        <h1
          style={{
            marginTop: rhythm(1),
          }}
        >
          {page.title}
        </h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    cosmicjsPages(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "MMMM DD, YYYY")
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
