import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About BitMint Pay</h1>

        <div className="space-y-12">
          {/* How it works section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How BitMint Pay Works</h2>
            <p className="text-[#f0f0f0]/80 mb-6">
              BitMint Pay is a decentralized protocol that allows Bitcoin holders to mint stablecoins without selling
              their BTC. The system uses overcollateralization to ensure stability and security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-0">
              {/* Step 1 */}
              <Card className="bg-[#2d2d2d] border-[#3d3d3d] md:rounded-r-none relative">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRight className="h-6 w-6 text-[#39FF14]" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">1. Lock BTC</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Deposit your Bitcoin as collateral in the protocol.</CardDescription>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-[#2d2d2d] border-[#3d3d3d] md:rounded-l-none md:rounded-r-none relative">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRight className="h-6 w-6 text-[#39FF14]" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">2. Mint zBTC</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Receive zBTC tokens representing your locked Bitcoin.</CardDescription>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-[#2d2d2d] border-[#3d3d3d] md:rounded-l-none md:rounded-r-none relative">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRight className="h-6 w-6 text-[#39FF14]" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">3. Mint zUSD</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Use your zBTC as collateral to mint zUSD stablecoins.</CardDescription>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="bg-[#2d2d2d] border-[#3d3d3d] md:rounded-l-none md:rounded-r-none relative">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRight className="h-6 w-6 text-[#39FF14]" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">4. Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Use zUSD for payments, transfers, and transactions.</CardDescription>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="bg-[#2d2d2d] border-[#3d3d3d] md:rounded-l-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">5. Redeem</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Burn zUSD to unlock your Bitcoin collateral anytime.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What is zBTC section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What is zBTC</h2>
            <p className="text-[#f0f0f0]/80 mb-6">
              zBTC is a wrapped Bitcoin token on the Solana blockchain. It represents Bitcoin that has been locked in
              the BitMint protocol and allows for faster, cheaper transactions while maintaining the value of Bitcoin.
            </p>
            <Card className="bg-[#2d2d2d] border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-[#39FF14]">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>1:1 backed by Bitcoin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>Solana's fast and low-cost transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>Fully redeemable for BTC at any time</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-[#39FF14]">Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>Maintain Bitcoin exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>Faster settlement than on Bitcoin network</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                        <span>Programmable for DeFi applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What is zUSD section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What is zUSD</h2>
            <p className="text-[#f0f0f0]/80 mb-6">
              zUSD is a decentralized stablecoin backed by Bitcoin collateral. It maintains a stable value of $1 USD
              through overcollateralization and liquidation mechanisms.
            </p>
            <Card className="bg-[#2d2d2d] border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-[#00FFFF]">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>Pegged to $1 USD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>Overcollateralized by at least 150%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>No centralized issuer or custodian</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-[#00FFFF]">Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>Stable value for payments and savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>Backed by the most secure cryptocurrency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                        <span>Fast and low-cost transfers on Solana</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Solana section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Solana?</h2>
            <p className="text-[#f0f0f0]/80 mb-6">
              BitMint Pay leverages Solana's high-performance blockchain to provide a seamless payment experience with
              Bitcoin-backed stablecoins.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#2d2d2d] border-[#3d3d3d]">
                <CardHeader>
                  <CardTitle className="text-lg">High Throughput</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Solana can process thousands of transactions per second, making it ideal for a payment system.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-[#2d2d2d] border-[#3d3d3d]">
                <CardHeader>
                  <CardTitle className="text-lg">Low Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Transaction costs on Solana are a fraction of a cent, enabling microtransactions and frequent
                    payments.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-[#2d2d2d] border-[#3d3d3d]">
                <CardHeader>
                  <CardTitle className="text-lg">Composability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Solana's ecosystem allows for seamless integration with other DeFi protocols and applications.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Benefits of BitMint Pay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
                <h3 className="text-xl font-semibold mb-4 text-[#39FF14]">Fully Decentralized</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>No central authority or issuer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>Smart contract governed protocol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>Transparent and auditable</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
                <h3 className="text-xl font-semibold mb-4 text-[#00FFFF]">Non-custodial</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>You maintain control of your assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>Redeem your collateral at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>No counterparty risk</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
                <h3 className="text-xl font-semibold mb-4 text-[#39FF14]">Overcollateralized</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>Minimum 150% collateralization ratio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>Ensures stability of the system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span>Protects against market volatility</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3d3d3d]">
                <h3 className="text-xl font-semibold mb-4 text-[#00FFFF]">No KYC</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>Privacy-preserving by design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>No identity verification required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
                    <span>Accessible to anyone, anywhere</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="bg-gradient-to-r from-[#1e1e1e] to-[#2d2d2d] p-8 rounded-lg border border-[#3d3d3d] text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-[#f0f0f0]/80 mb-6 max-w-2xl mx-auto">
              Join BitMint Pay today and experience the future of Bitcoin-backed stablecoin payments on Solana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
                size="lg"
                asChild
              >
                <Link href="/dashboard">Launch App</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
                size="lg"
                asChild
              >
                <Link href="https://docs.example.com" target="_blank" rel="noreferrer">
                  Read Docs
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
