import { Sidebar } from '../_components/sidebar'

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='container pt-20 md:pt-24'>
      <div className='flex gap-7'>
        <div className='hidden w-64 shrink-0 md:block'>
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}
