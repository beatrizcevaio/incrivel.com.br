import classNames from 'classnames'
import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import CategoryIconSelector from '~/components/category-icon-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const CardPostTiny = ({
  columns = '',
  imageHeight = '',
  title,
  featuredMedia,
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
    <article
      className={classNames(
        'group h-fit lg:h-[150px] lg:py-5 lg:border-b lg:border-gray-medium',
        columns
      )}
    >
      <Link
        className="w-full h-fit lg:h-full space-x-4 flex"
        href={href}
        onClick={handleClick}
      >
        <div
          className={classNames(
            'w-1/2 h-20 rounded-lg overflow-hidden',
            imageHeight
          )}
        >
          <Image
            className="w-full h-full object-cover lg:group-hover:scale-110 lg:duration-300"
            {...featuredMedia}
          />
        </div>
        <div className="w-1/2 h-fit lg:h-full space-y-1 lg:flex lg:flex-col lg:justify-center">
          <div className="flex items-center space-x-1">
            <CategoryIconSelector category={taxterms[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-[10px] text-gray-dark">
              {taxterms[0]?.name}
            </p>
          </div>
          <h4
            className="text-sm font-modern-condensed-medium font-semibold text-ellipsis line-clamp-2 lg:line-clamp-none text-gray-dark group-hover:text-green duration-200"
            dangerouslySetInnerHTML={{
              __html: title.rendered,
            }}
          />
        </div>
      </Link>
    </article>
  )
}

export default CardPostTiny
