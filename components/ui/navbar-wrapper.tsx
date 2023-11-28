import { FC, PropsWithChildren } from 'react'

export const NavbarWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className='fixed top-0 flex h-14 w-full items-center border-b bg-white shadow-sm'>
      <div className='container flex items-center justify-between'>
        {children}
      </div>
    </nav>
  )
}
