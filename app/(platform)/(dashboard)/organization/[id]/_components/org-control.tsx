'use client'

import { useOrganizationList } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { FC, useEffect } from 'react'

export const OrgControl: FC = () => {
  const params = useParams()
  const { setActive } = useOrganizationList()

  useEffect(() => {
    if (!setActive) return

    setActive({
      organization: params.id as string,
    })
  }, [params.id, setActive])

  return null
}
