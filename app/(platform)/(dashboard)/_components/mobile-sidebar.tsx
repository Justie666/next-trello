'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useMobileSidebarStore } from '@/hooks'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { Sidebar } from './sidebar'

export const MobileSidebar: FC = () => {
  const pathname = usePathname()
  const { isOpen, onClose, onOpen } = useMobileSidebarStore()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose()
  }, [onClose, pathname])

  if (!isMounted) return null

  return (
    <>
      <Button
        onClick={onOpen}
        size='sm'
        variant='ghost'
        className='block md:hidden'>
        <Menu className='h-4 w-4' />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side='left' className='p-2 pt-10'>
          <Sidebar storageKey='t-sidebar-mobile-state' />
        </SheetContent>
      </Sheet>
    </>
  )
}
