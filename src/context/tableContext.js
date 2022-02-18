import { createContext, useContext, useEffect, useState } from "react";

const TableContext = createContext()


const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [table, setTable] = useState([])

 
  const fetchData = async() => {
    setIsLoading(true)
    try {
     const response = await fetch('http://demo1030918.mockable.io/', {
          headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
          }
      })
      const data = await response.json()
      setTable(data)
      setIsLoading(false)
    } catch (error) {
       console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
  fetchData()
},[])
  

  return (
    <TableContext.Provider
      value={{
        table,
        isLoading,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export const useGlobalContext = () => useContext(TableContext)

export { TableContext, AppProvider }
