import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'

const TheTownSharing = ({ title, subtitle, description, options }) => {
  return (
    <section className="py-10 lg:py-20 bg-beige-light">
      <Grid className="container">
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          {title && (
            <h2 className="uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-6 lg:mb-8 text-green">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="font-modern-condensed-medium lg:text-3xl text-center text-green-dark">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="font-modern-condensed-black text-sm lg:text-3xl text-green text-center mb-6 lg:mb-8">
              {description}
            </p>
          )}
        </div>
        {options && options.length > 0 && (
          <ul className="col-span-full flex flex-wrap justify-center gap-5 lg:gap-10">
            {options.map((option, index) => (
              <li
                className="w-[28%] lg:w-[30%] flex flex-col items-center"
                key={`option-${index}`}
              >
                {option.image && (
                  <Image
                    className="w-[7.375rem] lg:w-[17.5rem] h-[6.125rem] lg:h-[17.5rem] object-contain mb-2 lg:mb-5"
                    {...option.image}
                  />
                )}
                {option.title && (
                  <h4 className="font-modern-condensed-bold text-xs lg:text-3xl text-green text-center">
                    {option.title}
                  </h4>
                )}
              </li>
            ))}
          </ul>
        )}
      </Grid>
    </section>
  )
}

export default TheTownSharing
