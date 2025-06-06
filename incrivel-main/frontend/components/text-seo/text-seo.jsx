import React from 'react'

import Grid from '~/components/grid'

const TextSeo = ({ text }) => {
  return (
    <section className="bg-beige-light py-10 lg:py-[48px]">
      <Grid className="container">
        <div
          className="col-span-full lg:col-span-6 lg:col-start-4 font-lato-regular text-gray-dark lg:text-center text-xs lg:text-base space-y-4"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Grid>
    </section>
  )
}

export default TextSeo
