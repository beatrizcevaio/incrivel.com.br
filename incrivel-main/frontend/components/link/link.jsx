/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import NextLink from 'next/link'
import React, { useCallback } from 'react'
import { gtmTracking } from 'utils/tracking'

import { isEmail } from '~/utils/global'
import { isUrlExternal } from '~/utils/route'

const Link = ({
  children,
  className = '',
  href,
  type,
  onClick,
  isExternal = false,
  trackingData,
  ...properties
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

  if (href) {
    if (isUrlExternal(href) || isExternal || isEmail(href)) {
      return isEmail(href) ? (
        <a href={`mailto:${href}`} className={className} onClick={handleClick}>
          {children}
        </a>
      ) : (
        <a
          href={href}
          className={className}
          onClick={handleClick}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )
    }

    return (
      <NextLink href={href} passHref {...properties}>
        <a className={className} onClick={handleClick}>
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      {...properties}
    >
      {children}
    </button>
  )
}

export default Link
