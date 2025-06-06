/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
import classNames from 'classnames'
import { useFormik } from 'formik'
import IMask from 'imask'
import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'

import ArrowIcon from '~/icons/arrow-right.svg'
import Help from '~/icons/help.svg'
import HelpGreen from '~/icons/help-green.svg'
import PaperClip from '~/icons/paperclip.svg'
import Polygon from '~/icons/polygon.svg'
import PolygonTop from '~/icons/polygon-top.svg'
import { sendFormData } from '~/services/forms'

import styles from '../contact-form.module.css'

const FormSchema = Yup.object().shape({
  subject: Yup.string(),
  fullName: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email().required('Endereço de email inválido'),
  cnpj: Yup.string().required('Campo obrigatório'),
  nf: Yup.string().required('Campo obrigatório'),
  phone: Yup.string().required('Campo obrigatório'),
  birthDate: Yup.date().required('Campo obrigatório'),
  productName: Yup.string(),
  quantity: Yup.string().required('Campo obrigatório'),
  stillHasProduct: Yup.string().required('Campo obrigatório'),
  manufacturingDate: Yup.date(),
  validityDate: Yup.date(),
  batch: Yup.string(),
  storageAtpointOfSale: Yup.string(),
  ocurranceMoment: Yup.string(),
  message: Yup.string().required('Campo obrigatório'),
  validityPic: Yup.mixed().nullable(),
  productPic: Yup.mixed().nullable(),
  foundIssue: Yup.mixed().nullable(),
  therms: Yup.bool(),
})

const FormLpComplain = ({ lpSubject }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formMessageFeedback, setFormMessageFeedback] = useState('')
  const [tooltipActive, setTooltipActive] = useState(false)
  const refMaskCNPJ = useRef(null)
  const refMaskPhone = useRef(null)
  const [validity, setValidity] = useState('Selecione')
  const [product, setProduct] = useState('Selecione')
  const [issue, setIssue] = useState('Selecione')

  useEffect(() => {
    const maskOptionsCNPJ = {
      mask: '00000000/0000-00',
    }
    const maskOptionsPhone = {
      mask: '(00) 00000-0000',
    }
    IMask(refMaskCNPJ.current, maskOptionsCNPJ)
    IMask(refMaskPhone.current, maskOptionsPhone)
  }, [])

  const formik = useFormik({
    initialValues: {
      subject: 'Reclamação PJ',
      fullName: '',
      email: '',
      cnpj: '',
      nf: '',
      phone: '',
      birthDate: '',
      productName: '',
      quantity: '',
      stillHasProduct: '',
      manufacturingDate: '',
      validityDate: '',
      batch: '',
      storageAtpointOfSale: '',
      ocurranceMoment: '',
      message: '',
      validityPic: {},
      productPic: {},
      foundIssue: {},
      therms: '',
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      if (isLoading) {
        return false
      }

      setIsLoading(true)

      const response = await sendFormData({
        formId: 2953,
        data: values,
      })

      setFormMessageFeedback(response.data?.message)
      setIsSubmitted(true)
      setIsLoading(false)

      setTimeout(() => {
        setIsSubmitted(true)
        setFormMessageFeedback('')
      }, 4000)
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="animate-showUp pt-6 space-y-6 opacity-0"
      noValidate
    >
      <input
        name="subject"
        onChange={formik.handleChange}
        type="hidden"
        value={lpSubject}
      />
      <span className="block w-full h-[1px] bg-gray-medium !mt-0"></span>
      <div className="relative">
        <label className={styles.label} htmlFor="fullName">
          Nome Completo*
        </label>
        <input
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className={classNames(styles.input, {
            [styles.inputError]:
              formik.errors.fullName && formik.touched.fullName,
          })}
          type="text"
          placeholder="Nome"
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.fullName}
          </span>
        )}
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="email">
          E-mail*
        </label>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={classNames(styles.input, {
            [styles.inputError]: formik.errors.email && formik.touched.email,
          })}
          type="email"
          placeholder="exemplo@email.com"
        />
        {formik.errors.email && formik.touched.email && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.email}
          </span>
        )}
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="cnpj">
          CNPJ*
        </label>
        <input
          name="cnpj"
          onChange={formik.handleChange}
          value={formik.values.cnpj}
          className={classNames(styles.input, {
            [styles.inputError]: formik.errors.cnpj && formik.touched.cnpj,
          })}
          type="text"
          placeholder="___.___.___-__"
          ref={refMaskCNPJ}
        />
        {formik.errors.cnpj && formik.touched.cnpj && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.cnpj}
          </span>
        )}
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="nf">
          Nota Fiscal*
        </label>
        <input
          name="nf"
          onChange={formik.handleChange}
          value={formik.values.nf}
          className={classNames(styles.input, {
            [styles.inputError]: formik.errors.nf && formik.touched.nf,
          })}
          type="text"
          placeholder="___.___.___-__"
        />
        {formik.errors.nf && formik.touched.nf && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.nf}
          </span>
        )}
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="phone">
          Telefone + DDD*
        </label>
        <input
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.Telefone}
          className={classNames(styles.input, {
            [styles.inputError]: formik.errors.phone && formik.touched.phone,
          })}
          type="tel"
          placeholder="(__) _____-____"
          ref={refMaskPhone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.phone}
          </span>
        )}
      </div>
      <div className="relative">
        <div className="flex items-center space-x-2 mb-1">
          <label className={styles.label} htmlFor="birthDate">
            Data de nascimento*
          </label>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setTooltipActive(!tooltipActive)
            }}
          >
            <Help
              className={classNames({
                block: !tooltipActive,
                hidden: tooltipActive,
              })}
            />
            <HelpGreen
              className={classNames({
                block: tooltipActive,
                hidden: !tooltipActive,
              })}
            />
            <div
              className={classNames(
                'absolute top-[34px] lg:-top-2 -right-[162px] lg:-right-[300px] w-[278px] bg-green rounded p-4 z-10',
                {
                  block: tooltipActive,
                  hidden: !tooltipActive,
                }
              )}
            >
              <Polygon className="hidden lg:block absolute top-2 -left-4 w-5 h-4" />
              <PolygonTop className="lg:hidden absolute -top-4 left-[98px] w-5 h-4" />
              <h6 className="font-modern-condensed-medium font-semibold text-white mb-1">
                Data de nascimento
              </h6>
              <p className="font-lato-regular text-sm text-white">
                É necessário ser maior de 18 anos para completar esse serviço.
              </p>
            </div>
          </div>
        </div>
        <input
          name="birthDate"
          onChange={formik.handleChange}
          value={formik.values.birthDate}
          className={classNames(styles.input, {
            [styles.inputError]:
              formik.errors.birthDate && formik.touched.birthDate,
          })}
          type="date"
          placeholder="dd/mm/aaaa"
        />
        {formik.errors.birthDate && formik.touched.birthDate && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.birthDate}
          </span>
        )}
      </div>
      <span className="block w-full h-[1px] bg-gray-medium"></span>
      <div>
        <label className={styles.label} htmlFor="productName">
          Nome do produto que consta na embalagem
        </label>
        <input
          name="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
          className={styles.input}
          type="text"
          placeholder="Digite aqui"
        />
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 space-y-6 lg:space-y-0">
        <div className="relative lg:col-span-8">
          <label className={styles.label} htmlFor="quantity">
            Quantidade Reclamada*
          </label>
          <input
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            className={classNames(styles.input, {
              [styles.inputError]:
                formik.errors.quantity && formik.touched.quantity,
            })}
            type="text"
            placeholder="Digite a quantidade"
          />
          {formik.errors.quantity && formik.touched.quantity && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.quantity}
            </span>
          )}
        </div>
        <div className="relative lg:col-span-4">
          <label className={styles.label} htmlFor="stillHasProduct">
            Ainda possui o produto*
          </label>
          <select
            name="stillHasProduct"
            value={formik.values.stillHasProduct}
            onChange={formik.handleChange}
            className={classNames(styles.select, {
              [styles.inputError]:
                formik.errors.stillHasProduct && formik.touched.stillHasProduct,
            })}
          >
            <option disabled selected>
              Selecione
            </option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          {formik.errors.stillHasProduct && formik.touched.stillHasProduct && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.stillHasProduct}
            </span>
          )}
        </div>
      </div>
      <div>
        <label className={styles.label} htmlFor="manufacturingDate">
          Fabricação
        </label>
        <input
          name="manufacturingDate"
          value={formik.values.manufacturingDate}
          onChange={formik.handleChange}
          className={styles.input}
          type="date"
          placeholder="dd/mm/aaaa"
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="validityDate">
          Validade
        </label>
        <input
          name="validityDate"
          value={formik.values.validityDate}
          onChange={formik.handleChange}
          className={styles.input}
          type="date"
          placeholder="dd/mm/aaaa"
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="batch">
          Lote
        </label>
        <input
          name="batch"
          value={formik.values.batch}
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Digite o lote"
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="storageAtpointOfSale">
          Como foi armazenado no ponto de venda?
        </label>
        <input
          name="storageAtpointOfSale"
          value={formik.values.storageAtpointOfSale}
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Digite aqui"
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="ocurranceMoment">
          Quando foi identificada a alteração/desvio?
        </label>
        <input
          name="ocurranceMoment"
          value={formik.values.ocurranceMoment}
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Digite aqui"
        />
      </div>
      <div className="relative">
        <label
          className={classNames('relative', styles.label)}
          htmlFor="message"
        >
          Mensagem*
        </label>
        <textarea
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          className={classNames(styles.textarea, {
            [styles.inputError]:
              formik.errors.message && formik.touched.message,
          })}
          cols="30"
          rows="10"
          placeholder="Digite aqui sua mensagem"
        />
        {formik.errors.message && formik.touched.message && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.message}
          </span>
        )}
      </div>
      <span className="block w-full h-[1px] bg-gray-medium"></span>
      <h5 className="font-modern-condensed-medium font-semibold text-xl">
        Upload de fotos
      </h5>
      <div>
        <label className={styles.label} htmlFor="validityPic">
          Validade
        </label>
        <div
          className={classNames(
            'relative flex items-center space-x-[10px]',
            styles.input
          )}
        >
          <input
            name="validityPic"
            onChange={(event) => {
              formik.setFieldValue('validityPic', event.target.files[0])
              setValidity(event.target.files[0].name)
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0"
            type="file"
            accept="image/png, image/jpeg"
          />
          <PaperClip />
          <span className="font-lato-regular text-gray-medium">{validity}</span>
        </div>
      </div>
      <div>
        <label className={styles.label} htmlFor="productPic">
          Produto
        </label>
        <div
          className={classNames(
            'relative flex items-center space-x-[10px]',
            styles.input
          )}
        >
          <input
            name="productPic"
            onChange={(event) => {
              formik.setFieldValue('productPic', event.target.files[0])
              setProduct(event.target.files[0].name)
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0"
            type="file"
            accept="image/png, image/jpeg"
          />
          <PaperClip />
          <span className="font-lato-regular text-gray-medium">{product}</span>
        </div>
      </div>
      <div>
        <label className={styles.label} htmlFor="foundIssue">
          Problema encontrado
        </label>
        <div
          className={classNames(
            'relative flex items-center space-x-[10px]',
            styles.input
          )}
        >
          <input
            name="foundIssue"
            onChange={(event) => {
              formik.setFieldValue('foundIssue', event.target.files[0])
              setIssue(event.target.files[0].name)
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0"
            type="file"
            accept="image/png, image/jpeg"
          />
          <PaperClip />
          <span className="font-lato-regular text-gray-medium">{issue}</span>
        </div>
      </div>
      <div
        className={classNames(
          'flex items-center cursor-pointer',
          styles.checkbox
        )}
      >
        <input
          type="checkbox"
          name="therms"
          onChange={formik.handleChange}
          value={formik.values.therms}
          id="therms"
        />
        <span className={styles.checkmark} />
        <label htmlFor="therms" className={styles.label}>
          Declaro que li e aceito os Termos de Política de Privacidade
        </label>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          className="group px-4 py-2 w-fit bg-green flex items-center rounded text-white hover:text-green hover:bg-white !mt-5"
          type="submit"
          disabled={isLoading}
        >
          <span className="mr-[10px] font-modern-condensed-medium font-semibold text-base">
            {isLoading ? 'Enviando...' : 'Enviar'}
          </span>
          <ArrowIcon className="w-3 h-3 group-hover:translate-x-2 duration-300" />
        </button>
        <div className="pt-3 h-[38px]">
          <p>{isSubmitted && formMessageFeedback && formMessageFeedback}</p>
        </div>
      </div>
    </form>
  )
}

export default FormLpComplain
