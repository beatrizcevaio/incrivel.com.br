import React, { createContext, useEffect, useState } from 'react'

import { getMenusData } from '~/services/menus'
import { getOptionsData } from '~/services/options'

const initialState = {
  data: {
    menus: {},
    options: {},
  },
}

const GlobalContext = createContext(initialState)

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const fetchData = async () => {
      const responseMenus = await getMenusData()
      const responseOptions = await getOptionsData()

      setState({
        ...state,
        data: {
          ...state.data,
          menus: responseMenus.data,
          options: responseOptions.data,
        },
      })
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GlobalContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContextProvider }

export default GlobalContext
