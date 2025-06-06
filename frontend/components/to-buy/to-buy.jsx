import classNames from 'classnames'
import Script from 'next/script'
import React from 'react'

import Grid from '~/components/grid'

const ToBuy = ({ bgColor }) => {
  return (
    <section className={classNames('!mt-0', { [`bg-${bgColor}`]: bgColor })}>
      <Grid className="container">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          <div className="lett-2buy-inline" data-hash="CUgmK2hb8d5EFwHD" />
        </div>
        <Script
          src="https://lett.2buycdn.com/embed/v1/plugin.js"
          defer
        ></Script>
      </Grid>
    </section>
  )
}

export default ToBuy
