import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FileListPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="File list" />
      <h1>Hi from the file list page</h1>
      <p>Welcome to the file list page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          birthTime(fromNow: true)
          modifiedTime(fromNow: true)
          extension
          prettySize
        }
      }
    }
  }
`

export default FileListPage
