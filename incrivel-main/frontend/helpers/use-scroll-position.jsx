import { useEffect, useState } from 'react'

/**
 * Example usage:
 * import useScrollPosition from '~/helpers/use-scroll-position'
 * const scrollPosition = useScrollPosition()
 * useEffect(() => {
 *   console.log(scrollPosition)
 * }, [scrollPosition])
 * @returns {Number} - The current scroll position
 */

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(
        typeof window.scrollY === 'undefined'
          ? window.pageYOffset
          : window.scrollY
      )
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export default useScrollPosition
