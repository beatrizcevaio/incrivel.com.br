/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'

const BreadedVideo = ({ videourl }) => {
  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py-20">
      <Grid className="container">
        {videourl && (
          <iframe
            width="560"
            height="315"
            className="col-span-full w-full focus:outline-none lg:h-[30rem] 2xl:h-[35rem]"
            src={videourl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </Grid>
    </section>
  )
}

export default BreadedVideo
