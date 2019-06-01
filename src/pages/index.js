import React from "react"
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

export default function Template({data, // this prop will be injected by the GraphQL query below.
  }) {
  const contents = data.bushel.master.tree.list_contents_recursively

  return (
    <Layout>
      <Helmet>
        <body className="blog" />
      </Helmet>

        <ul>
          {contents.map(({key, value}) => {
      return (
        <li><Link to={key}>{key}</Link></li>)
    })}
        </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
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
`
