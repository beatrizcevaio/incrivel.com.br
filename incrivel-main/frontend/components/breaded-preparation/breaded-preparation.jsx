/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'

const BreadedPreparation = ({ content, title, description, images }) => {
  return (
    <section className="relative py-10 lg:pb-20">
      <img
        className="absolute -top-10 md:-top-[6.25rem] lg:-top-[8.75rem] right-6 lg:right-20 2xl:right-28 w-[9.375rem] lg:w-[18.75rem] 2xl:w-[26.375rem]"
        src="/images/breaded-prep2.png"
        alt=""
      />
      <picture className="container block md:flex md:justify-center lg:justify-start pb-5">
        <img
          className="md:hidden w-1/2"
          src="/images/breaded-prep5.png"
          alt=""
        />
        <img
          className="hidden md:block w-[70%] lg:w-[40%] lg:ml-20 2xl:ml-0 2xl:w-[50%]"
          src="/images/breaded-prep4.png"
          alt=""
        />
      </picture>
      <Grid className="container">
        <img
          className="col-span-full lg:col-span-6 w-[14.375rem] md:w-[25rem] lg:w-auto lg:h-[28.625rem] 2xl:h-auto m-auto mb-5 md:mb-10 lg:m-0"
          src="/images/breaded-prep1.png"
          alt=""
        />
        {content && (
          <p className="col-span-full lg:col-span-6 text-sm md:text-lg lg:text-[2.125rem] text-center lg:text-left text-green-dark font-modern-condensed-medium !leading-tight flex flex-col justify-center">
            {content}
          </p>
        )}
      </Grid>
      <picture className="container block mt-5">
        <img className="w-full" src="/images/breaded-prep3.png" alt="" />
      </picture>
      <Grid className="container pt-10 lg:pt-14">
        <div className="col-span-full lg:col-span-10 lg:col-start-2 text-center">
          {title && (
            <h3 className="text-3xl lg:text-5xl text-green font-modern-condensed-black uppercase !leading-tight pb-3 md:pb-5 lg:pb-10">
              {title}
            </h3>
          )}
          {description && (
            <p className="col-span-full text-sm md:text-lg lg:text-[2.125rem] text-center text-green-dark font-modern-condensed-medium !leading-tight">
              {description}
            </p>
          )}
        </div>
        {images && images.length > 0 && (
          <ul className="col-span-full flex justify-between pt-5 lg:pt-14">
            {images.map((image, index) => (
              <li className="w-[28%]" key={`image-${index}`}>
                <Image className="w-full" {...image.imagem} />
              </li>
            ))}
          </ul>
        )}
      </Grid>
    </section>
  )
}

export default BreadedPreparation
