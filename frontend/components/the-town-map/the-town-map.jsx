import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'
import Panes from '~/public/images/map-pane.svg'

const TheTownMap = ({ title, image }) => {
  return (
    <section className="relative py-10 lg:py-20 bg-green-dark overflow-hidden">
      <Panes className="absolute -bottom-12 lg:-bottom-[10.5rem] left-5 lg:left-20 2xl:left-[10rem] w-[5.875rem] lg:w-[20.125rem] h-[14.75rem] lg:h-[50.375rem]" />
      <Grid className="container">
        {title && (
          <h2 className="col-span-full lg:col-span-8 lg:col-start-3 uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-10 lg:mb-16 text-beige">
            {title}
          </h2>
        )}
        {image && (
          <Image
            className="col-span-full lg:col-span-8 lg:col-start-5"
            {...image}
          />
        )}
      </Grid>
    </section>
  )
}

export default TheTownMap
