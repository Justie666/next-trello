'use client'

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import type { OrganizationResource } from '@clerk/types'
import { AccordionContent } from '@radix-ui/react-accordion'
import { Activity, CreditCard, Layout, Settings } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

interface NavItemProps {
  isActive: boolean
  isExpanded: boolean
  onExpand: (id: string) => void
  organization: OrganizationResource
}

type RouteType = {
  label: string
  icon: JSX.Element
  href: string
}

export const NavItem = ({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const routes: RouteType[] = [
    {
      label: 'Boards',
      icon: <Layout className='mr-2 h-4 w-4' />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className='mr-2 h-4 w-4' />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className='mr-2 h-4 w-4' />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className='mr-2 h-4 w-4' />,
      href: `/organization/${organization.id}/billing`,
    },
  ]

  const onClick = (href: string) => {
    router.push(href)
  }

  return (
    <AccordionItem
      value={organization.id}
      className='border-none text-neutral-700'>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'rounded-md p-1.5 no-underline transition-all hover:bg-neutral-500/10 hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700',
        )}>
        <div className='flex items-center gap-2'>
          <div className='relative h-7 w-7'>
            <Image
              fill
              src={organization.imageUrl}
              alt='organization'
              className='rounded-sm object-cover'
            />
          </div>
          <span className='text-sm font-medium'>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='flex flex-col gap-1 pt-1'>
        {routes.map(route => (
          <Button
            key={route.href}
            size='sm'
            onClick={() => onClick(route.href)}
            variant='ghost'
            className={cn(
              'w-full justify-start pl-10 font-normal',
              pathname === route.href && 'bg-sky-500/10 text-sky-700',
            )}>
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className='flex h-10 items-center gap-2'>
      <Skeleton className='h-full w-10 shrink-0' />
      <Skeleton className='h-full w-full' />
    </div>
  )
}
