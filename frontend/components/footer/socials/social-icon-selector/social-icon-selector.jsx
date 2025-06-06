import React from 'react'

import FacebookIcon from '~/icons/facebook.svg'
import InstagramIcon from '~/icons/instagram.svg'
import LinkedinIcon from '~/icons/linkedin.svg'
import ThreadsIcon from '~/icons/threads.svg'
import TiktokIcon from '~/icons/tiktok.svg'
import TwitterIcon from '~/icons/twitter.svg'
import WhatsappIcon from '~/icons/whatsapp.svg'

const SocialIconSelector = ({ socialMedia }) => {
  function renderSwitch() {
    switch (socialMedia) {
      case 'facebook':
        return <FacebookIcon className="w-[18px] h-[18px]" />
      case 'instagram':
        return <InstagramIcon className="w-[18px] h-[18px]" />
      case 'linkedin':
        return <LinkedinIcon className="w-[18px] h-[18px]" />
      case 'twitter':
        return <TwitterIcon className="w-[18px] h-[18px]" />
      case 'tiktok':
        return <TiktokIcon className="w-[18px] h-[18px]" />
      case 'whatsapp':
        return <WhatsappIcon className="w-[18px] h-[18px]" />
      case 'threads':
        return <ThreadsIcon className="w-[18px] h-[18px]" />
      default:
        return ''
    }
  }

  return renderSwitch()
}

export default SocialIconSelector
