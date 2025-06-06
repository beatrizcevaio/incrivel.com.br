import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'
import Hotdog from '~/public/images/dog-e-empanado-incrivel.svg'
import Leaf from '~/public/images/leaf-hundred.svg'
import Taco from '~/public/images/taco-e-kibe-incrivel.svg'

const TheTownMenu = ({ title, description, options }) => {
  return (
    <section className="relative py-10 lg:py-20 bg-beige-light">
      <Leaf className="absolute top-2 lg:top-8 -right-2 lg:right-8 w-[8.75rem] lg:w-[16.625rem] h-[3.375rem] lg:h-[8.5rem]" />
      <Hotdog className="absolute bottom-10 -left-10 lg:-left-24 w-[6.875rem] lg:w-[17.75rem] h-[6.75rem] lg:h-[17.125rem]" />
      <Taco className="absolute bottom-10 -right-10 lg:-right-20 w-[6.875rem] lg:w-[17.75rem] h-[6.75rem] lg:h-[17.125rem]" />
      <Grid className="container">
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          {title && (
            <h2 className="uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-6 lg:mb-8 text-green">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-modern-condensed-medium lg:text-3xl text-center text-green-dark mb-6 lg:mb-8 lg:px-8">
              {description}
            </p>
          )}
        </div>
        {options && options.length > 0 && (
          <ul className="col-span-full flex flex-wrap justify-center gap-5 lg:gap-10">
            {options.map((option, index) => (
              <li
                className="w-[44%] lg:w-[30%] lg:min-h-[28.375rem] p-4 lg:p-6 bg-green flex flex-col items-center"
                key={`option-${index}`}
              >
                {option.image && (
                  <picture className="bg-white w-[4.5rem] lg:w-[11.5rem] h-[4.5rem] lg:h-[11.5rem] flex items-center justify-center rounded-full mb-3">
                    <Image
                      className="max-w-16 lg:max-w-[10.375rem] max-h-14 lg:max-h-[9.125rem]"
                      {...option.image}
                    />
                  </picture>
                )}
                {option.title && (
                  <h4 className="font-piepie-regular text-sm lg:text-3xl text-green-dark text-center mb-3">
                    {option.title}
                  </h4>
                )}
                {option.description && (
                  <p className="font-modern-condensed-medium text-xs lg:text-2xl text-center text-beige">
                    {option.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Grid>
    </section>
  )
}

export default TheTownMenu
