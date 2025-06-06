import classNames from 'classnames'
import React from 'react'

import CategoryIconSelector from '~/components/category-icon-selector'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'

const HighlightFifty = ({ image, category, title, textColor, bgColor }) => {
  return (
    <section
      className={classNames('lg:relative h-auto lg:h-[500px]', {
        [`bg-${bgColor}`]: bgColor,
      })}
    >
      <Image
        className="lg:absolute lg:top-0 lg:left-0 w-full lg:w-1/2 h-[240px] lg:h-full object-cover"
        {...image}
      />
      <Grid className="container h-full space-y-8 lg:space-y-0">
        <div
          className={classNames(
            'col-span-full lg:col-span-4 lg:col-start-8 space-y-4 flex flex-col justify-center pt-11 pb-4 lg:pt-0 lg:pb-0',
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

export default HighlightFifty
