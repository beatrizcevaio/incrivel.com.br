import React from 'react'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import FrameGreenIcon from '~/icons/frame-green.svg'

const TextContentImageLeft = ({ emphasysImage, icon, title, textContent }) => {
  return (
    <section className="lg:min-h-[480px] py-5 lg:py-0">
      <Grid className="container">
        <div className="relative col-span-full lg:col-span-5 lg:col-start-2 mx-auto mb-20 lg:mb-0">
          <FrameGreenIcon className="absolute -top-3 lg:-top-[6px] -left-4 lg:-left-[90px] w-full lg:w-[446px] h-auto" />
          {emphasysImage && (
            <Image
              className="relative w-[268px] lg:w-[524px] h-auto z-10"
              {...emphasysImage}
            />
          )}
          {icon && (
            <Image
              className="absolute -bottom-10 lg:bottom-2 right-6 lg:right-4 w-[110px] lg:w-[196px] h-auto z-[11]"
              {...icon}
            />
          )}
          <Image
            src="/images/leaf.svg"
            width={100}
            height={100}
            className="lg:hidden absolute bottom-2 -left-14 w-[90px] h-auto z-10"
          />
        </div>
        <div className="relative col-span-full lg:col-span-4 lg:col-start-8 space-y-4 flex flex-col justify-center z-10 lg:min-h-[524px]">
          <HeadingTagSelector
            className="heading-3xl 1.5xl:heading-4xl font-semibold text-green"
            title={title}
          />
          <div
            className="text-base font-lato-regular text-gray-dark"
            dangerouslySetInnerHTML={{
              __html: textContent,
            }}
          />
          <Image
            src="/images/leaf.svg"
            width={100}
            height={100}
            className="hidden lg:block absolute -top-20 -left-20 1.5xl:-left-10 w-[100px] 1.5xl:w-[130px] h-auto"
          />
        </div>
      </Grid>
    </section>
  )
}

export default TextContentImageLeft
