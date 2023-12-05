'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { Accordion } from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { NavItem } from './nav-item'

interface SidebarProps {
  storageKey?: string
}

export const Sidebar: FC<SidebarProps> = ({
  storageKey = 't-sidebar-state',
}) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  )

  const { organization: activeOrg, isLoaded: isOrgLoaded } = useOrganization()
  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key)
      }
      return acc
    },
    [],
  )

  const onExpand = (id: string) => {
    setExpanded(curr => ({
      ...curr,
      [id]: !expanded[id],
    }))
  }

  if (!isOrgLoaded || !isOrgListLoaded || userMemberships.isLoading) {
    return (
      <>
        <div className='mb-2 flex h-10 items-center justify-between'>
          <Skeleton className='h-full w-[50%]' />
          <Skeleton className='h-full w-10' />
        </div>

        <div className='space-y-2'>
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </>
    )
  }

  return (
    <>
      <div className='flex items-center justify-between text-sm font-medium'>
        <span className='pl-4'>Workspaces</span>
        <Button variant='ghost' asChild>
          <Link href='/select-org'>
            <Plus className='h-4 w-4' />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={defaultAccordionValue}
        className='space-y-2'>
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            onExpand={onExpand}
            // TODO fix
            organization={organization}
          />
        ))}
      </Accordion>
    </>
  )
}
// 27.36
