import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from '~/components/link'
import ArrowLeftIcon from '~/icons/arrow-left.svg'
import ArrowIcon from '~/icons/arrow-right.svg'
import BgProductPattern from '~/icons/bg-product-pattern.svg'

const HighlightLargeInstitutionalSingle = ({
  acf: { toBuyHash },
  title,
  excerpt,
  featuredMedia,
  trackingData,
  onClick,
}) => {
  const handleClick = useCallback(
    (event) => {
      if (trackingData) {
        gtmTracking(trackingData)
      }
      if (typeof onClick === 'function') {
        onClick(event)
      }
    },
    [onClick, trackingData]
  )

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-green">
      <Grid className="container relative z-10 h-full">
        <Link
          href="/produtos"
          className="group absolute top-0 lg:top-[68px] left-0 md:px-[70px] 1.5xl:px-0 py-4 lg:py-1 px-4 flex items-center bg-green-light lg:bg-transparent text-beige z-10 w-full lg:w-fit"
        >
          <ArrowLeftIcon className="w-3 h-3 group-hover:-translate-x-1 duration-300" />
          <span className="ml-[10px] text-base font-modern-condensed-medium font-semibold">
            Voltar para produtos
          </span>
        </Link>
        <div className="relative col-span-full lg:h-full flex items-end lg:items-center pb-10 lg:pb-0">
          <div className="w-full text-beige space-y-2 lg:max-w-[420px]">
            <h2 className="text-5xl font-modern-condensed-medium font-semibold">
              {title?.rendered}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: excerpt?.rendered,
              }}
            />
            <button
              data-tobuy-modal="open"
              data-tobuy-hash={toBuyHash}
              className="group px-4 py-3 w-fit bg-white flex items-center rounded text-green hover:text-white hover:bg-green !mt-5"
              onClick={handleClick}
            >
              <span className="mr-[10px] text-base font-modern-condensed-medium font-semibold">
                Compre agora
              </span>
              <ArrowIcon className="w-3 h-3 group-hover:translate-x-1 duration-300" />
            </button>
          </div>
          <Image
            className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-16 lg:top-1/2 lg:-translate-y-1/2 w-full sm:w-auto max-w-[398px] md:max-w-[500px] xl:max-w-[630px] 2xl:max-w-[730px]"
            {...featuredMedia}
          />
        </div>
      </Grid>
      <div className="absolute -top-6 sm:-top-10 lg:-top-[100px] -right-10 lg:-right-[300px] w-[120%] lg:w-3/4 h-[288px] sm:h-[400px] lg:h-[900px] -rotate-[5deg] object-cover object-right max-w-none bg-green-light overflow-hidden">
        <BgProductPattern className="absolute -top-32 lg:top-[70px] 2xl:top-0 left-1/2 -translate-x-1/2 max-w-[400px] lg:max-w-none lg:translate-x-0 lg:-left-20 w-full lg:w-auto h-auto lg:h-[90%] 2xl:h-full rotate-[5deg]" />
      </div>
    </section>
  )
}

export default HighlightLargeInstitutionalSingle
