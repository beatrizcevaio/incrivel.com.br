import React, { useEffect, useState } from 'react'

import CategoryIconSelector from '~/components/category-icon-selector'
import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from '~/components/link'
import DifficultDegreeIcon from '~/icons/difficult-degree.svg'
import FacebookIcon from '~/icons/facebook.svg'
import PortionsIcon from '~/icons/portions.svg'
import PreparationIcon from '~/icons/preparation-time.svg'
import TwitterIcon from '~/icons/twitter.svg'
import WhatsappIcon from '~/icons/whatsapp.svg'

const HighlightThumbnailSingle = ({
  acf: {
    preparing: { portionNumber, preparationTime, difficultDegree },
  },
  categories,
  featuredMedia,
  title,
}) => {
  const [url, setUrl] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
    setWhatsappUrl(
      encodeURIComponent(`${document.title} ${window.location.href}`)
    )
  }, [])

  const difficult = difficultDegree

  let preparation = preparationTime
  const preparationHour =
    preparation.hours !== '0' ? `${preparation.hours} hora e ` : ''
  const preparationMinutes = `${preparation.minutes} min`
  if (preparation.minutes === '') preparation = ''

  let portions = portionNumber !== '1' ? `${portionNumber} porções` : '1 porção'
  if (portionNumber === '') portions = ''

  return (
    <section className="h-auto lg:h-[500px] py-5 lg:py-28 text-gray-dark bg-green mb-10">
      <Grid className="container h-full space-y-8 lg:space-y-0">
        <div className="col-span-full lg:col-span-5 lg:col-start-2">
          {featuredMedia && (
            <Image
              className="w-full h-[166px] sm:h-[240px] lg:h-[280px] object-cover rounded-lg"
              {...featuredMedia}
            />
          )}
        </div>
        <div className="col-span-full lg:col-span-4 lg:col-start-8 space-y-4 flex flex-col justify-center">
          <div className="flex items-center space-x-1">
            <CategoryIconSelector category={categories[0]?.slug} />
            <p className="uppercase font-lato-regular font-semibold text-xs text-gray-dark">
              {categories[0]?.name}
            </p>
          </div>
          <h2 className="heading-3xl font-modern-condensed-medium font-semibold">
            {title?.rendered}
          </h2>
          <ul className="flex space-x-2 text-sm font-lato-regular">
            {difficult && (
              <li className="pl-2 pr-3 flex items-center rounded-[20px] bg-beige">
                <DifficultDegreeIcon className="w-[30px] h-[30px]" />
                <p>{difficult}</p>
              </li>
            )}
            {preparation && (
              <li className="pl-2 pr-3 flex items-center rounded-[20px] bg-beige">
                <PreparationIcon className="w-[30px] h-[30px]" />
                <p>{`${preparationHour}${preparationMinutes}`}</p>
              </li>
            )}
            {portions && (
              <li className="pl-2 pr-3 flex items-center rounded-[20px] bg-beige">
                <PortionsIcon className="w-[30px] h-[30px]" />
                <p>{portions}</p>
              </li>
            )}
          </ul>
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

export default HighlightThumbnailSingle
