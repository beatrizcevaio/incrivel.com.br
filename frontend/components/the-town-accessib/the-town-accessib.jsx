import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'

const TheTownAccessib = ({ title, description }) => {
  return (
    <section className="relative pt-10 pb-16 lg:py-20 bg-green overflow-hidden">
      <Image
        src="/images/hang-loose-hand.svg"
        width={1200}
        height={1200}
        alt="hang-loose-hand-icon"
        className="absolute -bottom-3 lg:bottom-10 -left-5 lg:-left-20 w-[6.875rem] lg:w-[20.625rem] h-[5.25rem] lg:h-[15.5rem]"
      />
      <Image
        src="/images/rock-hand.svg"
        width={1200}
        height={1200}
        alt="rock-hand-icon"
        className="absolute -bottom-10 right-6 w-[3.25rem] lg:w-[9.75rem] h-[7.125rem] lg:h-[21.375rem]"
      />
      <Grid className="container">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          {title && (
            <h2 className="uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-6 lg:mb-8 text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-modern-condensed-medium lg:text-3xl text-center text-beige lg:px-8">
              {description}
            </p>
          )}
        </div>
      </Grid>
    </section>
  )
}

export default TheTownAccessib
