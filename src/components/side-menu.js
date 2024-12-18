'use client'

import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'

import { LoadingSpinner } from '@/components/loading-spinner'
import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button.jsx'
import { useKeyPress } from '@/hooks/useKeyPress'
import { cn } from '@/lib/utils'
// const SubmitBookmarkDialog = dynamic(
//   () => import('@/components/submit-bookmark/dialog').then((mod) => mod.SubmitBookmarkDialog),
//   {
//     loading: () => <LoadingSpinner />,
//     ssr: false
//   }
// )

const keyCodePathnameMapping = {
  Digit1: '/',
  Digit2: '/projects',
  Digit3: '/testimonials',
  Digit4: '/stack',
  Digit5: '/journey',
  Digit6: '/workspace'
  // Digit2: '/writing',
  // Digit3: '/journey',
  // Digit4: '/stack',
  // Digit5: '/workspace',
  // Digit6: '/bookmarks'







}

export const SideMenu = ({ children, title, isInner }) => {
// export const SideMenu = ({ children, title, bookmarks = [], isInner }) => {
  const router = useRouter()
  const pathname = usePathname()
  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping))

  function onKeyPress(event) {
    const key = event.code
    const targetPathname = keyCodePathnameMapping[key]
    if (targetPathname && targetPathname !== pathname) router.push(targetPathname)
  }

  const isWritingPath = pathname.startsWith('/writing')

  // const isBookmarksPath = pathname.startsWith('/bookmarks')
  // const currentBookmark = bookmarks.find((bookmark) => `/bookmarks/${bookmark.slug}` === pathname)

  return (
    <ScrollArea
      className={cn(
        'hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r',
        isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72'
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-tight">{title}</span>
            {/* <div className="flex items-center gap-2"> */}
            {/* <div className="hidden this_is_the_upper_one">  */}
            <div className="this_is_the_upper_one"> 
            <Button variant="outline" size="xs" asChild>
                  <a
                    href="https://buymeacoffee.com/manmeets "
                    title="Support"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <GlassWaterIcon  size={16}   className="mr-2" /> */}
                    Support
                  </a>
                </Button>
              {/* {(isWritingPath || isBookmarksPath) && (
                <Button variant="outline" size="xs" asChild>
                  <a
                    href="https://buymeacoffee.com/manmeets "
                    title="Support"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlassWaterIcon  size={16}   className="mr-2" />  
                    Support
                  </a>
                </Button>
              )} */}
              {/* {isBookmarksPath && <SubmitBookmarkDialog bookmarks={bookmarks} currentBookmark={currentBookmark} />} */}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  )
}
