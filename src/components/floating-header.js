'use client'

import { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon, GlassWater, GlassWaterIcon, RadioIcon } from 'lucide-react'

import { Button } from '@/components/ui/button.jsx'
import { LoadingSpinner } from '@/components/loading-spinner'
const MobileDrawer = dynamic(() => import('@/components/mobile-drawer').then((mod) => mod.MobileDrawer))

import { SCROLL_AREA_ID, MOBILE_SCROLL_THRESHOLD } from '@/lib/constants'

export const FloatingHeader = memo(({ scrollTitle, title, goBackLink, bookmarks, currentBookmark, children }) => {
  const [transformValues, setTransformValues] = useState({ translateY: 0, opacity: scrollTitle ? 0 : 1 })
  const pathname = usePathname()
  const isWritingIndexPage = pathname === '/writing'
  const isProjectsIndexPage = pathname === '/projects'
  const isWorkspaceIndexPage = pathname === '/workspace'
  const isWritingPath = pathname.startsWith('/writing')
  const isProjectPath = pathname.startsWith('/project')
  const isWorkspacePath = pathname.startsWith('/workspace')

  useEffect(() => {
    const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`)

    const onScroll = (e) => {
      const scrollY = e.target.scrollTop

      const translateY = Math.max(100 - scrollY, 0)
      const opacity = Math.min(
        Math.max(
          ((scrollY - MOBILE_SCROLL_THRESHOLD * (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(2),
          0
        ),
        1
      )

      setTransformValues({ translateY, opacity })
    }

    if (scrollTitle) {
      scrollAreaElem?.addEventListener('scroll', onScroll, {
        passive: true
      })
    }
    return () => scrollAreaElem?.removeEventListener('scroll', onScroll)
  }, [scrollTitle])

  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex size-full items-center px-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-1">
            {goBackLink ? (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link href={goBackLink} title="Go back">
                  <ArrowLeftIcon size={16} />
                </Link>
              </Button>
            ) : (
              <MobileDrawer />
            )}
            <div className="flex flex-1 items-center justify-between">
              {scrollTitle && (
                <span
                  className="line-clamp-2 font-semibold tracking-tight"
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {title && (
                <Balancer ratio={0.35}>
                  <span className="line-clamp-2 font-semibold tracking-tight">{title}</span>
                </Balancer>
              )}
              {(isWritingIndexPage  || isWorkspaceIndexPage) && (
                <div className="flex items-center gap-2">
                <Button variant="outline" size="xs" asChild>
                      <a
                        href="https://buymeacoffee.com/manmeets"
                        title="Support"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support
                      </a>
                    </Button>
                </div>
                )}
              {(isProjectsIndexPage) && (
                <div className="flex items-center gap-2">
                <Button variant="outline" size="xs" asChild>
                      <a
                        href="https://buymeacoffee.com/manmeets"
                        title="Support"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    </Button>
                </div>
                )}

             
            </div>
          </div>
          {/* This is a hack to show writing views with framer motion reveal effect */}
          {scrollTitle && isWritingPath && <div className="flex min-w-[50px] justify-end">{children}</div>}
        </div>
      </div>
    </header>
  )
})
