import React from 'react'

const HeadingTagSelector = ({ title, className = '' }) => {
  const CustomTag = title.tag
  const classes = `${className}`

  return <CustomTag className={classes}>{title.text}</CustomTag>
}

export default HeadingTagSelector
