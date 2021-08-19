import React, { createContext, useContext } from 'react'

interface ExampleContextData {}

const ExampleContext = createContext<ExampleContextData>(
  {} as ExampleContextData
)

export const ExampleProvider: React.FC = ({ children }) => {
  return (
    <ExampleContext.Provider value={{}}>{children}</ExampleContext.Provider>
  )
}

export function useExample(): ExampleContextData {
  const context = useContext(ExampleContext)

  if (!context) {
    throw new Error('useExample must be used whitin an ExampleProvider')
  }

  return context
}
