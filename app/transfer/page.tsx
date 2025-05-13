"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function TransferPage() {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState(100)
  const [message, setMessage] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { toast } = useToast()

  // Mock data
  const zusdBalance = 8750

  const handleSubmit = () => {
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    // Handle transfer transaction
    setShowConfirmation(false)

    // Show success message
    toast({
      title: "Payment Sent Successfully",
      description: `${amount} zUSD has been sent to ${recipient.substring(0, 6)}...${recipient.substring(recipient.length - 4)}`,
      duration: 5000,
    })

    // Reset form
    setRecipient("")
    setAmount(100)
    setMessage("")
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Transfer zUSD</h1>

        <Card className="bg-[#2d2d2d] border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <CardHeader>
            <CardTitle>Send zUSD Payment</CardTitle>
            <CardDescription>Transfer zUSD to another wallet address quickly and with minimal fees.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center p-3 bg-[#1e1e1e] rounded-md border border-[#3d3d3d]">
              <div>
                <div className="text-sm text-[#f0f0f0]/60">Available Balance</div>
                <div className="text-xl font-bold">{zusdBalance.toLocaleString()} zUSD</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:text-[#00FFFF]"
                onClick={() => setAmount(zusdBalance)}
              >
                Max
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <div className="relative">
                <Input
                  id="recipient"
                  placeholder="Solana wallet address"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#00FFFF] pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 text-[#f0f0f0]/60 hover:text-[#00FFFF] hover:bg-transparent"
                >
                  <QrCode className="h-4 w-4" />
                  <span className="sr-only">Scan QR Code</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="amount">Amount</Label>
                <span className="text-sm text-[#f0f0f0]/60">Max: {zusdBalance.toLocaleString()} zUSD</span>
              </div>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number.parseInt(e.target.value) || 0)}
                  className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#00FFFF]"
                  step={1}
                  min={1}
                  max={zusdBalance}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#f0f0f0]/60">
                  zUSD
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a note to this payment"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#1e1e1e] border-[#3d3d3d] focus-visible:ring-[#00FFFF] min-h-[80px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-[#00FFFF] to-[#39FF14] text-black hover:opacity-90"
              size="lg"
              onClick={handleSubmit}
              disabled={!recipient || amount <= 0 || amount > zusdBalance}
            >
              <Send className="mr-2 h-4 w-4" />
              Send Payment
            </Button>
          </CardFooter>
        </Card>

        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="bg-[#2d2d2d] border-[#3d3d3d]">
            <DialogHeader>
              <DialogTitle>Confirm Payment</DialogTitle>
              <DialogDescription>Please review the details before confirming your payment.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Recipient:</span>
                <span className="font-medium truncate max-w-[200px]">{recipient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Amount:</span>
                <span className="font-medium">{amount.toLocaleString()} zUSD</span>
              </div>
              {message && (
                <div className="flex flex-col gap-1">
                  <span className="text-[#f0f0f0]/60">Message:</span>
                  <span className="font-medium text-sm bg-[#1e1e1e] p-2 rounded-md">{message}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">Network Fee:</span>
                <span className="font-medium">~0.000005 SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f0f0f0]/60">New Balance:</span>
                <span className="font-medium">{(zusdBalance - amount).toLocaleString()} zUSD</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                Cancel
              </Button>
              <Button
                className="bg-gradient-to-r from-[#00FFFF] to-[#39FF14] text-black hover:opacity-90"
                onClick={handleConfirm}
              >
                Confirm Payment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
