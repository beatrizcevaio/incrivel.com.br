import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'

const TheTownBanner = ({ title }) => {
  const replaceTextInsideSquaredBraces = title?.replace(
    /\[(.*?)]/g,
    '<span class="font-piepie-regular font-semibold text-green-light">$1</span>'
  )

  return (
    <section className="relative pt-[3.75rem] lg:pt-40 pb-[16rem] sm:pb-[22.25rem] md:pb-[26.875rem] lg:pb-0 min-h-[24.125rem] lg:h-[64.125rem] bg-beige-light overflow-hidden">
      <Grid className="container relative z-10">
        {replaceTextInsideSquaredBraces && (
          <div className="col-span-full lg:col-span-10 lg:col-start-2 flex items-center justify-center">
            <h1
              className="uppercase text-center font-piepie-regular text-green-dark text-2xl lg:text-5xl lg:px-10 lg:max-w-[60.25rem]"
              dangerouslySetInnerHTML={{
                __html: replaceTextInsideSquaredBraces,
              }}
            />
          </div>
        )}
      </Grid>
      <Image
        src="/images/orange-leaf.svg"
        width={1200}
        height={1200}
        alt="leaf-icon"
        className="absolute -top-2 lg:-top-8 -left-4 lg:left-10 w-[4.25rem] lg:w-[14.625rem] h-[4.25rem] lg:h-auto rotate-180"
      />
      <Image
        src="/images/vinil.svg"
        width={1200}
        height={1200}
        alt="vinil-icon"
        className="absolute -top-3 lg:-top-11 -right-6 lg:right-0 w-[6.25rem] lg:w-[19.75rem] h-[4.875rem] lg:h-[15.625rem]"
      />
      <Image
        src="/images/hotdog.svg"
        width={1200}
        height={1200}
        alt="hotdog-icon"
        className="absolute bottom-[8.125rem] lg:bottom-1/2 lg:translate-y-1/2 -left-3 lg:left-[5.625rem] 2xl:left-[10rem] w-[5.625rem] lg:w-[15.75rem] h-[4.75rem] lg:h-[13.25rem] z-10"
      />
      <Image
        src="/images/polaroid.svg"
        width={1200}
        height={1200}
        alt="polaroid-icon"
        className="absolute bottom-[10rem] lg:bottom-1/2 lg:translate-y-1/2 -right-3 lg:right-[5.625rem] 2xl:right-[10rem] w-[4.625rem] lg:w-[12.875rem] h-16 lg:h-[11.25rem] z-10"
      />
      <Image
        src="/images/pane.svg"
        width={1200}
        height={1200}
        alt="pane-icon"
        className="absolute -bottom-[6.5rem] sm:-bottom-[9rem] md:-bottom-[10.75rem] lg:-bottom-[10.625rem] left-1/2 -translate-x-1/2 w-[22.5rem] sm:w-[31.25rem] md:w-[37.5rem] lg:w-[64.125rem] h-auto lg:h-[48.625rem] z-10"
      />
      <Image
        src="/images/city-bg.svg"
        width={1200}
        height={1200}
        alt="city-icon"
        className="absolute -bottom-[100px] sm:-bottom-[30%] lg:-bottom-[14%] 2xl:-bottom-[40%] left-1/2 -translate-x-1/2 w-[30.125rem] sm:w-full h-auto"
      />
    </section>
  )
}

export default TheTownBanner
