import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Form from '~/components/form'

const Newsletter = () => {
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return (
    <>
      <h3 className="font-modern-condensed-bold text-3xl text-beige">
        Assine a newsletter
      </h3>
      <p className="lg:max-w-[310px] font-lato-regular text-base pb-2">
        Assine a newsletter e fique sabendo o que vem por aí
      </p>
      <div>
        <Form
          formId="5"
          trackingDataSent={{
            event: 'generate_lead',
            items: [
              {
                page_path: router.asPath,
                page_title: pageTitle,
                curency: 'BRL',
                value: 1,
                status_lead: 'cadastro realizado',
              },
            ],
          }}
          trackingDataNotSent={{
            event: 'generate_lead',
            items: [
              {
                page_path: router.asPath,
                page_title: pageTitle,
                curency: 'BRL',
                value: 1,
                status_lead: 'erro ao cadastrar newsletter',
              },
            ],
          }}
        />
      </div>
    </>
  )
}

export default Newsletter
