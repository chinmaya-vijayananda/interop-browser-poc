'use client'
import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'
import useDocumentTitle from '@/hooks/useDocumentTitle'
const APP_PROVIDER = dynamic(() => import('@/contexts/AppProvider'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useDocumentTitle('Your App/Page Title')
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen min-w-screen bg-neutral_background_medium'>
          <APP_PROVIDER>
            <Layout>{children}</Layout>
          </APP_PROVIDER>
        </div>
      </body>
    </html>
  )
}
