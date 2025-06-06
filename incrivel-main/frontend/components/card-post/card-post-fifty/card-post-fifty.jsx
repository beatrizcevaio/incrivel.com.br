import classNames from 'classnames'
import React from 'react'

import CategoryIconSelector from '~/components/category-icon-selector'
import Image from '~/components/image'
import Link from '~/components/link'

const CardPostFifty = ({
  columns = '',
  title,
  featuredMedia,
  excerpt,
  taxterms,
  href,
  trackingData,
  onClick,
}) => {
  return (
    <article
      className={classNames(
        'group overflow-hidden rounded-lg lg:h-[340px]',
        columns
      )}
    >
      <Link
        className="flex w-full h-full flex-col lg:flex-row space-y-4 lg:space-y-0"
        href={href}
        onClick={onClick}
        trackingData={trackingData}
      >
        <Image
          className="w-full h-[170px] lg:w-1/2 lg:h-full rounded-lg lg:rounded-none object-cover lg:group-hover:scale-110 lg:duration-300"
          {...featuredMedia}
        />
        <div className="relative w-full h-fit lg:w-1/2 lg:h-full lg:bg-beige lg:py-24 lg:px-28 z-10 lg:space-y-2">
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

export default CardPostFifty
