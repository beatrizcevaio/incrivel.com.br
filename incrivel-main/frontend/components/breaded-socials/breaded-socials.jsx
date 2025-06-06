/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Grid from '~/components/grid'
// import Link from '~/components/link'

// import Image from '../image'

const BreadedSocials = ({ description }) => {
  return (
    <section className="relative bg-green overflow-hidden py-10 lg:py-20">
      <Grid className="container relative">
        <div className="col-span-full mb-5 md:mb-10 2xl:mb-20">
          {description && (
            <p className="w-full lg:w-1/2 text-sm md:text-lg lg:text-[2.125rem] text-center lg:text-left text-beige-light font-modern-condensed-medium !leading-tight">
              {description}
            </p>
          )}
        </div>
        <picture className="col-span-full mb-5 md:mb-10 2xl:mb-20">
          <img
            className="w-[17.5rem] md:w-1/2 lg:w-[40%] mx-auto lg:ml-14 lg:mr-0"
            src="/images/breaded-socials1.png"
            alt=""
          />
        </picture>
        <picture className="lg:absolute lg:top-0 lg:right-0 lg:pt-20 col-span-full lg:w-[40%] pb-5">
          <img
            className="w-[17.5rem] md:w-1/2 lg:w-full mx-auto lg:mx-0"
            src="/images/breaded-socials2.png"
            alt=""
          />
        </picture>
        {/* {socials && (
          <div className="col-span-full flex justify-center">
            <ul className="flex gap-x-5 lg:gap-x-10 border-t-4 border-green-dark pt-5 lg:pt-10 sm:px-10 lg:px-20">
              {socials.map((social, index) => (
                <li key={`social-${index}`}>
                  {social.url && (
                    <Link
                      className="block w-10 lg:w-14 h-10 lg:h-14 hover:opacity-70 duration-200"
                      href={social.url}
                    >
                      {social.icon && (
                        <Image
                          className="w-full object-contain"
                          {...social.icon}
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </Grid>
    </section>
  )
}

export default BreadedSocials
