/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import CloseIcon from '~/icons/close.svg'
import PlayIcon from '~/icons/play.svg'

const Hits = ({ hasTitle, title, isUppercase, hasIcon, icon, videos }) => {
  const [activeModal, setActiveModal] = useState(false)
  const [frameUrl, setFrameUrl] = useState('')

  useEffect(() => {
    setActiveModal(false)
  }, [])

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        },
      },
    ],
  }

  return (
    <>
      <section className="py-8 lg:pt-10 lg:pb-20">
        <Grid className="container">
          {hasTitle && (
            <div className="col-span-full flex flex-col items-center mb-10">
              <div className="relative">
                {hasIcon && (
                  <Image
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
                    {...icon}
                  />
                )}
                <HeadingTagSelector
                  className={classNames(
                    'styled-heading heading-2xl font-modern-condensed-black text-green',
                    { uppercase: isUppercase, 'pl-7': hasIcon }
                  )}
                  title={title}
                />
              </div>
            </div>
          )}
          <Slider
            className="hits-slick col-span-full h-[270px] sm:h-[582px]"
            {...settings}
          >
            {videos.map((video, index) => (
              <div key={`video-${index}`} className="group relative">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  onMouseEnter={(event) => {
                    event.target.play()
                  }}
                  onMouseOut={(event) => {
                    event.target.pause()
                  }}
                  onBlur={(event) => {
                    event.target.pause()
                  }}
                >
                  <source src={video.videoFile.url} type="video/mp4" />
                </video>
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center bg-beige rounded-lg bg-opacity-70 group-hover:bg-opacity-100 duration-300"
                  onClick={() => {
                    setFrameUrl(video.videoFile.url)
                    setActiveModal(true)
                  }}
                >
                  <PlayIcon className="w-6 h-6" />
                </button>
                <h5 className="absolute bottom-4 md:bottom-6 left-0 text-base md:text-2xl font-modern-condensed-medium font-semibold text-beige px-2 md:px-6 w-full">
                  {video.videoLabel}
                </h5>
              </div>
            ))}
          </Slider>
        </Grid>
      </section>
      <div
        className={classNames(
          'modal fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-dark z-[9999] duration-200 lg:py-6 2xl:py-0',
          {
            'opacity-0 -z-50': !activeModal,
          },
          {
            'opacity-100 z-[9999]': activeModal,
          }
        )}
      >
        <button
          className="absolute top-5 md:top-0 right-5 md:right-[90px] w-fit md:w-[50px] h-fit md:h-[50px] md:flex md:items-center md:justify-center md:bg-beige md:bg-opacity-70 md:rounded-lg duration-300 hover:bg-opacity-100"
          onClick={() => {
            setActiveModal(false)
            setFrameUrl('')
          }}
        >
          <CloseIcon className="w-[18px] h-[18px]" />
        </button>
        <div className="w-full md:w-[362px] md:max-h-[658px] h-full overflow-hidden md:rounded-lg">
          <video
            src={frameUrl}
            type="video/mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            controls
          />
        </div>
      </div>
    </>
  )
}

export default Hits
