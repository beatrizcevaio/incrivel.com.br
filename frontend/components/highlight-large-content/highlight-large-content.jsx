/* eslint-disable no-console */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import CategoryIconSelector from '~/components/category-icon-selector'
import Cta from '~/components/cta'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const HighlightLargeContent = ({
  categories,
  title,
  description,
  image,
  mobImage,
  cta,
  slider,
  isCarousel,
}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
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

  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return (
    <section className="relative w-full lg:h-[700px]">
      {isCarousel ? (
        <Slider className="highlight-large-content-slick h-full" {...settings}>
          {slider.length > 0 &&
            slider.map((slide, index) => (
              <div className="relative h-full" key={`slide-${index}`}>
                {slide.mobImage && (
                  <Image
                    className="lg:!hidden w-full h-[375px] md:h-[660px] object-cover"
                    {...slide.mobImage}
                  />
                )}
                {slide.image && (
                  <Image
                    className="!hidden lg:!block lg:absolute lg:top-0 lg:left-0 w-full h-full object-cover"
                    {...slide.image}
                  />
                )}
                <Grid className="lg:container relative z-10 h-full">
                  <div className="col-span-full lg:col-span-5 lg:h-full lg:flex lg:items-center">
                    <Link
                      href={slide.cta.link?.url}
                      className="group bg-beige w-full lg:rounded-lg px-6 pt-[30px] pb-[74px] lg:p-[60px] min-h-[308px] block text-gray-dark"
                      trackingData={{
                        event: 'select_content',
                        items: {
                          item_category: slide.categories?.selectCat,
                          item_id: '',
                          item_name: slide.title?.text,
                          content_type: 'post',
                          page_path: router.asPath,
                          page_title: pageTitle,
                          text: slide.cta.link?.title,
                        },
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <CategoryIconSelector
                          category={
                            slide.categories &&
                            slide.categories.selectCat
                              .toLowerCase()
                              .replace(/ /g, '-')
                              .normalize('NFD')
                              .replace(/[\u0300-\u036F]/g, '')
                          }
                        />
                        <p className="uppercase text-xs font-lato-bold">
                          {slide.categories && slide.categories.selectCat}
                        </p>
                      </div>
                      <HeadingTagSelector
                        className="text-left heading-2xl lg:heading-4xl font-semibold text-gray-dark my-2 group-hover:text-green duration-200"
                        title={slide.title}
                      />
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: slide.description,
                        }}
                      />
                      <Cta
                        color="green"
                        title={slide.cta?.link.title}
                        hasArrowIcon={true}
                        className="lg:hidden !h-fit mt-4"
                      />
                      <CtaGreen
                        textColor="beige"
                        title={slide.cta?.link.title}
                        hasArrowIcon={true}
                        className="hidden lg:flex mt-7"
                      />
                    </Link>
                  </div>
                </Grid>
              </div>
            ))}
        </Slider>
      ) : (
        <>
          {mobImage && (
            <Image
              className="lg:!hidden w-full h-[375px] md:h-[660px] object-cover"
              {...mobImage}
            />
          )}
          {image && (
            <Image
              className="!hidden lg:!block lg:absolute lg:top-0 lg:left-0 w-full h-full object-cover"
              {...image}
            />
          )}
          <Grid className="lg:container relative z-10 h-full">
            <div className="col-span-full lg:col-span-5 lg:h-full lg:flex lg:items-center">
              <Link
                href={cta.link?.url}
                className="bg-beige w-full lg:rounded-lg px-6 py-[30px] lg:p-[60px] text-gray-dark block"
              >
                <div className="flex items-center space-x-2">
                  <CategoryIconSelector
                    category={
                      categories &&
                      categories.selectCat
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .normalize('NFD')
                        .replace(/[\u0300-\u036F]/g, '')
                    }
                  />
                  <p className="uppercase text-xs font-lato-bold">
                    {categories && categories.selectCat}
                  </p>
                </div>
                <HeadingTagSelector
                  className="heading-2xl lg:heading-4xl font-semibold text-gray-dark my-2"
                  title={title}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
                <Cta
                  color="green"
                  title={cta?.link.title}
                  hasArrowIcon={true}
                  className="lg:hidden !h-fit mt-4"
                />
                <CtaGreen
                  textColor="beige"
                  title={cta?.link.title}
                  hasArrowIcon={true}
                  className="hidden lg:flex mt-7"
                />
              </Link>
            </div>
          </Grid>
        </>
      )}
    </section>
  )
}

export default HighlightLargeContent
