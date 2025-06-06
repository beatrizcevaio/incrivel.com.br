import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Grid from '~/components/grid'
import PromotionBannerLeft from '~/components/promotion-banner/promotion-banner-left'
import PromotionBannerRight from '~/components/promotion-banner/promotion-banner-right'
import PromotionBannerWithoutDefault from '~/components/promotion-banner/promotion-banner-without-default'

const PromotionBanner = ({ isDefault, contentAlign, selectedBanner = [] }) => {
  const banner = selectedBanner[0]
  const bannerAcf = selectedBanner[0].acf
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  if (selectedBanner.length === 0) return ''

  return (
    <section className="bg-gray-light py-6">
      <Grid className="container">
        {isDefault ? (
          contentAlign ? (
            <PromotionBannerRight
              bannerAcf={bannerAcf}
              trackingData={{
                event: 'view_item',
                items: [
                  {
                    item_category: banner.type,
                    item_id: banner.id,
                    item_name: banner.title?.rendered,
                    currency: 'BRL',
                    price: bannerAcf.price,
                    content_type: banner.type,
                    page_path: router.asPath,
                    page_title: pageTitle,
                    text: bannerAcf.bannerLink?.title,
                  },
                ],
              }}
              onClick
            />
          ) : (
            <PromotionBannerLeft
              banner={banner}
              bannerAcf={bannerAcf}
              trackingData={{
                event: 'view_item',
                items: [
                  {
                    item_category: banner.type,
                    item_id: banner.id,
                    item_name: banner.title?.rendered,
                    currency: 'BRL',
                    price: bannerAcf.price,
                    content_type: banner.type,
                    page_path: router.asPath,
                    page_title: pageTitle,
                    text: bannerAcf.bannerLink?.title,
                  },
                ],
              }}
              onClick
            />
          )
        ) : (
          <PromotionBannerWithoutDefault
            banner={banner}
            bannerAcf={bannerAcf}
            trackingData={{
              event: 'view_item',
              items: [
                {
                  item_category: banner.type,
                  item_id: banner.id,
                  item_name: banner.title?.rendered,
                  currency: 'BRL',
                  price: bannerAcf.price,
                  content_type: banner.type,
                  page_path: router.asPath,
                  page_title: pageTitle,
                  text: bannerAcf.bannerLink?.title,
                },
              ],
            }}
            onClick
          />
        )}
      </Grid>
    </section>
  )
}

export default PromotionBanner
