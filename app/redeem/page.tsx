"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function RedeemPage() {
  const [zusdAmount, setZusdAmount] = useState(1000)
  const [zbtcAmount, setZbtcAmount] = useState(0.0167)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Mock data
  const zusdBalance = 8750
  const lockedZbtc = 0.25
  const btcPrice = 60000

  const handleZusdChange = (value: number) => {
    setZusdAmount(value)
    // Calculate zBTC amount (1:60000 ratio)
    setZbtcAmount(Number((value / btcPrice).toFixed(4)))
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Redeem BTC</h1>

        <Card className="bg-[#2d2d2d] border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <CardHeader>
            <CardTitle>Burn zUSD to Redeem BTC</CardTitle>
            <CardDescription>Burn your zUSD stablecoins to unlock and redeem your zBTC collateral.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 bg-[#1e1e1e] rounded-md border border-[#3d3d3d]">
              <div className="flex-1">
                <div className="text-sm text-[#f0f0f0]/60">zUSD Balance</div>
                <div className="text-xl font-bold">{zusdBalance.toLocaleString()} zUSD</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#f0f0f0]/60">Locked zBTC</div>
                <div className="text-xl font-bold">{lockedZbtc} zBTC</div>
                <div className="text-xs text-[#f0f0f0]/60">≈ ${(lockedZbtc * btcPrice).toLocaleString()} USD</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="zusd-amount">zUSD Amount to Burn</Label>
                <span className="text-sm text-[#f0f0f0]/60">Max: {zusdBalance.toLocaleString()} zUSD</span>
              </div>
              <div className="relative">
                <Input
                  id="zusd-amount"
                  type="number"
                  value={zusdAmount}
                  onChange={(e) => handleZusdChange(Number.parseInt(e.target.value) || 0)}
                  className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#00FFFF]"
                  step={100}
                  min={100}
                  max={zusdBalance}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#f0f0f0]/60">
                  zUSD
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zbtc-amount">zBTC Amount to Receive</Label>
              <div className="relative">
                <Input
                  id="zbtc-amount"
                  type="number"
                  value={zbtcAmount}
                  readOnly
                  className="bg-[#1e1e1e] border-[#3d3d3d] opacity-70"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#f0f0f0]/60">
                  zBTC
                </div>
              </div>
              <div className="text-sm text-[#f0f0f0]/60 text-right">
                ≈ ${(zbtcAmount * btcPrice).toLocaleString()} USD
              </div>
            </div>

            <div className="bg-[#1e1e1e] p-3 rounded-md border border-[#3d3d3d] flex items-start gap-3">
              <Info className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
              <div className="text-sm text-[#f0f0f0]/80">
                <p className="font-medium text-[#f0f0f0]">Redemption Process</p>
                <p>
                  When you redeem, your zUSD is burned and the equivalent amount of zBTC is unlocked from your vault.
                  This process is irreversible.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-[#00FFFF] to-[#39FF14] text-black hover:opacity-90"
              size="lg"
              onClick={() => setShowConfirmation(true)}
              disabled={zusdAmount <= 0 || zusdAmount > zusdBalance}
            >
              Redeem & Unlock BTC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="bg-[#2d2d2d] border-[#3d3d3d]">
            <DialogHeader>
              <DialogTitle>Confirm Redemption</DialogTitle>
              <DialogDescription>Please review the details before confirming your redemption.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Burn:</span>
                <span className="font-medium">{zusdAmount.toLocaleString()} zUSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Receive:</span>
                <span className="font-medium">{zbtcAmount} zBTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">New zUSD Balance:</span>
                <span className="font-medium">{(zusdBalance - zusdAmount).toLocaleString()} zUSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">New Locked zBTC:</span>
                <span className="font-medium">{(lockedZbtc - zbtcAmount).toFixed(4)} zBTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Status:</span>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/50">Ready to Process</Badge>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                Cancel
              </Button>
              <Button
                className="bg-gradient-to-r from-[#00FFFF] to-[#39FF14] text-black hover:opacity-90"
                onClick={() => {
                  // Handle redemption transaction
                  setShowConfirmation(false)
                  // Show success message or redirect
                }}
              >
                Confirm Redemption
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
