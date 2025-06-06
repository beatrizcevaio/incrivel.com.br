import React from 'react'
import Slider from 'react-slick'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import ExclamationMobIcon from '~/icons/exclamation-point.svg'
import FrameIcon from '~/icons/frame.svg'
import ExclamationDeskIcon from '~/public/images/exclamation-point-rotate.svg'
// import MenuIcon from '~/public/images/menu.svg'

const HighlightLargeInstitutional = ({
  title,
  description,
  image,
  slider,
  isCarousel,
}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        },
      },
    ],
  }

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-green">
      {isCarousel ? (
        <Slider
          className="highlight-large-institutional-slick h-full"
          {...settings}
        >
          {slider.map((slide, index) => (
            <div
              className="relative h-full overflow-hidden"
              key={`slide-${index}`}
            >
              <ExclamationDeskIcon className="hidden lg:block absolute top-1/2 -left-[200px] -translate-y-1/2 w-[500px] h-auto" />
              <ExclamationMobIcon className="lg:hidden absolute top-52 -right-[186px] w-[340px] h-auto z-10 rotate-[8deg]" />
              <Grid className="container relative z-10 h-full">
                <FrameIcon className="absolute top-40 lg:top-1/2 left-6 lg:left-auto lg:right-32 -translate-y-1/2 w-[220px] lg:w-[500px] h-auto" />
                <div className="col-span-full lg:col-span-5 lg:col-start-2 lg:h-full flex items-end lg:items-center pb-20 lg:pb-0">
                  <div className="w-full text-beige space-y-2 lg:max-w-[420px]">
                    <HeadingTagSelector
                      className="text-5xl lg:text-6xl font-modern-condensed-medium font-semibold"
                      title={slide.title}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: slide.description,
                      }}
                    />
                  </div>
                </div>
              </Grid>
              {/* <MenuIcon className="hidden lg:block absolute bottom-6 left-1/3 lg:w-[200px] h-auto z-10" /> */}
              <Image
                className="absolute -top-6 sm:-top-10 lg:-top-[100px] -right-10 lg:-right-[200px] w-[120%] lg:w-3/4 h-[288px] sm:h-[400px] lg:h-[900px] -rotate-[5deg] object-cover object-right max-w-none"
                {...slide.image}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <>
          <ExclamationDeskIcon className="hidden lg:block absolute top-1/2 -left-[200px] -translate-y-1/2 w-[500px] h-auto" />
          <ExclamationMobIcon className="lg:hidden absolute top-52 -right-[186px] w-[340px] h-auto z-10 rotate-[8deg]" />
          <Grid className="container relative z-10 h-full">
            <FrameIcon className="absolute top-40 lg:top-1/2 left-6 lg:left-auto lg:right-32 -translate-y-1/2 w-[220px] lg:w-[500px] h-auto" />
            <div className="col-span-full lg:col-span-5 lg:col-start-2 lg:h-full flex items-end lg:items-center pb-20 lg:pb-0">
              <div className="w-full text-beige space-y-2 lg:max-w-[420px]">
                <HeadingTagSelector
                  className="text-5xl lg:text-6xl font-modern-condensed-medium font-semibold"
                  title={title}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </div>
            </div>
          </Grid>
          {/* <MenuIcon className="hidden lg:block absolute bottom-6 left-1/3 lg:w-[200px] h-auto z-10" /> */}
          <Image
            className="absolute -top-6 sm:-top-10 lg:-top-[100px] -right-10 lg:-right-[200px] w-[120%] lg:w-3/4 h-[288px] sm:h-[400px] lg:h-[900px] -rotate-[5deg] object-cover object-right max-w-none"
            {...image}
          />
        </>
      )}
    </section>
  )
}

export default HighlightLargeInstitutional
