import React from 'react'

import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import FrameGreenInvertedIcon from '~/icons/frame-green-inverted.svg'

const TextContentImageRight = ({ emphasysImage, icon, title, textContent }) => {
  return (
    <section className="lg:min-h-[480px] py-5 lg:py-0">
      <div className="container flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="relative col-span-full lg:col-span-4 lg:col-start-2 space-y-4 flex flex-col justify-center">
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
            src="/images/leaf-inverted.svg"
            width={100}
            height={100}
            className="hidden lg:block absolute -top-14 1.5xl:-top-5 -left-28 1.5xl:-left-2 w-[110px] 1.5xl:w-[130px] h-auto z-10"
          />
        </div>
        <div className="relative col-span-full lg:col-span-6 lg:col-start-7 mx-auto mb-20 lg:mb-0">
          <FrameGreenInvertedIcon className="absolute -top-[42px] lg:-top-[66px] -right-4 lg:-right-[42px] w-full lg:w-[504px] h-auto" />
          {emphasysImage && (
            <Image
              className="w-[268px] lg:w-[640px] h-auto"
              {...emphasysImage}
            />
          )}
          {icon && (
            <Image
              className="absolute -bottom-[70px] lg:bottom-4 left-0 lg:-left-[86px] w-[132px] lg:w-[250px] h-auto"
              {...icon}
            />
          )}
          <Image
            src="/images/leaf-inverted.svg"
            width={100}
            height={100}
            className="lg:hidden absolute -top-10 -right-14 w-[90px] h-auto z-10"
          />
          <Image
            src="/images/leaf.svg"
            width={100}
            height={100}
            className="absolute -bottom-8 lg:bottom-8 -right-8 lg:right-12 w-[90px] lg:w-[130px] h-auto z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default TextContentImageRight
