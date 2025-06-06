/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'

const BreadedIntroduction = ({ content }) => {
  return (
    <section className="relative lg:h-[53.125rem] bg-green overflow-hidden py-10 lg:py-20">
      <Grid className="container">
        {content && (
          <div
            className="col-span-full lg:col-span-6 lg:col-start-7 text-sm md:text-lg lg:text-[2.125rem] text-center lg:text-right text-beige-light font-modern-condensed-medium !leading-tight prose"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )}
      </Grid>
      <picture className="lg:absolute lg:top-[10rem] 2xl:top-16 lg:left-20 2xl:left-32 w-full lg:w-fit flex justify-center pt-5 lg:pt-0">
        <img
          className="w-[20.625rem] md:w-[32rem] 1.5xl:w-[42.5rem]"
          src="/images/breaded-intro1.png"
          alt=""
        />
      </picture>
      <picture className="lg:absolute lg:bottom-10 lg:left-20 2xl:left-32 w-full lg:w-fit flex justify-center pt-5 lg:pt-0">
        <img
          className="lg:hidden w-[15.375rem] md:w-[25rem]"
          src="/images/breaded-intro2.png"
          alt=""
        />
        <img
          className="hidden lg:block lg:w-[37.5rem] 2xl:w-[50.625rem]"
          src="/images/breaded-intro3.png"
          alt=""
        />
      </picture>
    </section>
  )
}

export default BreadedIntroduction
