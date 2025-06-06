/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames'
import React from 'react'

const HighlightVideo = ({ frame, bgColor }) => {
  return (
    <section className="lg:relative lg:h-[600px]">
      <div
        className={classNames('hidden lg:block w-full h-1/2', {
          [`bg-${bgColor}`]: bgColor,
        })}
      />
      {frame && (
        <video
          className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:!w-[860px] h-[240px] sm:h-[400px] lg:h-[500px] object-cover"
          controls
        >
          <source src={frame.url} type="video/mp4" />
        </video>
      )}
    </section>
  )
}

export default HighlightVideo
