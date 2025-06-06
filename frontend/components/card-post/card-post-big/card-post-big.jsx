import classNames from 'classnames'
import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import CategoryIconSelector from '~/components/category-icon-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const CardPostBig = ({
  columns = '',
  imageClasses = '',
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
    <article className={classNames('group h-fit', columns)}>
      <Link
        className="flex flex-col w-full h-full space-y-4"
        href={href}
        onClick={handleClick}
      >
        <div className={classNames('rounded-lg overflow-hidden', imageClasses)}>
          <Image
            className="w-full h-full object-cover lg:group-hover:scale-110 lg:duration-300"
            {...featuredMedia}
          />
        </div>
        <div className="relative w-full lg:max-w-[520px] h-fit lg:h-full z-10 lg:space-y-2">
          <div className="flex items-center space-x-1 mb-1 lg:mb-0">
            <CategoryIconSelector category={taxterms[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-[10px] text-gray-dark">
              {taxterms[0]?.name}
            </p>
          </div>
          <h4 className="heading-2xl lg:heading-4xl font-modern-condensed-medium font-semibold text-gray-dark group-hover:text-green duration-200">
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

export default CardPostBig
