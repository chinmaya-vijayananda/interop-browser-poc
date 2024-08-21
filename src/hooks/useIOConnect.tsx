import { useContext } from 'react'
import { IOConnectContext } from '@interopio/react-hooks'
import { IOConnectDesktop } from '@interopio/desktop'

export const useIOConnect = () => {
  const ioConnect = useContext(IOConnectContext) as IOConnectDesktop.API
  return ioConnect
}

export default useIOConnect
