import React from 'react'

import Grid from '~/components/grid'
import Image from '~/components/image'

const TextContentWithTableSingle = ({ acf: { nutritionals } }) => {
  return (
    <section className="lg:min-h-[344px] pb-8 lg:pt-10 lg:pb-20">
      <Grid className="container space-y-6 lg:space-y-0">
        <div className="relative col-span-full lg:col-span-4 lg:col-start-2 space-y-4 flex flex-col">
          <h4 className="max-w-[160px] sm:max-w-none heading-3xl lg:heading-4xl font-semibold text-green">
            Informações nutricionais
          </h4>
          <div
            className="text-base font-lato-regular text-gray-dark space-y-3"
            dangerouslySetInnerHTML={{
              __html: nutritionals.ingredients,
            }}
          />
          <Image
            src="/images/leaf-inverted.svg"
            width={100}
            height={100}
            className="lg:hidden absolute -top-6 sm:-top-12 right-0 w-[90px] h-auto z-10"
          />
          <Image
            src="/images/leaf.svg"
            width={100}
            height={100}
            className="hidden lg:block absolute lg:-bottom-14 lg:-right-16 w-[90px] lg:w-[130px] h-auto z-10"
          />
        </div>
        <div className="relative col-span-full lg:col-span-5 lg:col-start-7">
          <Image
            src="/images/leaf-inverted.svg"
            width={100}
            height={100}
            className="hidden lg:block absolute -top-32 -right-14 w-[130px] h-auto z-10"
          />
          <ul>
            {nutritionals.itemsRepeater && (
              <>
                <li className="w-full flex items-center justify-between lg:pl-4 py-1 border-b border-gray-medium text-sm lg:text-base font-lato-black">
                  <p>Quantidade por porção</p>
                  <p className="w-[20%] text-center uppercase">%vd*</p>
                </li>
                {nutritionals.itemsRepeater.map((info, index) => (
                  <li
                    className="w-full flex items-center lg:pl-4 py-1 border-b border-gray-medium text-xs font-lato-regular"
                    key={`-${index}`}
                  >
                    <p className="w-[40%]">{info.item}</p>
                    <p className="w-[40%] text-center">{info.quantity}</p>
                    <p className="w-[20%] text-center">{info.vd}</p>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </Grid>
    </section>
  )
}

export default TextContentWithTableSingle
