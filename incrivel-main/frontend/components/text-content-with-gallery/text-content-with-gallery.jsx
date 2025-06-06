import classNames from 'classnames'
import React from 'react'
import Slider from 'react-slick'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
// import ExclamationIcon from '~/icons/exclamation-point.svg'
import LeavesIcon from '~/icons/leaves.svg'

const TextContentWithGallery = ({
  title,
  description,
  isUppercase,
  hasIcon,
  icon,
  gallery,
  text,
}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
  }

  return (
    <section className="py-10">
      <Grid className="lg:container">
        <div className="col-span-full lg:col-span-8 lg:col-start-3 flex flex-col items-center space-y-5 px-6 lg:px-0 mb-10">
          <div className="relative">
            {hasIcon && (
              <Image
                className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
                {...icon}
              />
            )}
            <HeadingTagSelector
              className={classNames(
                'styled-heading heading-2xl font-semibold text-green',
                { uppercase: isUppercase, 'pl-7': hasIcon }
              )}
              title={title}
            />
          </div>
          <div
            className="text-base font-lato-regular lg:text-center lg:max-w-[640px] text-gray-dark"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        {gallery.length > 0 && (
          <div className="col-span-full lg:col-span-8 lg:col-start-3 h-[195px] lg:h-[470px] mb-20">
            <Slider
              className="text-content-with-gallery-slick h-full"
              {...settings}
            >
              {gallery.map((slide, index) => (
                <figure className="relative" key={`slide-${index}`}>
                  <Image className="w-full h-full object-cover" {...slide} />
                  <figcaption className="absolute bottom-0 left-0 w-full h-10 bg-opacity-50 bg-gray-dark text-xs text-white flex items-center justify-center">
                    {slide.caption}
                  </figcaption>
                </figure>
              ))}
            </Slider>
          </div>
        )}
        <div className="relative col-span-full lg:col-span-6 lg:col-start-4 text-base font-lato-regular lg:max-w-[640px] text-gray-dark px-6 lg:px-0">
          <div
            className="space-y-5"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          <LeavesIcon className="absolute -top-24 lg:-top-32 right-0 lg:-right-44 w-[60px] lg:w-[130px] h-auto" />
          {/* <ExclamationIcon className="hidden lg:block absolute -top-32 -left-80 w-96 h-auto" /> */}
        </div>
      </Grid>
    </section>
  )
}

export default TextContentWithGallery
