import { ReactNode } from 'react'
import { Logo } from './Logo'

function Navbar({ children }: { children: ReactNode }) {
  return (
    <nav className="flex justify-between px-4 py-2 border-b bg-background border-border items-center h-[60px]">
      <Logo />
      {children}
    </nav>
  )
}

function NavItems({ children }: { children: ReactNode }) {
  return <div className="flex gap-4 items-center">{children}</div>
}

Navbar.Root = Navbar
Navbar.Items = NavItems

export { Navbar }
