import classNames from 'classnames'
import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import CategoryIconSelector from '~/components/category-icon-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const CardPostSmall = ({
  columns = '',
  imageHeight = '',
  title,
  featuredMedia,
  excerpt,
  taxterms,
  href,
  isHalf,
  trackingData,
  onClick,
}) => {
  return (
    <article
      className={classNames('group h-fit', columns, {
        'mb-2 lg:mb-0': !isHalf,
      })}
    >
      <Link
        className={classNames('w-full h-fit space-y-4', {
          'space-x-4 md:space-x-0 flex md:flex-col': isHalf,
        })}
        href={href}
        trackingData={trackingData}
        onClick={onClick}
      >
        <div
          className={classNames('rounded-lg overflow-hidden', imageHeight, {
            'w-1/2 md:w-full': isHalf,
            'w-full': !isHalf,
          })}
        >
          <Image
            className="w-full h-full object-cover lg:group-hover:scale-110 lg:duration-300 mb-4"
            {...featuredMedia}
          />
        </div>
        <div
          className={classNames('h-fit space-y-1', {
            'w-1/2 md:w-full': isHalf,
            'w-full': !isHalf,
          })}
        >
          <div className="flex items-center space-x-1">
            <CategoryIconSelector category={taxterms[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-[10px] text-gray-dark">
              {taxterms[0]?.name}
            </p>
          </div>
          <h4
            className={classNames(
              'font-modern-condensed-medium font-semibold text-ellipsis line-clamp-3 lg:line-clamp-2 text-gray-dark group-hover:text-green duration-200',
              {
                'text-sm md:heading-2xl': isHalf,
                'heading-2xl': !isHalf,
              }
            )}
            dangerouslySetInnerHTML={{
              __html: title.rendered || title,
            }}
          />
          <div
            className={classNames({
              '!hidden lg:text-ellipsis lg:!line-clamp-4': isHalf,
              'text-ellipsis !line-clamp-4': !isHalf,
            })}
            dangerouslySetInnerHTML={{
              __html: excerpt.rendered || excerpt,
            }}
          />
        </div>
      </Link>
    </article>
  )
}

export default CardPostSmall
