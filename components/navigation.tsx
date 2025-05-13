"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/mint",
      label: "Mint zUSD",
      active: pathname === "/mint",
    },
    {
      href: "/redeem",
      label: "Redeem BTC",
      active: pathname === "/redeem",
    },
    {
      href: "/transfer",
      label: "Transfer",
      active: pathname === "/transfer",
    },
    {
      href: "/history",
      label: "History",
      active: pathname === "/history",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d2d] bg-[#1e1e1e]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent">
              BitMint Pay
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-[#39FF14] ${
                  route.active ? "text-[#39FF14]" : "text-[#f0f0f0]/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden md:flex border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
          >
            Connect Wallet
          </Button>
          <Button
            variant="default"
            className="hidden md:flex bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
          >
            Mint zUSD
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1e1e1e] border-l border-[#2d2d2d]">
              <div className="flex flex-col gap-6 pt-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-[#39FF14] ${
                      route.active ? "text-[#39FF14]" : "text-[#f0f0f0]/60"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
                  >
                    Connect Wallet
                  </Button>
                  <Button
                    variant="default"
                    className="w-full bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
                  >
                    Mint zUSD
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
