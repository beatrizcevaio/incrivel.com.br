import React from 'react'

import Grid from '~/components/grid'
import LocationIcon from '~/icons/location.svg'

const CloseToMeSingle = () => {
  return (
    <section className="lg:pt-10 lg:pb-20">
      <Grid className="lg:container">
        <div className="px-[34px] md:px-[70px] lg:px-0 col-span-full flex flex-col items-center space-y-5 mb-5 lg:mb-10">
          <div className="relative text-green">
            <LocationIcon className="absolute top-[10%] left-0 w-[22px] h-[18px]" />
            <h3 className="styled-heading heading-2xl font-semibold pl-7">
              Onde encontrar
            </h3>
          </div>
        </div>
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          <iframe
            title="This is a unique title"
            id="gofind-iframe"
            frameBorder="0"
            src="https://incrivel.pertinhodemim.com"
            width="100%"
            className="min-h-[730px] lg:min-h-[500px] lg:rounded-lg"
            allow="geolocation"
          />
        </div>
      </Grid>
    </section>
  )
}

export default CloseToMeSingle
