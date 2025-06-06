import classNames from 'classnames'
import React from 'react'

import Grid from '~/components/grid'
import styles from '~/components/preparation/preparation.module.css'

const Preparation = (pageData) => {
  return (
    <section>
      <Grid className="container space-y-10 lg:space-y-0">
        <div className="col-span-full lg:col-span-3 lg:col-start-3 text-base text-gray-dark font-lato-regular">
          <h4 className="heading-2xl font-semibold text-green mb-4">
            Ingredientes
          </h4>
          <div
            className={classNames('space-y-4', styles.ingredients)}
            dangerouslySetInnerHTML={{
              __html: pageData.acf.preparing?.ingredients,
            }}
          />
        </div>
        <div className="col-span-full lg:col-span-5 text-base text-gray-dark font-lato-regular">
          <h4 className="heading-2xl font-semibold text-green mb-4">
            Modo de preparo
          </h4>
          <div
            className="space-y-4"
            dangerouslySetInnerHTML={{
              __html: pageData.acf.preparing?.preparingContent,
            }}
          />
        </div>
      </Grid>
    </section>
  )
}

export default Preparation
