import React from 'react'
import InteropContextProvider from '@/contexts/InteropContextProvider'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <InteropContextProvider>{children}</InteropContextProvider>
}

export default AppProvider
