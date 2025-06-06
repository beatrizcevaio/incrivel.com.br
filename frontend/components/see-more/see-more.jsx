import React from 'react'

import CardPostSmall from '~/components/card-post/card-post-small'
import Grid from '~/components/grid'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const SeeMore = ({ description, selectedPosts }) => {
  return (
    <section className="lg:min-h-[470px] lg:pt-10 lg:pb-9">
      <Grid className="container gap-y-4">
        <div className="col-span-full flex flex-col items-center space-y-5 lg:mb-10">
          <h2 className="styled-heading heading-2xl font-modern-condensed-black text-green">
            Veja também
          </h2>
          {description && (
            <div
              className="text-base font-lato-regular lg:text-center lg:max-w-[640px] text-gray-dark"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          )}
        </div>
        {selectedPosts?.length > 0 &&
          selectedPosts.map((card, index) => (
            <CardPostSmall
              href={`${postLinkFormatter(card.type)}/${card.slug}`}
              {...card}
              columns="col-span-full lg:col-span-4"
              imageHeight="h-[170px] sm:h-[230px]"
              key={`card-${index}`}
              isHalf={false}
            />
          ))}
      </Grid>
    </section>
  )
}

export default SeeMore
