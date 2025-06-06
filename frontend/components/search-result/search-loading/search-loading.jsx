import React from 'react'

import Image from '~/components/image'

const SearchLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-20">
      <Image
        className="w-14 h-14"
        src="/images/rolling.gif"
        width="1"
        height="1"
      />
    </div>
  )
}

export default SearchLoading
