import React from 'react'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import ExclamationGreenDark from '~/icons/exclamation-green-dark.svg'
import FrameIcon from '~/icons/frame.svg'
import HundredVegetableIcon from '~/icons/hundred-vegetable.svg'

const HighlightProduct = ({ title, image }) => {
  return (
    <section className="relative w-full overflow-hidden h-[300px] bg-green-light lg:mb-10">
      <Grid className="container relative z-10 h-full">
        <ExclamationGreenDark className="absolute top-1/2 lg:-top-20 -translate-y-1/2 lg:translate-y-0 left-0 lg:left-10 w-[142px] lg:w-[284px] h-[352px] lg:h-[700px]" />
        <div className="relative col-span-full lg:col-span-5 lg:col-start-2 lg:h-full flex items-end lg:items-center pb-10 lg:pb-0 z-10">
          <HeadingTagSelector
            className="text-4xl sm:text-5xl lg:text-6xl mx-auto lg:mx-0 text-beige font-modern-condensed-medium font-semibold lg:max-w-[234px]"
            title={title}
          />
        </div>
      </Grid>
      <div className="absolute -top-32 lg:top-1/2 lg:-translate-y-1/2 -right-10 lg:-right-96 xl:-right-28 w-[120%] lg:w-[950px] h-[288px] lg:h-[700px] -rotate-[5deg] z-10">
        <HundredVegetableIcon className="absolute left-1/2 lg:-left-[90px] top-auto lg:top-32 -bottom-20 lg:bottom-auto rotate-[5deg] w-[204px] lg:w-[322px] h-[220px] lg:h-[350px] z-[11]" />
        <FrameIcon className="absolute -top-2 lg:top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-40 lg:-translate-y-1/2 w-[310px] lg:w-[500px] h-auto rotate-[5deg]" />
        <Image
          className="w-full h-full object-cover object-right max-w-none"
          {...image}
        />
      </div>
    </section>
  )
}

export default HighlightProduct
