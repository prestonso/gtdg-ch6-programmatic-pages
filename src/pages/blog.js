import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map( ({ node }) => (
      <div key={node.id}>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
        <p><em>{node.frontmatter.date}</em></p>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date(fromNow: true)
            title
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
