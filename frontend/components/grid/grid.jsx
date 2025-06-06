import classNames from 'classnames'
import React from 'react'

const Grid = ({ children, className = '', noGap = false, ...properties }) => {
  return (
    <div
      className={classNames('grid grid-cols-2 md:grid-cols-12', {
        'gap-x-4': !noGap,
        [className]: !!className,
      })}
      {...properties}
    >
      {children}
    </div>
  )
}

export default Grid
