import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import Link from '~/components/link'
import ArrowIcon from '~/icons/arrow-right.svg'

const Cta = ({
  link,
  hasArrowIcon,
  color = '',
  className = '',
  title = '',
  trackingData,
  onClick,
  ...properties
}) => {
  const textColor = color ? `text-${color}` : ''
  const classes = `group flex items-center h-16 heading-xl
    ${textColor} ${className}`

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
      <span className="mr-[10px]">{link?.title || title}</span>
      {hasArrowIcon && (
        <ArrowIcon className="w-3 h-3 group-hover:translate-x-2 duration-300" />
      )}
    </>
  )

  if (link?.url) {
    return (
      <Link
        className={classes}
        href={link.url}
        onClick={onClick}
        trackingData={trackingData}
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
export default Cta
