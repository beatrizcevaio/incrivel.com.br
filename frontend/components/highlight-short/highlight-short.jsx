import classNames from 'classnames'
import React from 'react'

import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'

const HighlightShort = ({
  hasImage,
  image,
  title,
  isUppercase,
  hasIcon,
  icon,
  description,
  textColor,
  bgColor,
}) => {
  return (
    <section
      className={classNames('h-[300px] lg:h-[250px] pt-16', {
        [`bg-${bgColor}`]: bgColor,
        overlay: hasImage,
      })}
    >
      {hasImage && (
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          {...image}
        />
      )}
      <div
        className={classNames(
          'relative container flex flex-col items-center justify-center z-10',
          {
            [`text-${textColor}`]: textColor,
          }
        )}
      >
        <div className="relative">
          {hasIcon && (
            <Image
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
              {...icon}
            />
          )}
          <HeadingTagSelector
            className={classNames(
              'styled-heading flex items-center justify-center heading-4xl font-modern-condensed-black h-14',
              { uppercase: isUppercase, 'pl-7': hasIcon }
            )}
            title={title}
          />
        </div>
        <div
          className="text-base font-lato-regular lg:text-center lg:max-w-[640px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </section>
  )
}

export default HighlightShort
