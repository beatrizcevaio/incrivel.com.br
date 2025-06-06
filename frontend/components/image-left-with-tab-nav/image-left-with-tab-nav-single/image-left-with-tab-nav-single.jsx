import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import Grid from '~/components/grid'
import Image from '~/components/image'
import styles from '~/components/image-left-with-tab-nav/image-left-with-tab-nav-single/tab.module.css'
import FrameGreenInvertedIcon from '~/icons/frame-green-inverted.svg'

const ImageLeftWithTabNavSingle = ({ acf: { packing, preparing = [] } }) => {
  const router = useRouter()
  const [indexActive, setIndexActive] = useState(-1)

  useEffect(() => {
    setIndexActive(0)
  }, [router.asPath])

  const handleActivateTab = (index) => {
    setIndexActive(index)
  }

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
          variableWidth: true,
        },
      },
    ],
  }

  return (
    <>
      {preparing && (
        <section className="lg:min-h-[560px] py-8 lg:py-0">
          <Grid className="container space-y-10 lg:space-y-0">
            <div className="relative col-span-full lg:col-span-5 lg:col-start-2 flex items-center mx-auto lg:mx-0 lg:my-[70px]">
              {packing && (
                <>
                  <FrameGreenInvertedIcon className="w-[300px] sm:w-[364px] lg:w-[446px] h-auto" />
                  <Image
                    className="absolute -bottom-4 lg:bottom-0 -left-5 w-auto h-[224px] sm:h-[290px] lg:h-[336px] z-10"
                    {...packing}
                  />
                  <Image
                    src="/images/leaf.svg"
                    width={100}
                    height={100}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90px] lg:w-[130px] rotate-[40deg] h-auto z-10"
                  />
                </>
              )}
            </div>
            <div className="relative col-span-full lg:col-span-6 2xl:col-span-5 lg:col-start-7 space-y-4 flex flex-col z-10 lg:!mt-44">
              <h4 className="heading-3xl lg:heading-4xl font-semibold text-green">
                Como preparar
              </h4>
              <Slider
                className="preparing-slick sm:flex sm:items-center text-base sm:text-xl text-gray-dark font-modern-condensed-black sm:space-x-9 mb-5"
                {...settings}
              >
                {preparing.map((tab, index) => (
                  <div
                    className={classNames(
                      'py-1 border-b-2 border-transparent duration-300 !w-fit mr-7 sm:mr-0',
                      {
                        'border-gray-dark': indexActive === index,
                      }
                    )}
                    key={`tab-${index}`}
                  >
                    <button onClick={() => handleActivateTab(index)}>
                      {tab.preparingTitle}
                    </button>
                  </div>
                ))}
              </Slider>
              <ul className="w-full text-base text-gray-dark font-lato">
                {preparing.map((tabContent, index) => (
                  <li
                    className={classNames('duration-300', {
                      'block opacity-100': indexActive === index,
                      'hidden opacity-0': indexActive !== index,
                    })}
                    key={`tab-content-${index}`}
                  >
                    <div
                      className={classNames(styles.steps)}
                      dangerouslySetInnerHTML={{
                        __html: tabContent.preparingSteps,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </section>
      )}
    </>
  )
}

export default ImageLeftWithTabNavSingle
