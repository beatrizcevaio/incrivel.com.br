import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Grid from '~/components/grid'

import style from './contact-form.module.css'
import FormLpCommercial from './form-lp-commercial'
import FormLpComplain from './form-lp-complain'
import FormPpComplain from './form-pp-complain'
import FormPpPraise from './form-pp-praise'

const ContactForm = ({ phone, email }) => {
  const router = useRouter()
  const [ppIndexActive, setPpIndexActive] = useState(-1)
  const [lpIndexActive, setLpIndexActive] = useState(-1)
  const ppListTabs = [
    'Elogio',
    'Sugestão',
    'Informações',
    'Reclamação',
    'Outros',
  ]
  const lpListTabs = ['Reclamação PJ', 'Comercial PJ']
  const [toggleForm, setToggleForm] = useState(false)
  const [isPpComplain, setIsPpComplain] = useState(false)
  const [isLpComplain, setIsLpComplain] = useState(true)
  const [ppSubject, setPpSubject] = useState('')
  const [lpSubject, setLpSubject] = useState('')

  useEffect(() => {
    setPpIndexActive(0)
    setLpIndexActive(0)
  }, [router.asPath])

  const handlePpActivateTab = (index) => {
    setPpIndexActive(index)
  }

  const handlePlActivateTab = (index) => {
    setLpIndexActive(index)
  }

  return (
    <section className="bg-beige pt-6 lg:pt-10">
      <Grid className="container">
        <div className="col-span-full lg:col-span-6 lg:col-start-4 space-y-6 lg:space-y-10">
          <div
            className={classNames(style.phone)}
            dangerouslySetInnerHTML={{
              __html: phone,
            }}
          />
          <div
            className={classNames(style.email)}
            dangerouslySetInnerHTML={{
              __html: email,
            }}
          />
          <div className="space-y-6">
            <div className="space-y-1">
              <label className={classNames(style.label)} htmlFor="person">
                Tipo de pessoa*
              </label>
              <select
                name="person"
                id="person"
                className={classNames(style.select)}
                onChange={() => {
                  setToggleForm(!toggleForm)
                }}
              >
                <option value="Pessoa Física">Pessoa Física</option>
                <option value="Pessoa Jurídica">Pessoa Jurídica</option>
              </select>
            </div>
            <div
              className={classNames('space-y-1', {
                block: toggleForm === false,
                hidden: toggleForm === true,
              })}
            >
              <p className={classNames(style.label)}>Assunto*</p>
              <ul className="grid grid-cols-2 gap-1 lg:gap-0 lg:flex lg:space-x-1">
                {ppListTabs.map((ppItem, index) => (
                  <li className="col-span-1 lg:flex-grow" key={`item-${index}`}>
                    <button
                      className={classNames(
                        'w-full py-3 font-modern-condensed-medium font-bold rounded',
                        {
                          'text-white bg-green': ppIndexActive === index,
                          'text-green-dark bg-white': ppIndexActive !== index,
                        }
                      )}
                      onClick={() => {
                        setPpSubject(ppItem)
                        handlePpActivateTab(index)
                        if (ppItem == 'Reclamação') {
                          setIsPpComplain(true)
                        } else {
                          setIsPpComplain(false)
                        }
                      }}
                    >
                      {ppItem}
                    </button>
                  </li>
                ))}
              </ul>
              {isPpComplain ? (
                <FormPpComplain ppSubject={ppSubject} />
              ) : (
                <FormPpPraise ppSubject={ppSubject} />
              )}
            </div>
            <div
              className={classNames('space-y-1', {
                block: toggleForm === true,
                hidden: toggleForm === false,
              })}
            >
              <p className={classNames(style.label)}>Assunto*</p>
              <ul className="flex space-x-1">
                {lpListTabs.map((lpItem, index) => (
                  <li className="flex-grow" key={`item-${index}`}>
                    <button
                      className={classNames(
                        'w-full py-3 font-modern-condensed-medium font-bold rounded',
                        {
                          'text-white bg-green': lpIndexActive === index,
                          'text-green-dark bg-white': lpIndexActive !== index,
                        }
                      )}
                      onClick={() => {
                        setLpSubject(lpItem)
                        handlePlActivateTab(index)
                        if (lpItem == 'Reclamação PJ') {
                          setIsLpComplain(true)
                        } else {
                          setIsLpComplain(false)
                        }
                      }}
                    >
                      {lpItem}
                    </button>
                  </li>
                ))}
              </ul>
              {isLpComplain ? (
                <FormLpComplain lpSubject={lpSubject} />
              ) : (
                <FormLpCommercial lpSubject={lpSubject} />
              )}
            </div>
          </div>
        </div>
      </Grid>
    </section>
  )
}

export default ContactForm
