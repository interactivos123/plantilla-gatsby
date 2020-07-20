// const React = require('react')
// const Layout = require('./src/components/Layout').default

import React from 'react'
import TopLayout from './TopLayout'

// exports.wrapRootElement = ({ element }) => (
//   <Layout>
//     {element}
//   </Layout>
// )

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
