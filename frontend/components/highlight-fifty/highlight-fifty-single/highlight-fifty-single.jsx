import React, { useEffect, useState } from 'react'

import CategoryIconSelector from '~/components/category-icon-selector'
import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from '~/components/link'
import FacebookIcon from '~/icons/facebook.svg'
import TwitterIcon from '~/icons/twitter.svg'
import WhatsappIcon from '~/icons/whatsapp.svg'

const HighlightFiftySingle = ({ categories, featuredMedia, title }) => {
  const [url, setUrl] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
    setWhatsappUrl(
      encodeURIComponent(`${document.title} ${window.location.href}`)
    )
  }, [])

  return (
    <section className="lg:relative h-auto lg:h-[500px] bg-green">
      <Image
        className="lg:absolute lg:top-0 lg:left-0 w-full lg:w-1/2 h-[240px] lg:h-full object-cover"
        {...featuredMedia}
      />
      <Grid className="container h-full space-y-8 lg:space-y-0">
        <div className="col-span-full lg:col-span-4 lg:col-start-8 space-y-4 flex flex-col justify-center pt-11 pb-4 lg:pt-0 lg:pb-0 text-gray-dark">
          <div className="flex items-center space-x-1">
            <CategoryIconSelector category={categories[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-xs text-gray-dark">
              {categories[0]?.name}
            </p>
          </div>
          <h2
            className="heading-3xl font-modern-condensed-medium font-semibold"
            dangerouslySetInnerHTML={{ __html: title?.rendered }}
          />
          <ul className="flex items-center space-x-4 !mt-8">
            <li>
              <p className="text-green-dark font-lato-regular">Compartilhe</p>
            </li>
            <li className="flex items-center">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                className="hover:opacity-70 duration-200
              "
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={`https://twitter.com/intent/tweet?url=${url}`}
                className="hover:opacity-70 duration-200
              "
              >
                <TwitterIcon className="w-[18px] h-[18px]" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={`https://api.whatsapp.com/send?text=${whatsappUrl}`}
                className="hover:opacity-70 duration-200
              "
              >
                <WhatsappIcon className="w-[18px] h-[18px]" />
              </Link>
            </li>
          </ul>
        </div>
      </Grid>
    </section>
  )
}

export default HighlightFiftySingle
