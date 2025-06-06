import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { gtmTracking } from 'utils/tracking'
import * as Yup from 'yup'

import ArrowIcon from '~/icons/arrow-right.svg'
// import CallIcon from '~/icons/call.svg'
import EmailIcon from '~/icons/email.svg'
import UserIcon from '~/icons/user.svg'
import { sendNewsletterSalesforce } from '~/utils/newsletter-form'

import styles from './form.module.css'

const FormSchema = Yup.object().shape({
  inputName: Yup.string().required(),
  inputEmail: Yup.string().email().required(),
  inputMajority: Yup.bool().oneOf([true]).required(),
  inputTerms: Yup.bool().oneOf([true]).required(),
})

const Form = ({ trackingDataSent, trackingDataNotSent }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formMessageFeedback, setFormMessageFeedback] = useState('')
  const [trackingData, setTrackingData] = useState()
  const [responseStatus, setResponseStatus] = useState('')

  const handleClick = useCallback(() => {
    if (trackingData) {
      gtmTracking(trackingData)
    }
  }, [trackingData])

  const formik = useFormik({
    initialValues: {
      inputName: '',
      inputEmail: '',
      inputMajority: '',
      inputTerms: '',
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      if (isLoading) {
        return false
      }

      setIsLoading(true)

      const response = await sendNewsletterSalesforce({
        formValues: values,
      })

      setResponseStatus(response.data?.error)
      setFormMessageFeedback(response.data?.message)
      setIsSubmitted(true)
      setIsLoading(false)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormMessageFeedback('')
      }, 4000)
    },
  })

  useEffect(() => {
    if (isSubmitted) {
      responseStatus === true
        ? setTrackingData(trackingDataNotSent)
        : setTrackingData(trackingDataSent)

      handleClick()
    }
  }, [isLoading, trackingData]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative grid grid-cols-2 gap-x-3 lg:max-w-[278px] space-y-3"
      noValidate
      id="newsletter"
    >
      <div className="col-span-full">
        <label htmlFor="inputName" className={styles.label}>
          Nome
        </label>
        <div className="relative">
          <UserIcon className="absolute left-[10px] top-[8px]" />
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Digite seu nome"
            onChange={formik.handleChange}
            value={formik.values.inputName}
            className={classNames(styles.input, {
              [styles.inputError]:
                formik.errors.inputName && formik.touched.inputName,
            })}
            required
          />
        </div>
      </div>
      <div className="col-span-full">
        <label htmlFor="inputEmail" className={styles.label}>
          E-mail
        </label>
        <div className="relative">
          <EmailIcon className="absolute left-[10px] top-[8px]" />
          <input
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="Cadastre seu e-mail"
            onChange={formik.handleChange}
            value={formik.values.inputEmail}
            className={classNames(styles.input, {
              [styles.inputError]:
                formik.errors.inputEmail && formik.touched.inputEmail,
            })}
            required
          />
        </div>
      </div>
      <div
        className={classNames(
          'col-span-full flex items-center cursor-pointer',
          styles.checkbox
        )}
      >
        <input
          type="checkbox"
          name="inputMajority"
          id="inputMajority"
          onChange={formik.handleChange}
          value={formik.values.inputMajority}
          className={classNames({
            [styles.inputError]:
              formik.errors.inputMajority && formik.touched.inputMajority,
            [styles.inputDefault]:
              !formik.errors.inputMajority || !formik.touched.inputMajority,
          })}
        />
        <span className={styles.checkmark} />
        <label htmlFor="inputMajority" className={styles.label}>
          Confirmo ter 18 anos ou mais!
        </label>
      </div>
      <div
        className={classNames(
          'col-span-full flex items-center cursor-pointer',
          styles.checkbox
        )}
      >
        <input
          type="checkbox"
          name="inputTerms"
          id="inputTerms"
          onChange={formik.handleChange}
          value={formik.values.inputTerms}
          className={classNames({
            [styles.inputError]:
              formik.errors.inputTerms && formik.touched.inputTerms,
            [styles.inputDefault]:
              !formik.errors.inputTerms || !formik.touched.inputTerms,
          })}
        />
        <span className={styles.checkmark} />
        <label htmlFor="inputTerms" className={styles.label}>
          Autorizo o uso das minhas informações para receber e-mails com
          novidades e lançamentos da Incrível!
        </label>
      </div>
      <div className="col-span-full">
        <button
          className="group px-4 py-2 w-fit bg-white flex items-center rounded text-green hover:text-white hover:bg-green !mt-5"
          type="submit"
          disabled={isLoading}
        >
          <span className="mr-[10px] font-modern-condensed-medium font-semibold text-base">
            {isLoading ? 'Enviando...' : 'Enviar'}
          </span>
          <ArrowIcon className="w-3 h-3 group-hover:translate-x-2 duration-300" />
        </button>
        {isSubmitted && formMessageFeedback && (
          <div className="pt-3">
            <p>{formMessageFeedback}</p>
          </div>
        )}
      </div>
    </form>
  )
}

export default Form
