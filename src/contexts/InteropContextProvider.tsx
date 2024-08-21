import Loader from '@/components/loader/Loader'
import ioConnectDesktop from '@interopio/desktop'
import { IOConnectProvider } from '@interopio/react-hooks'
import IOWorkspaces from '@interopio/workspaces-api'
import ioConnectBrowser from '@interopio/browser'

interface Props {
  children: React.ReactNode
}

const InteropContextProvider = ({ children }: Props) => {
  return (
    <IOConnectProvider
      fallback={<Loader size={104} loadingText={''} isFullPageLoader={true} />}
      settings={{
        desktop: {
          factory: ioConnectDesktop,
          config: {
            channels: true,
            appManager: 'full',
            layouts: 'full',
            libraries: [IOWorkspaces],
          },
        },
        browser: {
          factory: ioConnectBrowser,
          config: {
            libraries: [IOWorkspaces],
          },
        },
      }}
    >
      {children}
    </IOConnectProvider>
  )
}
export default InteropContextProvider
