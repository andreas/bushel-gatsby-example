import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

export default function Template({pageContext}) {
  const {value} = pageContext

  return (
    <Layout>
      <Helmet>
        <body className="blog" />
      </Helmet>

      <div class="wrapper">
        <pre dangerouslySetInnerHTML={{
      __html: value
    }} />
      </div>
    </Layout>
  )
}
