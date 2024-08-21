# Changes needed to be done in the React / Next js Apps in order to work into Browser Interop.io

### Add new package
```
npm install @interopio/browser
```
### Update the InteropContextProvider.tsx file

```jsx
// We need to add few lines while creating Interop Provider in an Next/React App.

import Loader from '@/components/loader/Loader'
import ioConnectDesktop from '@interopio/desktop'
import { IOConnectProvider } from '@interopio/react-hooks'
import IOWorkspaces from '@interopio/workspaces-api'
import ioConnectBrowser from '@interopio/browser' // Add new package '@interopio/browser'

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
        // To Support Interop IO on Browser below config has to be added
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

```