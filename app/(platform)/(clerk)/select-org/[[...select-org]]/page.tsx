import { OrganizationList } from '@clerk/nextjs'
import { NextPage } from 'next'

const SelectOrganizationPage: NextPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl='/organization/:id'
      afterSelectOrganizationUrl='/organization/:id'
    />
  )
}

export default SelectOrganizationPage
