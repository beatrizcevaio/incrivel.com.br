import classNames from 'classnames'
import React from 'react'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'

const CloseToMe = ({
  bgColor,
  title,
  isUppercase,
  hasIcon,
  icon,
  description,
}) => {
  return (
    <section
      className={classNames('pt-8 lg:py-10', {
        [`bg-${bgColor}`]: bgColor,
      })}
    >
      <Grid className="lg:container">
        {title.text && (
          <div className="px-[34px] md:px-[70px] lg:px-0 col-span-full flex flex-col items-center space-y-5 mb-5 lg:mb-10">
            <div className="relative">
              {hasIcon && (
                <Image
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
                  {...icon}
                />
              )}
              <HeadingTagSelector
                className={classNames(
                  'styled-heading heading-2xl lg:heading-4xl font-semibold text-green',
                  { uppercase: isUppercase, 'pl-7': hasIcon }
                )}
                title={title}
              />
            </div>
            <div
              className="text-base font-lato-regular lg:text-center lg:max-w-[640px] text-gray-dark"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        )}
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          <iframe
            title="This is a unique title"
            id="gofind-iframe"
            frameBorder="0"
            src="https://incrivel.pertinhodemim.com"
            width="100%"
            className="min-h-[730px] lg:min-h-[500px] lg:rounded-lg"
            allow="geolocation"
          />
        </div>
      </Grid>
    </section>
  )
}

export default CloseToMe
