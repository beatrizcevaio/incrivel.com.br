import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Link from '~/components/link'
import ArrowIcon from '~/icons/arrow-right.svg'

const CtaGreen = ({
  link,
  hasArrowIcon,
  textColor,
  className = '',
  title = '',
  trackingData,
  onClick,
  ...properties
}) => {
  const classes = `group text-base font-modern-condensed-medium w-fit bg-green p-1 rounded group-hover:rounded-none hover:rounded-none
    text-${textColor} ${className}`
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
  const CtaContent = () => (
    <>
      <span className="bg-green rounded group-hover:bg-white group-hover:text-green py-2 px-5 w-fit flex items-center duration-300">
        <span className="mr-[10px]">{link?.title || title}</span>
        {hasArrowIcon && (
          <ArrowIcon className="w-3 h-3 group-hover:translate-x-1 duration-300" />
        )}
      </span>
    </>
  )

  if (link?.url) {
    return (
      <Link
        className={classes}
        onClick={handleClick}
        href={link.url}
        {...properties}
      >
        <CtaContent />
      </Link>
    )
  }

  return (
    <button className={classes} onClick={handleClick} {...properties}>
      <CtaContent />
    </button>
  )
}

export default CtaGreen
