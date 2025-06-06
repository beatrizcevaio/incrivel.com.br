import '~/styles/global.css'

import { DefaultSeo } from 'next-seo'
import { setLocale } from 'yup'
import { pt } from 'yup-locales'

import Main from '~/helpers/main'

setLocale(pt)

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: process.env.siteUrl,
          site_name: 'SITE_NAME',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}
