import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/button'
import { NavbarWrapper } from '@/components/ui/navbar-wrapper'
import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <div className='flex items-center gap-4'>
        <Button size='sm' variant='outline' asChild>
          <Link href='/sign-in'>Login</Link>
        </Button>
        <Button size='sm' asChild>
          <Link href='/sign-up'>Get Taskify for free</Link>
        </Button>
      </div>
    </NavbarWrapper>
  )
}
