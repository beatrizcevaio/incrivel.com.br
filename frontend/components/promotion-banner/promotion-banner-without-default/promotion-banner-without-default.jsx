import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Cta from '~/components/cta'
import Image from '~/components/image'
import Link from '~/components/link'

const PromotionBannerWithoutDefault = ({
  banner,
  bannerAcf,
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
    <Link
      href={bannerAcf?.bannerLink?.url}
      className="relative col-span-full lg:col-span-10 lg:col-start-2 overflow-hidden rounded-[10px] h-[250px] flex justify-center bg-green"
      onClick={handleClick}
    >
      <div className="flex justify-center lg:justify-start h-full pl-8">
        <Image
          className="hidden lg:block z-10 relative w-[240px] h-auto object-contain ml-20 mr-5"
          {...banner?.featuredMedia}
        />
        <div className="-rotate-[5deg] relative z-10 pt-16 lg:pt-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold max-w-[150px] font-modern-condensed-black lg:max-w-[240px]">
            {bannerAcf?.title}
          </h3>
          <Cta title={bannerAcf?.bannerLink?.title} hasArrowIcon={true} />
        </div>
      </div>
      <Image
        className="absolute top-0 left-0 w-full h-full max-w-none object-cover"
        {...bannerAcf?.bgImage}
      />
    </Link>
  )
}

export default PromotionBannerWithoutDefault
