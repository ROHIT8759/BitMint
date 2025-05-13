import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Github, MessageCircle, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b border-[#2d2d2d]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Spend Bitcoin without selling it
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-[#f0f0f0]/60 md:text-2xl">
                <span className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent font-semibold">
                  zBTC to zUSD
                </span>{" "}
                powered by Solana
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
                variant="outline"
                size="lg"
              >
                Connect Wallet
              </Button>
              <Button className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90" size="lg">
                Mint zUSD
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-[#f0f0f0] hover:text-[#39FF14] hover:bg-transparent"
              >
                <Link href="/dashboard">
                  Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-[#2d2d2d] border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              <CardHeader>
                <CardTitle className="text-[#39FF14]">No KYC</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#f0f0f0]/80">
                  Fully decentralized protocol with no identity verification required. Your privacy is preserved.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#2d2d2d] border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <CardHeader>
                <CardTitle className="text-[#00FFFF]">Bitcoin-Backed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#f0f0f0]/80">
                  Every zUSD is backed by Bitcoin collateral, ensuring stability and trust in the system.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#2d2d2d] border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              <CardHeader>
                <CardTitle className="text-[#39FF14]">Low Fees on Solana</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#f0f0f0]/80">
                  Leverage Solana's high throughput and low transaction costs for efficient payments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#2d2d2d] py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-[#f0f0f0]/60 md:text-left">
            &copy; {new Date().getFullYear()} BitMint Pay. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#f0f0f0]/60 hover:text-[#39FF14]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://docs.example.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#f0f0f0]/60 hover:text-[#39FF14]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="sr-only">Docs</span>
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="text-[#f0f0f0]/60 hover:text-[#39FF14]"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#f0f0f0]/60 hover:text-[#39FF14]"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
