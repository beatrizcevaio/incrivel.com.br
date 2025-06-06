import React from 'react'

import Grid from '../grid'

const PrivacyEditor = ({ editor }) => {
  return (
    <section className="py-10">
      <Grid className="container">
        <div
          className="privacy-policy-content col-span-full lg:col-span-8 lg:col-start-3 !max-w-none prose"
          dangerouslySetInnerHTML={{
            __html: editor,
          }}
        />
      </Grid>
    </section>
  )
}

export default PrivacyEditor
