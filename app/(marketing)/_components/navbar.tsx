import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = () => {
  return (
    <div className='fixed top-0 flex h-14 w-full border-b bg-white shadow-sm'>
      <div className='container flex items-center justify-between'>
        <Logo />
        <div className='flex items-center gap-4'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/sign-up'>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
