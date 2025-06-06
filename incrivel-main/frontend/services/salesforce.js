import Axios from 'axios'

const TOKEN_API =
  'https://mczy4z4pr0jrrrmchxtpzh9kj180.auth.marketingcloudapis.com/v2/token'
const FORM_API =
  'https://mczy4z4pr0jrrrmchxtpzh9kj180.rest.marketingcloudapis.com/hub/v1/dataevents/key:INCRIVEL/rowset'

// .ENV
// SALESFORCE_CLIENT_ID
// SALESFORCE_CLIENT_SECRET
// SALESFORCE_ACCOUNT_ID
/**
 * @return {Promise<string>} token
 */
export const getSalesForceToken = async () => {
  const body = {
    client_id: 'ms9opbqzid1l4pediw3i189n',
    client_secret: 'zdHIm5jrdNtLB3K55DzVZ2UG',
    account_id: '110005209',
    grant_type: 'client_credentials',
    scope:
      'email_read email_write email_send data_extensions_read data_extensions_write',
  }

  const response = await Axios.post(TOKEN_API, body)

  if (!response.data?.access_token) {
    throw new Error('Token not Found')
  }

  return response.data.access_token
}

/**
 * @typedef FormValues
 * @type {object}
 * @property {object} keys
 * @property {object} values
 */

/**
 * @param {FormValues} values
 * @param {string} token
 */
export const sendSalesForceForm = async (values, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  await Axios.post(FORM_API, [values], config)
}
