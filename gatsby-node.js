"use strict"

const path = require("path")

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const bushelContentTemplate = path.resolve(`src/templates/bushel_content.js`)

  graphql(`
    {
      bushel {
        master {
          tree {
            list_contents_recursively {
              key
              value
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.bushel.master.tree.list_contents_recursively.forEach((contents) => {
      createPage({
        path: contents.key,
        component: bushelContentTemplate,
        context: contents
      })
    })
  })
}
