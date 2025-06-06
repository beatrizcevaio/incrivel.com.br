import classNames from 'classnames'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState } from 'react'

import Contexts from '~/contexts/index'

NProgress.configure({ showSpinner: false })

const Main = ({ children }) => {
  const [isLoadingPage, setIsLoadingPage] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setIsLoadingPage(true)
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    setIsLoadingPage(false)
    NProgress.done()
  })

  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <Contexts>
      <div
        className={classNames(
          'fixed inset-0 z-[1000] bg-white bg-opacity-10 transition-all duration-200 ease-in-out',
          {
            'invisible opacity-0': !isLoadingPage,
          }
        )}
      />
      {children}
    </Contexts>
  )
}

export default Main
