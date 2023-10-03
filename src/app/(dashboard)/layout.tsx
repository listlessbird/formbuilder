import { Logo } from '@/components/Logo'
import { Navbar } from '@/components/Nav'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <Navbar.Root>
        <Logo />
        <Navbar.Items>
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </Navbar.Items>
      </Navbar.Root>
      <main className="flex flex-grow w-full">{children}</main>
    </div>
  )
}
