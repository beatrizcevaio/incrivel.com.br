import classNames from 'classnames'
import React from 'react'

import CardPostBig from '~/components/card-post/card-post-big/card-post-big'
import CardPostSmall from '~/components/card-post/card-post-small'
import Grid from '~/components/grid'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineOnePlusOne = ({ selectedPosts, bgColor }) => {
  if (selectedPosts.length === undefined) return ''

  return (
    <section
      className={classNames('py-8 lg:pt-10 lg:pb-9', {
        [`bg-${bgColor}`]: bgColor,
      })}
    >
      <Grid className="container h-full gap-y-4">
        {selectedPosts[0] && (
          <CardPostBig
            href={`${postLinkFormatter(selectedPosts[0].type)}/${
              selectedPosts[0].slug
            }`}
            {...selectedPosts[0]}
            columns="col-span-full lg:col-span-8"
            imageClasses="w-full h-[170px] sm:h-[230px] lg:h-[458px]"
          />
        )}
        {selectedPosts[1] && (
          <CardPostSmall
            href={`${postLinkFormatter(selectedPosts[1].type)}/${
              selectedPosts[1].slug
            }`}
            {...selectedPosts[1]}
            columns="col-span-full lg:col-span-4"
            imageHeight="h-20 sm:h-[230px]"
            isHalf={true}
          />
        )}
      </Grid>
    </section>
  )
}

export default HeadlineOnePlusOne
