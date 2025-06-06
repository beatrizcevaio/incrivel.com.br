import classNames from 'classnames'
import React from 'react'

import CardPostLargest from '~/components/card-post/card-post-largest'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineOnePostLarge = ({
  title,
  hasTitle,
  isUppercase,
  hasIcon,
  icon,
  description,
  selectedPost = [],
  hasButton,
  button,
}) => {
  if (selectedPost.length === undefined) return ''

  return (
    <section className="py-8 lg:pt-10 lg:pb-9">
      <Grid className="container gap-y-4">
        {hasTitle && (
          <div className="col-span-full flex flex-col items-center space-y-5 lg:mb-10">
            <div className="relative">
              {hasIcon && (
                <Image
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
                  {...icon}
                />
              )}
              <HeadingTagSelector
                className={classNames(
                  'styled-heading heading-4xl font-modern-condensed-black text-green',
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
        {selectedPost[0] && (
          <CardPostLargest
            href={`${postLinkFormatter(selectedPost[0].type)}/${
              selectedPost[0].slug
            }`}
            {...selectedPost[0]}
            imageClasses="w-full h-[170px] sm:h-[230px] lg:h-[458px]"
          />
        )}
        {hasButton && (
          <div className="col-span-full flex justify-center pt-5">
            <CtaGreen {...button} />
          </div>
        )}
      </Grid>
    </section>
  )
}

export default HeadlineOnePostLarge
