import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import CategoryIconSelector from '~/components/category-icon-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const CardPostLargest = ({
  title,
  featuredMedia,
  excerpt,
  taxterms,
  href,
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
    <article className="group col-span-full overflow-hidden rounded-lg lg:h-[560px]">
      <Link
        className="lg:relative flex w-full h-full flex-col lg:flex-row space-y-4 lg:space-y-0"
        href={href}
        onClick={handleClick}
      >
        <Image
          className="w-full h-[170px] lg:h-full rounded-lg lg:rounded-none object-cover lg:group-hover:scale-110 lg:duration-300"
          {...featuredMedia}
        />
        <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full h-fit lg:w-[406px] lg:bg-beige lg:p-12 z-10 lg:space-y-2 lg:rounded-l-lg">
          <div className="flex items-center space-x-1 mb-1 lg:mb-0">
            <CategoryIconSelector category={taxterms[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-[10px] text-gray-dark">
              {taxterms[0]?.name}
            </p>
          </div>
          <h4 className="heading-2xl font-modern-condensed-medium font-semibold text-gray-dark group-hover:text-green duration-200">
            {title?.rendered}
          </h4>
          <div
            className="text-ellipsis line-clamp-2 text-gray-dark"
            dangerouslySetInnerHTML={{
              __html: excerpt?.rendered,
            }}
          />
        </div>
      </Link>
    </article>
  )
}

export default CardPostLargest
