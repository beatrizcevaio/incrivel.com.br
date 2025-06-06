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
  cpf: Yup.string(),
  phone: Yup.string().required('Campo obrigatório'),
  birthDate: Yup.date().required('Campo obrigatório'),
  sex: Yup.string(),
  zipCode: Yup.string().required('Campo obrigatório'),
  address: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  uf: Yup.string().required('Campo obrigatório'),
  neighborhood: Yup.string().required('Campo obrigatório'),
  productName: Yup.string(),
  quantity: Yup.string().required('Campo obrigatório'),
  stillHasProduct: Yup.string().required('Campo obrigatório'),
  manufacturingDate: Yup.date(),
  validityDate: Yup.date(),
  batch: Yup.string(),
  isFirstTime: Yup.string(),
  pointOfSaleName: Yup.string(),
  neighborhoodOfSale: Yup.string(),
  storageAtpointOfSale: Yup.string(),
  storageAtYourHome: Yup.string(),
  ocurranceMoment: Yup.string(),
  message: Yup.string().required('Campo obrigatório'),
  validityPic: Yup.mixed().nullable(),
  productPic: Yup.mixed().nullable(),
  foundIssue: Yup.mixed().nullable(),
  therms: Yup.bool(),
})

const FormPpComplain = ({ ppSubject }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formMessageFeedback, setFormMessageFeedback] = useState('')
  const [tooltipBirthdateActive, setTooltipBirthdateActive] = useState(false)
  const [tooltipManufacturingActive, setTooltipManufacturingActive] =
    useState(false)
  const [tooltipValidityActive, setTooltipValidityActive] = useState(false)
  const [tooltipBatchActive, setTooltipBatchActive] = useState(false)
  const refMaskCPF = useRef(null)
  const refMaskPhone = useRef(null)
  const refMaskCEP = useRef(null)
  const [validity, setValidity] = useState('Selecione')
  const [product, setProduct] = useState('Selecione')
  const [issue, setIssue] = useState('Selecione')

  useEffect(() => {
    const maskOptionsCPF = {
      mask: '000.000.000-00',
    }
    const maskOptionsPhone = {
      mask: '(00) 00000-0000',
    }
    const maskOptionsCEP = {
      mask: '000.00-000',
    }
    IMask(refMaskCPF.current, maskOptionsCPF)
    IMask(refMaskPhone.current, maskOptionsPhone)
    IMask(refMaskCEP.current, maskOptionsCEP)
  }, [])

  const formik = useFormik({
    initialValues: {
      subject: 'Reclamação',
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      birthDate: '',
      sex: '',
      zipCode: '',
      address: '',
      number: '',
      city: '',
      uf: '',
      neighborhood: '',
      productName: '',
      quantity: '',
      stillHasProduct: '',
      manufacturingDate: '',
      validityDate: '',
      batch: '',
      isFirstTime: '',
      pointOfSaleName: '',
      neighborhoodOfSale: '',
      storageAtpointOfSale: '',
      storageAtYourHome: '',
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
        formId: 2952,
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
        value={ppSubject}
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
      <div>
        <label className={styles.label} htmlFor="cpf">
          CPF
        </label>
        <input
          name="cpf"
          onChange={formik.handleChange}
          value={formik.values.cpf}
          className={styles.input}
          type="text"
          placeholder="___.___.___-__"
          ref={refMaskCPF}
        />
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
              setTooltipBirthdateActive(!tooltipBirthdateActive)
            }}
          >
            <Help
              className={classNames({
                block: !tooltipBirthdateActive,
                hidden: tooltipBirthdateActive,
              })}
            />
            <HelpGreen
              className={classNames({
                block: tooltipBirthdateActive,
                hidden: !tooltipBirthdateActive,
              })}
            />
            <div
              className={classNames(
                'absolute top-[34px] lg:-top-2 -right-[162px] lg:-right-[300px] w-[278px] bg-green rounded p-4 z-10',
                {
                  block: tooltipBirthdateActive,
                  hidden: !tooltipBirthdateActive,
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
      <div className="relative">
        <label className={styles.label} htmlFor="sex">
          Sexo*
        </label>
        <select
          name="sex"
          onChange={formik.handleChange}
          value={formik.values.sex}
          className={classNames(styles.select, {
            [styles.inputError]: formik.errors.sex && formik.touched.sex,
          })}
        >
          <option selected disabled>
            Selecione
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
        {formik.errors.sex && formik.touched.sex && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.sex}
          </span>
        )}
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="zipCode">
          CEP*
        </label>
        <input
          name="zipCode"
          onChange={formik.handleChange}
          value={formik.values.CEP}
          className={classNames(styles.input, {
            [styles.inputError]:
              formik.errors.zipCode && formik.touched.zipCode,
          })}
          type="text"
          placeholder="___.__-___"
          ref={refMaskCEP}
        />
        {formik.errors.zipCode && formik.touched.zipCode && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.zipCode}
          </span>
        )}
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 space-y-6 lg:space-y-0">
        <div className="relative lg:col-span-8">
          <label className={styles.label} htmlFor="address">
            Endereço*
          </label>
          <input
            name="address"
            onChange={formik.handleChange}
            value={formik.values.Endereco}
            className={classNames(styles.input, {
              [styles.inputError]:
                formik.errors.address && formik.touched.address,
            })}
            type="text"
            placeholder="Digite seu endereço"
          />
          {formik.errors.address && formik.touched.address && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.address}
            </span>
          )}
        </div>
        <div className="relative lg:col-span-4">
          <label className={styles.label} htmlFor="number">
            Número*
          </label>
          <input
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            className={classNames(styles.input, {
              [styles.inputError]:
                formik.errors.number && formik.touched.number,
            })}
            type="text"
            placeholder="Digite aqui"
          />
          {formik.errors.number && formik.touched.number && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.number}
            </span>
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 space-y-6 lg:space-y-0">
        <div className="relative lg:col-span-8">
          <label className={styles.label} htmlFor="city">
            Cidade*
          </label>
          <input
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            className={classNames(styles.input, {
              [styles.inputError]: formik.errors.city && formik.touched.city,
            })}
            type="text"
            placeholder="Digite sua cidade"
          />
          {formik.errors.city && formik.touched.city && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.city}
            </span>
          )}
        </div>
        <div className="relative lg:col-span-4">
          <label className={styles.label} htmlFor="uf">
            UF*
          </label>
          <select
            name="uf"
            onChange={formik.handleChange}
            value={formik.values.uf}
            className={classNames(styles.select, {
              [styles.inputError]: formik.errors.uf && formik.touched.uf,
            })}
          >
            <option disabled selected>
              Selecione
            </option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="PR">PR</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
          {formik.errors.uf && formik.touched.uf && (
            <span
              className={classNames(
                'absolute -bottom-4 right-0 text-orange-bird-light',
                styles.label
              )}
            >
              {formik.errors.uf}
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <label className={styles.label} htmlFor="neighborhood">
          Bairro*
        </label>
        <input
          name="neighborhood"
          onChange={formik.handleChange}
          value={formik.values.neighborhood}
          className={classNames(styles.select, {
            [styles.inputError]:
              formik.errors.neighborhood && formik.touched.neighborhood,
          })}
          type="text"
          placeholder="Digite seu bairro"
        />
        {formik.errors.neighborhood && formik.touched.neighborhood && (
          <span
            className={classNames(
              'absolute -bottom-4 right-0 text-orange-bird-light',
              styles.label
            )}
          >
            {formik.errors.neighborhood}
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
            <option disabled selected value="Selecione">
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
        <div className="flex items-center space-x-2 mb-1">
          <label className={styles.label} htmlFor="manufacturingDate">
            Fabricação
          </label>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setTooltipManufacturingActive(!tooltipManufacturingActive)
            }}
          >
            <Help
              className={classNames({
                block: !tooltipManufacturingActive,
                hidden: tooltipManufacturingActive,
              })}
            />
            <HelpGreen
              className={classNames({
                block: tooltipManufacturingActive,
                hidden: !tooltipManufacturingActive,
              })}
            />
            <div
              className={classNames(
                'absolute top-[34px] lg:-top-2 -right-[214px] lg:-right-[300px] w-[278px] bg-green rounded p-4 z-10',
                {
                  block: tooltipManufacturingActive,
                  hidden: !tooltipManufacturingActive,
                }
              )}
            >
              <Polygon className="hidden lg:block absolute top-2 -left-4 w-5 h-4" />
              <PolygonTop className="lg:hidden absolute -top-4 left-[46px] w-5 h-4" />
              <h6 className="font-modern-condensed-medium font-semibold text-white mb-1">
                Fabricação
              </h6>
              <p className="font-lato-regular text-sm text-white mb-6">
                Insira a data de fabricação como mostrada no campo abaixo.
              </p>
              <div className="bg-white p-2">
                <p
                  className="text-green text-xs font-semibold
                "
                >
                  DATA DE FABRICAÇÃO / L:
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <div className="flex items-center space-x-2 mb-1">
          <label className={styles.label} htmlFor="validityDate">
            Validade
          </label>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setTooltipValidityActive(!tooltipValidityActive)
            }}
          >
            <Help
              className={classNames({
                block: !tooltipValidityActive,
                hidden: tooltipValidityActive,
              })}
            />
            <HelpGreen
              className={classNames({
                block: tooltipValidityActive,
                hidden: !tooltipValidityActive,
              })}
            />
            <div
              className={classNames(
                'absolute top-[34px] lg:-top-2 -right-[227px] lg:-right-[300px] w-[278px] bg-green rounded p-4 z-10',
                {
                  block: tooltipValidityActive,
                  hidden: !tooltipValidityActive,
                }
              )}
            >
              <Polygon className="hidden lg:block absolute top-2 -left-4 w-5 h-4" />
              <PolygonTop className="lg:hidden absolute -top-4 left-[33px] w-5 h-4" />
              <h6 className="font-modern-condensed-medium font-semibold text-white mb-1">
                Validade
              </h6>
              <p className="font-lato-regular text-sm text-white mb-6">
                Insira a validade do produto localizada no campo abaixo da sua
                embalagem.
              </p>
              <div className="bg-white p-2">
                <p className="text-green text-xs font-semibold">VALIDADE:</p>
              </div>
            </div>
          </div>
        </div>
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
        <div className="flex items-center space-x-2 mb-1">
          <label className={styles.label} htmlFor="batch">
            Lote
          </label>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setTooltipBatchActive(!tooltipBatchActive)
            }}
          >
            <Help
              className={classNames({
                block: !tooltipBatchActive,
                hidden: tooltipBatchActive,
              })}
            />
            <HelpGreen
              className={classNames({
                block: tooltipBatchActive,
                hidden: !tooltipBatchActive,
              })}
            />
            <div
              className={classNames(
                'absolute top-[34px] lg:-top-2 -right-[249px] lg:-right-[300px] w-[278px] bg-green rounded p-4 z-10',
                {
                  block: tooltipBatchActive,
                  hidden: !tooltipBatchActive,
                }
              )}
            >
              <Polygon className="hidden lg:block absolute top-2 -left-4 w-5 h-4" />
              <PolygonTop className="lg:hidden absolute -top-4 left-[11px] w-5 h-4" />
              <h6 className="font-modern-condensed-medium font-semibold text-white mb-1">
                Lote
              </h6>
              <p className="font-lato-regular text-sm text-white mb-6">
                Insira o lote do produto localizado no campo abaixo da sua
                embalagem.
              </p>
              <div className="bg-white p-2">
                <p
                  className="text-green text-xs font-semibold
                "
                >
                  DATA DE FABRICAÇÃO / L:
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <label className={styles.label} htmlFor="isFirstTime">
          É a primeira vez que consome este produto?
        </label>
        <select
          name="isFirstTime"
          onChange={formik.handleChange}
          value={formik.values.isFirstTime}
          className={styles.select}
        >
          <option selected disabled>
            Selecione
          </option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 space-y-6 lg:space-y-0">
        <div className="lg:col-span-6">
          <label className={styles.label} htmlFor="pointOfSaleName">
            Nome do ponto de venda
          </label>
          <input
            name="pointOfSaleName"
            value={formik.values.pointOfSaleName}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="Digite aqui"
          />
        </div>
        <div className="lg:col-span-6">
          <label className={styles.label} htmlFor="neighborhoodOfSale">
            Bairro do ponto de Vendas
          </label>
          <input
            name="neighborhoodOfSale"
            value={formik.values.neighborhoodOfSale}
            onChange={formik.handleChange}
            className={styles.input}
            type="text"
            placeholder="Digite aqui"
          />
        </div>
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
        <label className={styles.label} htmlFor="storageAtYourHome">
          Como foi armazenado na sua residência?
        </label>
        <input
          name="storageAtYourHome"
          value={formik.values.storageAtYourHome}
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

export default FormPpComplain
