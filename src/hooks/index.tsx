import React from 'react'

import { ExampleProvider } from './example'

export const Providers: React.FC = ({ children }) => {
  return <ExampleProvider>{children}</ExampleProvider>
}
