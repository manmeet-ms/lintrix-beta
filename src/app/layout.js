import '@/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { sharedMetadata } from '@/app/shared-metadata'
import { MenuContent } from '@/components/menu-content'
import { SideMenu } from '@/components/side-menu'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { PROFILES } from '@/lib/constants'

export default async function RootLayout({ children }) {

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
          {/* {isEnabled && (
            <div className="absolute inset-x-0 bottom-0 z-50 flex h-12 w-full items-center justify-center bg-green-500 text-center text-sm font-medium text-white">
              <div className="flex items-center gap-2">
                <EyeIcon size={16} />
                <span>Draft mode is enabled</span>
              </div>
            </div>
          )} */}
          <div className="lg:flex">
            <SideMenu className="relative hidden lg:flex">
              <MenuContent />
            </SideMenu>
            <div className="flex flex-1">{children}</div>
          </div>
        </main>
        <TailwindIndicator />
        <SpeedInsights />


      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://manmeets.vercel.app'),
  robots: {
    index: true,
    follow: true
  },
  title: {
    default: sharedMetadata.title,
    template: `%s — ${sharedMetadata.title}`
  },
  description: sharedMetadata.description,
  keywords: ['Manmeet Singh', 'Manmeet Singh', 'manmeet dev', 'manmeets.vercel.app'],
  openGraph: {
    title: {
      default: sharedMetadata.title,
      template: `%s — ${sharedMetadata.title}`
    },
    description: sharedMetadata.description,
    alt: sharedMetadata.title,
    type: 'website',
    url: 'https://manmeets.vercel.app',
    siteName: sharedMetadata.title,
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: `@${PROFILES.twitter.username}`,
  //   creator: `@${PROFILES.twitter.username}`
  // },
  other: {
    pinterest: 'nopin'
  }
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1
}
