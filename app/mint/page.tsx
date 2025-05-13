"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, HelpCircle, Info } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MintPage() {
  const [zbtcAmount, setZbtcAmount] = useState(0.1)
  const [zusdAmount, setZusdAmount] = useState(6000)
  const [ltv, setLtv] = useState(166.67)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Mock BTC price
  const btcPrice = 60000

  const handleZbtcChange = (value: number) => {
    setZbtcAmount(value)
    // Calculate zUSD amount (60% of collateral value)
    const newZusdAmount = Math.floor(value * btcPrice * 0.6)
    setZusdAmount(newZusdAmount)
    // Calculate LTV
    setLtv(Math.round(((value * btcPrice) / newZusdAmount) * 100 * 100) / 100)
  }

  const handleZusdChange = (value: number) => {
    setZusdAmount(value)
    // Calculate LTV
    setLtv(Math.round(((zbtcAmount * btcPrice) / value) * 100 * 100) / 100)
  }

  const handleSliderChange = (value: number[]) => {
    // Slider controls zUSD amount from 50% to 66.67% of max possible
    const maxZusd = zbtcAmount * btcPrice * 0.6667
    const minZusd = zbtcAmount * btcPrice * 0.5
    const newZusdAmount = Math.floor(minZusd + (value[0] / 100) * (maxZusd - minZusd))

    setZusdAmount(newZusdAmount)
    // Calculate LTV
    setLtv(Math.round(((zbtcAmount * btcPrice) / newZusdAmount) * 100 * 100) / 100)
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mint zUSD</h1>

        <Card className="bg-[#2d2d2d] border-[#39FF14]/20 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
          <CardHeader>
            <CardTitle>Lock zBTC to Mint zUSD</CardTitle>
            <CardDescription>
              Lock your zBTC as collateral to mint zUSD stablecoins. Maintain a healthy collateralization ratio to avoid
              liquidation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="zbtc-amount">zBTC Amount to Lock</Label>
                <span className="text-sm text-[#f0f0f0]/60">Available: 0.5 zBTC</span>
              </div>
              <div className="relative">
                <Input
                  id="zbtc-amount"
                  type="number"
                  value={zbtcAmount}
                  onChange={(e) => handleZbtcChange(Number.parseFloat(e.target.value) || 0)}
                  className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#39FF14]"
                  step={0.01}
                  min={0.01}
                  max={0.5}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#f0f0f0]/60">
                  zBTC
                </div>
              </div>
              <div className="text-sm text-[#f0f0f0]/60 text-right">
                ≈ ${(zbtcAmount * btcPrice).toLocaleString()} USD
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="zusd-amount">zUSD Amount to Mint</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5">
                        <HelpCircle className="h-4 w-4 text-[#f0f0f0]/60" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#3d3d3d] border-[#4d4d4d]">
                      <p>Maximum amount is 66.67% of your collateral value</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <Input
                  id="zusd-amount"
                  type="number"
                  value={zusdAmount}
                  onChange={(e) => handleZusdChange(Number.parseInt(e.target.value) || 0)}
                  className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#39FF14]"
                  step={100}
                  min={100}
                  max={Math.floor(zbtcAmount * btcPrice * 0.6667)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#f0f0f0]/60">
                  zUSD
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between">
                <Label>Collateralization Ratio (LTV)</Label>
                <span
                  className={`font-medium ${
                    ltv >= 170 ? "text-[#39FF14]" : ltv >= 155 ? "text-yellow-500" : "text-red-500"
                  }`}
                >
                  {ltv}%
                </span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
                className="[&>span]:bg-[#39FF14]"
              />
              <div className="flex justify-between text-xs text-[#f0f0f0]/60">
                <span>Safer: 200%</span>
                <span>Min: 150%</span>
              </div>
              <Progress
                value={ltv > 200 ? 100 : ((ltv - 100) / 100) * 100}
                className="h-2 bg-[#1e1e1e]"
                indicatorClassName={`
                  ${ltv >= 170 ? "bg-[#39FF14]" : ltv >= 155 ? "bg-yellow-500" : "bg-red-500"}
                `}
              />
            </div>

            <div className="bg-[#1e1e1e] p-3 rounded-md border border-[#3d3d3d] flex items-start gap-3">
              <Info className="h-5 w-5 text-[#00FFFF] mt-0.5 flex-shrink-0" />
              <div className="text-sm text-[#f0f0f0]/80">
                <p className="font-medium text-[#f0f0f0]">Liquidation Risk</p>
                <p>
                  Your position will be at risk of liquidation if the collateralization ratio falls below 150%. We
                  recommend maintaining at least 170% for safety.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
              size="lg"
              onClick={() => setShowConfirmation(true)}
              disabled={ltv < 150}
            >
              Confirm & Mint zUSD
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="bg-[#2d2d2d] border-[#3d3d3d]">
            <DialogHeader>
              <DialogTitle>Confirm Mint Transaction</DialogTitle>
              <DialogDescription>Please review the details before confirming your transaction.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Lock:</span>
                <span className="font-medium">{zbtcAmount} zBTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Mint:</span>
                <span className="font-medium">{zusdAmount} zUSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Collateralization Ratio:</span>
                <span
                  className={`font-medium ${
                    ltv >= 170 ? "text-[#39FF14]" : ltv >= 155 ? "text-yellow-500" : "text-red-500"
                  }`}
                >
                  {ltv}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Liquidation Price:</span>
                <span className="font-medium">${Math.floor(btcPrice * 0.75).toLocaleString()} per BTC</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                Cancel
              </Button>
              <Button
                className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
                onClick={() => {
                  // Handle mint transaction
                  setShowConfirmation(false)
                  // Show success message or redirect
                }}
              >
                Confirm Transaction
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
