import contact from 'controllers/contact'
import nextConnect from 'next-connect'

import { getCors, getOnNoMatchHandle } from '~/utils/request'

const router = nextConnect({
  // Handle any other HTTP method
  onNoMatch: getOnNoMatchHandle,
})

router.use(getCors())
router.post(contact.store)

export default router
