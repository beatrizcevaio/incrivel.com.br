import classNames from 'classnames'
import React from 'react'

import CategoryIconSelector from '~/components/category-icon-selector'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'

const HighlightThumbnail = ({ image, category, title, textColor, bgColor }) => {
  return (
    <section
      className={classNames('h-auto lg:h-[500px] py-5 lg:py-28', {
        [`bg-${bgColor}`]: bgColor,
      })}
    >
      <Grid className="container h-full space-y-8 lg:space-y-0">
        <div className="col-span-full lg:col-span-5 lg:col-start-2">
          <Image
            className="w-full h-[166px] sm:h-[240px] lg:h-[280px] object-cover rounded-lg"
            {...image}
          />
        </div>
        <div
          className={classNames(
            'col-span-full lg:col-span-4 lg:col-start-8 space-y-4 flex flex-col justify-center',
            {
              [`text-${textColor}`]: textColor,
            }
          )}
        >
          <div className="flex items-center space-x-1">
            <CategoryIconSelector
              category={category.selectCat.toLowerCase().replace(/ /g, '-')}
            />
            <p className="uppercase font-lato-regular font-semibold text-xs text-gray-dark">
              {category.selectCat}
            </p>
          </div>
          <HeadingTagSelector
            className="heading-3xl font-modern-condensed-medium font-semibold"
            title={title}
          />
        </div>
      </Grid>
    </section>
  )
}

export default HighlightThumbnail
