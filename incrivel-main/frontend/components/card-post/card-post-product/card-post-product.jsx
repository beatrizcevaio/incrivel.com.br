import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Image from '~/components/image'
import Link from '~/components/link'

const CardPostproduct = ({ acf, title, href, trackingData, onClick }) => {
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
    <article className="col-span-1 md:col-span-4 lg:col-span-3 lg:hover:-translate-y-2 duration-300">
      <Link
        className="flex flex-col items-center justify-center"
        href={href}
        onClick={handleClick}
      >
        <Image
          className="w-[170px] h-[170px] lg:w-[310px] lg:h-[310px] object-contain"
          {...acf.archiveImage}
        />
        <h4 className="text-base text-gray-dark font-modern-condensed-medium font-semibold">
          {title?.rendered}
        </h4>
      </Link>
    </article>
  )
}

export default CardPostproduct
