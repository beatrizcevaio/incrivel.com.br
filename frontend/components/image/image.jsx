import NextImage from 'next/future/image'
import React from 'react'

const megaInByes = 1000 * 1000

const Image = ({
  src,
  url,
  filesize = 0,
  size = '',
  sizes = {},
  alt = '',
  width,
  height,
  loading = 'lazy',
  layout = 'raw',
  ...properties
}) => {
  const originalUrl = sizes?.[size] || src || url
  const thumbnailUrl = sizes?.['thumbnail']

  if (!originalUrl) {
    return ''
  }

  return (
    <NextImage
      src={originalUrl}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      loading={loading}
      unoptimized={filesize >= megaInByes}
      placeholder={thumbnailUrl ? 'blur' : 'empty'}
      blurDataURL={thumbnailUrl || ''}
      {...properties}
    />
  )
}

export default Image
