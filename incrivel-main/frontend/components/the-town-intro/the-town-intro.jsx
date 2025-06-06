import React from 'react'

import Hotdog from '~/public/images/dog-incrivel.svg'
import Microphone from '~/public/images/mic-incrivel.svg'

const TheTownIntro = ({
  titleOne,
  descriptionOne,
  titleTwo,
  descriptionTwo,
}) => {
  return (
    <section className="flex flex-col lg:flex-row text-white">
      <div className="w-full lg:w-1/2 px-6 md:px-[4.375rem] flex flex-col items-center py-10 lg:p-20 bg-orange-bird lg:h-[51.875rem]">
        {titleOne && (
          <h2 className="uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-6 lg:mb-8">
            {titleOne}
          </h2>
        )}
        {descriptionOne && (
          <div
            className="font-modern-condensed-medium prose prose-p:lg:text-3xl prose-p:text-center prose-p:text-white max-w-none mb-5"
            dangerouslySetInnerHTML={{
              __html: descriptionOne,
            }}
          />
        )}
        <Microphone className="w-[8.5rem] lg:w-[16.375rem] h-[9.125rem] lg:h-[17.375rem] lg:mt-10" />
      </div>
      <div className="w-full lg:w-1/2 px-6 md:px-[4.375rem] flex flex-col items-center py-10 lg:p-20 bg-green lg:h-[51.875rem]">
        {titleTwo && (
          <h2 className="uppercase font-piepie-regular text-2xl lg:text-5xl text-center mb-6 lg:mb-8 lg:max-w-[30rem]">
            {titleTwo}
          </h2>
        )}
        {descriptionTwo && (
          <div
            className="font-modern-condensed-medium prose prose-p:lg:text-3xl prose-p:text-center prose-p:text-white max-w-none mb-5"
            dangerouslySetInnerHTML={{
              __html: descriptionTwo,
            }}
          />
        )}
        <Hotdog className="w-[8.5rem] lg:w-[16.375rem] h-[9.125rem] lg:h-[17.375rem]" />
      </div>
    </section>
  )
}

export default TheTownIntro
