/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'

const BreadedHero = ({ title }) => {
  return (
    <section className="relative h-[37.5rem] lg:h-[64rem] bg-beige-light flex items-center overflow-hidden">
      <img
        className="absolute top-8 lg:top-14 left-1/2 -translate-x-1/2 w-[16.5rem] lg:w-[31.25rem]"
        src="/images/breaded-hero1.png"
        alt=""
      />
      <img
        className="absolute hidden lg:block lg:bottom-14 lg:left-14 lg:w-[40rem] 2xl:w-[50.625rem]"
        src="/images/breaded-hero5.png"
        alt=""
      />
      <img
        className="absolute lg:hidden bottom-8 left-1/2 -translate-x-1/2 w-[21.875rem] md:w-[440px]"
        src="/images/breaded-hero7.png"
        alt=""
      />
      <img
        className="absolute hidden lg:block lg:top-[13.125rem] lg:left-14 2xl:left-20 w-[15.125rem]"
        src="/images/breaded-hero6.png"
        alt=""
      />
      <img
        className="absolute top-3 lg:top-[10rem] right-4 lg:right-[12.5rem] w-10 lg:w-[4.75rem]"
        src="/images/breaded-hero3.png"
        alt=""
      />
      <img
        className="absolute bottom-[320px] md:bottom-[350px] lg:bottom-14 translate-y-1/2 lg:translate-y-0 -right-20 lg:right-[6.5rem] 2xl:right-[18rem] w-[14.375rem] md:w-[20rem] lg:w-[26.25rem] 2xl:w-[29.25rem]"
        src="/images/breaded-hero2.png"
        alt=""
      />
      <img
        className="absolute top-[8.75rem] md:top-[2rem] lg:top-auto bottom-auto lg:bottom-14 md:left-10 lg:left-auto lg:right-8 2xl:right-20 w-12 sm:w-[8.75rem]"
        src="/images/breaded-hero4.png"
        alt=""
      />
      <Grid className="container">
        {title && (
          <h1 className="col-span-1 sm:col-span-6 md:col-span-7 lg:col-span-10 lg:col-start-2 text-sm md:text-lg lg:text-[2.125rem] lg:text-center text-green-dark font-modern-condensed-medium !leading-tight">
            {title}
          </h1>
        )}
      </Grid>
    </section>
  )
}

export default BreadedHero
