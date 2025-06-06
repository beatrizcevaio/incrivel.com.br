import React from 'react'

import AnnouncementIcon from '~/icons/announcement.svg'
import BoltIcon from '~/icons/bolt.svg'
import BookIcon from '~/icons/book.svg'
import ChefIcon from '~/icons/chef.svg'
import ClipboardIcon from '~/icons/clipboard.svg'
import CookIcon from '~/icons/cook.svg'
import DesktopIcon from '~/icons/desktop.svg'
// import Location from '~/icons/location.svg'
import MusicIcon from '~/icons/music.svg'
import SunIcon from '~/icons/sun.svg'
import TicketIcon from '~/icons/ticket.svg'

const CategoryIconSelector = ({ category }) => {
  function renderSwitch() {
    switch (category) {
      case 'receitas':
        return <CookIcon className="w-[12px] h-[10px]" />
      case 'arte':
        return <TicketIcon className="w-[12px] h-[10px]" />
      case 'viagem':
        return <TicketIcon className="w-[12px] h-[10px]" />
      case 'inovacao':
        return <BoltIcon className="w-[12px] h-[10px]" />
      case 'sustentabilidade':
        return <SunIcon className="w-[12px] h-[10px]" />
      case 'cultura-pop':
        return <DesktopIcon className="w-[12px] h-[10px]" />
      case 'dicas':
        return <CookIcon className="w-[12px] h-[10px]" />
      case 'eventos':
        return <AnnouncementIcon className="w-[12px] h-[10px]" />
      case 'restaurantes':
        return <ChefIcon className="w-[12px] h-[10px]" />
      case 'filmes-e-series':
        return <DesktopIcon className="w-[12px] h-[10px]" />
      case 'mitos-e-verdades':
        return <BookIcon className="w-[12px] h-[10px]" />
      case 'musica':
        return <MusicIcon className="w-[12px] h-[10px]" />
      case 'noticias':
        return <ClipboardIcon className="w-[12px] h-[10px]" />
      default:
        return <CookIcon className="w-[12px] h-[10px]" />
    }
  }

  return renderSwitch()
}

export default CategoryIconSelector
