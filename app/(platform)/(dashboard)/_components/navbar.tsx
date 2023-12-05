import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/button'
import { NavbarWrapper } from '@/components/ui/navbar-wrapper'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <div className='flex items-center gap-4'>
        <MobileSidebar />
        <Logo />
        <Button variant='primary' size='sm' className='hidden md:block'>
          Create
        </Button>
        <Button
          variant='primary'
          size='sm'
          className='block rounded-sm md:hidden'>
          <Plus className='h-4 w-4' />
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton afterSignOutUrl='/' />
      </div>
    </NavbarWrapper>
  )
}
