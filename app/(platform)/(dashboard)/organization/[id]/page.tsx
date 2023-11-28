import { auth } from '@clerk/nextjs'
import { NextPage } from 'next'

const OrganizationIdPage: NextPage = () => {
  const { userId, orgId } = auth()

  return <div>org: {orgId}</div>
}

export default OrganizationIdPage
