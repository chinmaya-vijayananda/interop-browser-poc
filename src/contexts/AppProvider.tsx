import React from 'react'
import InteropContextProvider from '@/contexts/InteropContextProvider'
import { electronCheck } from '@/functions/electronCheck'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // if (electronCheck()) {
  // }
  return <InteropContextProvider>{children}</InteropContextProvider>
}

export default AppProvider
