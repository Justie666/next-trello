import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Medal } from 'lucide-react'
import { NextPage } from 'next'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})

const MarketingPage: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm'>
          <Medal className='mr-2 h-6 w-6' />
          No 1 task managment
        </div>
        <h1
          className={cn(
            'mt-4 text-center text-3xl text-neutral-800 md:text-6xl',
            textFont.className,
          )}>
          Taskify helps team move
        </h1>
        <div
          className={cn(
            'mt-6 w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 pb-4 pt-2 text-3xl text-white md:text-6xl',
            textFont.className,
          )}>
          work forward
        </div>
      </div>
      <div className='mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl'>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className='mt-6' size='lg' asChild>
        <Link href='/sign-up'>Get Taskify for free</Link>
      </Button>
    </div>
  )
}

export default MarketingPage
