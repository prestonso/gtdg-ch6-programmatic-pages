/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`)
}
