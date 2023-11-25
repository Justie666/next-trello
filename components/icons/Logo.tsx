import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const textFont = Poppins({ subsets: ['latin'], weight: ['700'] })

export const Logo: FC = () => {
  return (
    <Link href='/'>
      <div className='flex items-center gap-1 transition-all hover:opacity-75'>
        <Image src='/logo.svg' alt='Logo' width={30} height={30} />
        <p
          className={cn(
            'hidden text-lg font-bold text-neutral-700 md:block',
            textFont.className,
          )}>
          Taskify
        </p>
      </div>
    </Link>
  )
}
