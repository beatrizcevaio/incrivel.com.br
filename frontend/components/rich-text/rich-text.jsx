import classNames from 'classnames'
import React from 'react'

import Grid from '~/components/grid'
import styles from '~/components/rich-text/rich-text.module.css'

const RichText = ({ className = '', columns = '', htmlText = '' }) => {
  // Remove wrapping <p> tags around images
  const filteredHtmlText = htmlText.replace(
    /<p\b[^/<>]*>\s*(<img\b[^<>]*>)\s*<\/p>/g,
    '$1'
  )

  return (
    <section className="w-full overflow-hidden">
      <Grid
        noGap={true}
        className={classNames('relative prose', className, styles.iframe)}
      >
        <div
          className={classNames(columns)}
          dangerouslySetInnerHTML={{ __html: filteredHtmlText }}
        />
      </Grid>
    </section>
  )
}

export default RichText
