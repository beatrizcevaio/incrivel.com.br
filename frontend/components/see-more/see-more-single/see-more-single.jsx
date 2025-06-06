import React from 'react'

import CardPostSmall from '~/components/card-post/card-post-small'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from '~/components/link'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const SeeMoreSingle = ({ pageData, posts }) => {
  const pageID = pageData.id
  return (
    <section className="lg:min-h-[470px] py-8 lg:py-10">
      <Grid className="container gap-y-4">
        {pageData.type === 'products' ? (
          <div className="col-span-full lg:col-span-10 lg:col-start-2">
            <div className="w-full flex flex-col items-center space-y-5 lg:mb-10">
              <h2 className="styled-heading heading-2xl font-semibold text-green">
                Experimente também
              </h2>
            </div>
            <div className="w-full flex items-center flex-wrap mb-[74px]">
              {posts &&
                posts.map((product, index) => (
                  <div
                    className="w-1/2 md:w-[33%] lg:w-[20%] lg:hover:-translate-y-2 duration-300"
                    key={`produto-${index}`}
                  >
                    <Link
                      className="flex flex-col items-center justify-center w-full"
                      href={`${postLinkFormatter(product.type)}/${
                        product.slug
                      }`}
                    >
                      <Image {...product.acf?.archiveImage} />
                      <h4 className="text-base text-gray-dark font-modern-condensed-medium font-semibold">
                        {product.title?.rendered}
                      </h4>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <CtaGreen
                textColor="beige"
                hasArrowIcon={true}
                title="Ver todos produtos"
                link={{ url: '/produtos' }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="col-span-full flex flex-col items-center space-y-5 lg:mb-10">
              <h2 className="styled-heading heading-2xl font-semibold text-green">
                Veja também
              </h2>
            </div>
            {posts &&
              posts.map((card, index) => {
                if (pageID === card.id) return ''
                return (
                  <CardPostSmall
                    href={`${postLinkFormatter(card.type)}/${card.slug}`}
                    {...card}
                    columns="col-span-full lg:col-span-4"
                    imageHeight="h-[170px] sm:h-[230px]"
                    key={`card-${index}`}
                    isHalf={false}
                  />
                )
              })}
          </>
        )}
      </Grid>
    </section>
  )
}

export default SeeMoreSingle
