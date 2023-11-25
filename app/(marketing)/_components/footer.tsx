import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/button'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <div className='fixed bottom-0 flex h-14 w-full border-t bg-slate-100'>
      <div className='container flex items-center justify-between'>
        <Logo />
        <div className='flex items-center gap-4'>
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}
