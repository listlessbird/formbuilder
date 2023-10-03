import { Navbar } from '@/components/Nav'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <Navbar.Root>
        <Navbar.Items>
          <ThemeSwitcher />
        </Navbar.Items>
      </Navbar.Root>
      <main className="flex flex-grow h-full items-center justify-center">
        {children}
      </main>
    </div>
  )
}
