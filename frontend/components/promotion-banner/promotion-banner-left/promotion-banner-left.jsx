import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Cta from '~/components/cta'
import Image from '~/components/image'
import Link from '~/components/link'
import ExclamationPoint from '~/icons/exclamation-point.svg'
import FrameIcon from '~/icons/frame.svg'
import LogoIcon from '~/icons/logo.svg'

const PromotionBannerLeft = ({ banner, bannerAcf, trackingData, onClick }) => {
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
      className="group relative col-span-full lg:col-span-10 lg:col-start-2 overflow-hidden rounded-[10px] h-[250px] bg-green-dark"
      onClick={handleClick}
    >
      <ExclamationPoint className="absolute -bottom-6 lg:bottom-[14px] -left-12 lg:-left-6 w-[174px] h-[428px]" />
      <div className="flex items-center justify-center lg:justify-start h-full pl-8">
        <Image
          className="hidden lg:block w-[240px] h-[190px] object-contain ml-20 mr-5"
          {...banner?.featuredMedia}
        />
        <div className="-rotate-[5deg] relative z-20 pt-16 lg:pt-5 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold max-w-[150px] font-modern-condensed-black lg:max-w-[240px]">
            {bannerAcf?.title}
          </h3>
          <Cta title={bannerAcf?.bannerLink?.title} hasArrowIcon={true} />
        </div>
      </div>
      <FrameIcon className="absolute top-2 right-[122px] hidden lg:block w-[152px] 2xl:w-[298px] h-[240px] z-10" />
      <LogoIcon className="absolute top-5 right-5 w-[114px] h-9 z-10" />
      <Image
        className="absolute top-1/2 -translate-y-1/2 -right-[260px] lg:-right-5 w-[400px] 2xl:w-[590px] h-auto -rotate-[5deg] max-w-none"
        {...bannerAcf?.bgImage}
      />
    </Link>
  )
}

export default PromotionBannerLeft
