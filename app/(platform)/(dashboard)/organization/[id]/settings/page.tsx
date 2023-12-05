import { OrganizationProfile } from '@clerk/nextjs'
import { NextPage } from 'next'

const OrganizationSettingPage: NextPage = () => {
  return (
    <div>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
            },
            card: {
              border: '1px solid #e5e5e5',
              boxShadow: 'none',
              width: '100%',
            },
          },
        }}
      />
    </div>
  )
}

export default OrganizationSettingPage
