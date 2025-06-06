import Head from 'next/head'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import React from 'react'

const formatSeoData = (data) => {
  const {
    title,
    description,
    og_locale,
    og_title,
    og_description,
    og_site_name,
    og_type,
    robots,
    url,
    image,
    schema,
  } = data

  return {
    title: title || og_title,
    description: description || og_description,
    canonical: url,
    robotsProps: {
      maxSnippet: robots?.['max-snippet'],
      maxImagePreview: robots?.['max-image-preview'],
      maxVideoPreview: robots?.['max-video-preview'],
    },
    openGraph: {
      type: og_type,
      locale: og_locale || '',
      url,
      title: title || og_title,
      description: description || og_description,
      site_name: og_site_name || '',
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    structuredDatas: schema?.['@graph'] || [],
  }
}

const siteUrl = process.env.siteUrl
const cmsBaseUrl = process.env.cmsBaseUrl

const formatUrlsInStructuredData = (data) => {
  let result = JSON.stringify(data)
  let regex = new RegExp(cmsBaseUrl, 'g')

  result = result.replace(regex, siteUrl)

  return JSON.parse(result)
}

const renderStructuredData = (data, index) => {
  const formattedData = formatUrlsInStructuredData(data)

  switch (data['@type']) {
    case 'WebSite':
      return (
        <Head key={`structured-data-${index}`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                ...formattedData,
                '@context': 'https://schema.org',
              }),
            }}
          />
        </Head>
      )
    case 'WebPage':
      delete formattedData.isPartOf
      delete formattedData.breadcrumb
      delete formattedData.author
      return (
        <WebPageJsonLd key={`structured-data-${index}`} {...formattedData} />
      )
    default:
      return ''
  }
}

const Seo = ({ data = {}, url = '', postType = 'page' }) => {
  const seo = formatSeoData({ ...data, url, postType })
  const { structuredDatas, ...formattedSeoData } = seo

  return (
    <>
      <NextSeo {...formattedSeoData} />
      {structuredDatas?.map((item, itemIndex) =>
        renderStructuredData(item, itemIndex)
      )}
    </>
  )
}

export default Seo
