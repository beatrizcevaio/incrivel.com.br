/* eslint-disable react-hooks/rules-of-hooks */
import classNames from 'classnames'
import React, { useMemo } from 'react'

import CardPostFifty from '~/components/card-post/card-post-fifty'
import CardPostSmall from '~/components/card-post/card-post-small'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineFivePosts = ({
  hasTitle,
  title,
  isUppercase,
  hasIcon,
  icon,
  description,
  selectedPosts,
  hasButton,
  button,
}) => {
  if (selectedPosts.length === undefined) return ''

  const posts = useMemo(() => selectedPosts.slice(1), [selectedPosts])

  return (
    <section className="lg:min-h-[700px] py-8 lg:pt-10 lg:pb-9">
      <Grid className="container h-full gap-y-4">
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
        {selectedPosts[0] && (
          <CardPostFifty
            href={`${postLinkFormatter(selectedPosts[0].type)}/${
              selectedPosts[0].slug
            }`}
            {...selectedPosts[0]}
            columns="col-span-full"
            imageClasses="w-full h-[170px] sm:h-[458px]"
          />
        )}
        {posts.map((card, index) => (
          <CardPostSmall
            href={`${postLinkFormatter(card.type)}/${card.slug}`}
            {...card}
            columns="col-span-full lg:col-span-3"
            imageHeight="h-20 sm:h-[170px]"
            key={`card-${index}`}
            isHalf={true}
          />
        ))}
        {hasButton && (
          <div className="col-span-full flex justify-center pt-5">
            <CtaGreen {...button} />
          </div>
        )}
      </Grid>
    </section>
  )
}

export default HeadlineFivePosts
