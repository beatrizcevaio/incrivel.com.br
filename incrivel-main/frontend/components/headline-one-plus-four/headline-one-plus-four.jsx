/* eslint-disable react-hooks/rules-of-hooks */
import classNames from 'classnames'
import React, { useMemo } from 'react'

import CardPostBig from '~/components/card-post/card-post-big/'
import CardPostTiny from '~/components/card-post/card-post-tiny'
import Grid from '~/components/grid'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineOnePlusFour = ({ selectedPosts, bgColor }) => {
  if (selectedPosts.length === undefined) return ''

  const posts = useMemo(() => selectedPosts.slice(1), [selectedPosts])

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
        <div className="col-span-full lg:col-span-4 lg:border-t lg:border-gray-medium space-y-4 lg:space-y-0">
          {posts.map((card, index) => (
            <CardPostTiny
              href={`${postLinkFormatter(card.type)}/${card.slug}`}
              {...card}
              columns="col-span-full lg:col-span-4"
              imageHeight="sm:h-[110px]"
              key={`card-${index}`}
            />
          ))}
        </div>
      </Grid>
    </section>
  )
}

export default HeadlineOnePlusFour
