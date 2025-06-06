/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'

const BreadedCampaign = ({ title, subtitle, contentOne, contentTwo }) => {
  return (
    <section className="relative bg-beige-light overflow-hidden py-10 lg:py-20">
      <Grid className="container">
        <div className="col-span-full lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4 text-center">
          {title && (
            <h3 className="text-3xl lg:text-5xl text-green font-modern-condensed-black uppercase !leading-tight pb-3 md:pb-5 lg:pb-10">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="col-span-full text-sm md:text-lg lg:text-[2.125rem] text-center text-green-dark font-modern-condensed-medium !leading-tight">
              {subtitle}
            </p>
          )}
        </div>
        {contentOne && (
          <div className="col-span-full flex justify-between py-10 lg:pt-20">
            <div
              className="w-[60%] lg:w-1/2 text-sm md:text-lg lg:text-[2.125rem]  text-green-dark font-modern-condensed-medium !leading-tight prose"
              dangerouslySetInnerHTML={{
                __html: contentOne,
              }}
            />
            <img
              className="w-[40%] object-contain"
              src="/images/breaded-campaign1.png"
              alt=""
            />
          </div>
        )}
        {contentTwo && (
          <div className="col-span-full flex justify-end">
            <div
              className="w-[60%] lg:w-1/2 text-sm md:text-lg lg:text-[2.125rem] text-green-dark font-modern-condensed-medium !leading-tight prose"
              dangerouslySetInnerHTML={{
                __html: contentTwo,
              }}
            />
          </div>
        )}
      </Grid>
      <picture className="absolute bottom-10 md:-bottom-10 lg:!bottom-20 -left-1/4 md:-left-[12.5rem] lg:-left-[6.25rem] -rotate-12">
        <img
          className="w-[13.75rem] md:w-[32rem] 1.5xl:w-[46.25rem]"
          src="/images/breaded-campaign2.png"
          alt=""
        />
      </picture>
    </section>
  )
}

export default BreadedCampaign
