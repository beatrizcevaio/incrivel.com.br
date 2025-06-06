import { isAxiosError } from 'axios'

import { getSalesForceToken, sendSalesForceForm } from '~/services/salesforce'

const store = async (request, response) => {
  const contactFields = request.body

  const formBody = {
    keys: {
      email: contactFields.inputEmail,
    },
    values: {
      Nome: contactFields.inputName,
      Idade: contactFields.inputAge,
      Celular: contactFields.inputPhone,
      Estado: contactFields.inputUF,
      Aceite_de_politica: contactFields.inputMajority ? '1' : '0',
      Aceite_de_privacidade: contactFields.inputTerms ? '1' : '0',
    },
  }

  try {
    const token = await getSalesForceToken()
    await sendSalesForceForm(formBody, token)
    return response.send({
      error: false,
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (error) {
    const errorData = isAxiosError(error) ? error.response?.data : error.message
    // eslint-disable-next-line no-console
    console.error(errorData)
    return response.status(400).send({
      error: errorData,
      message: 'Erro interno, tente novamente mais tarde!',
    })
  }
}

export default {
  store,
}
