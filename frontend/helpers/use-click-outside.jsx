import { useEffect, useRef } from 'react'

// How to use
// import useOutsideClick from '~/helpers/use-click-outside'
// const reference = useOutsideClick(() => { // do something })
// <div ref={reference}>...</div>

const useOutsideClick = (callback) => {
  const reference = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (reference.current && !reference.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [reference]) // eslint-disable-line react-hooks/exhaustive-deps

  return reference
}

export default useOutsideClick
