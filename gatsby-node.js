const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create the blog posts' index page.
  const indexPage = path.resolve('./src/pages/index.js')
  createPage({
    path: `posts`,
    component: indexPage,
  })

  const objectTypes = [
    {
      template: 'blog-post.js',
      urlPrefix: 'posts/',
      query: 'allCosmicjsPosts'
    }, {
      template: 'page.js',
      urlPrefix: '',
      query: 'allCosmicjsPages'
    }
  ]

  return Promise.all(objectTypes.map(function (objectType) {
    return new Promise((resolve, reject) => {
      // Fetch the object types' content.
      const content = path.resolve(`./src/templates/${objectType.template}`)
      resolve(
        graphql(
          `
            {
              ${objectType.query}(sort: { fields: [created], order: DESC }, limit: 1000) {
                edges {
                  node {
                    slug,
                    title
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          // Create the object types' pages.
          const pages = result.data[objectType.query].edges;
          each(pages, (page, index) => {
            const next = index === pages.length - 1 ? null : pages[index + 1].node;
            const previous = index === 0 ? null : pages[index - 1].node;

            // Finally, create the page.
            createPage({
              path: `${objectType.urlPrefix}${page.node.slug}`,
              component: content,
              context: {
                slug: page.node.slug,
                previous,
                next,
              },
            })
          })
        })
      )
    })
  }));
}
