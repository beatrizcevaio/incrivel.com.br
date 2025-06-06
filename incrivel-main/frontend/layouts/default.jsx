import React from 'react'

import Footer from '~/components/footer'
import Header from '~/components/header'

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Default
