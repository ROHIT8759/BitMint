"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowUpDown, RefreshCcw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [showLiquidationDialog, setShowLiquidationDialog] = useState(false)
  const { toast } = useToast()

  // Mock protocol stats
  const stats = {
    totalZbtcLocked: 125.75,
    totalZusdMinted: 4532500,
    activeWallets: 1243,
    collateralizationRatio: 166.5,
    liquidationEvents: 12,
  }

  // Mock at-risk positions
  const riskPositions = [
    { id: 1, address: "3rFd...7jKl", collateralValue: "$36,000", debt: "$22,500", ratio: "160%", status: "Warning" },
    { id: 2, address: "9Lk4...2pRt", collateralValue: "$18,200", debt: "$11,800", ratio: "154%", status: "Danger" },
    { id: 3, address: "7Plm...9nBv", collateralValue: "$52,400", debt: "$32,100", ratio: "163%", status: "Warning" },
  ]

  const handleSimulateLiquidation = () => {
    setShowLiquidationDialog(false)

    // Show success message
    toast({
      title: "Liquidation Simulated",
      description: "The liquidation process has been simulated successfully.",
      duration: 5000,
    })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-[#f0f0f0]/60 mt-1">Hackathon Demo Only</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-[#f0f0f0]/60 hover:text-[#39FF14]">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Protocol Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#2d2d2d] border-[#39FF14]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total zBTC Locked</CardTitle>
              <CardDescription>Protocol-wide collateral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalZbtcLocked.toLocaleString()} zBTC</div>
              <div className="text-sm text-[#f0f0f0]/60 mt-1">
                ≈ ${(stats.totalZbtcLocked * 60000).toLocaleString()} USD
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#2d2d2d] border-[#00FFFF]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total zUSD Minted</CardTitle>
              <CardDescription>Protocol-wide debt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalZusdMinted.toLocaleString()} zUSD</div>
              <div className="text-sm text-[#f0f0f0]/60 mt-1">≈ ${stats.totalZusdMinted.toLocaleString()} USD</div>
            </CardContent>
          </Card>
          <Card className="bg-[#2d2d2d] border-[#39FF14]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Protocol Health</CardTitle>
              <CardDescription>System-wide metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-[#f0f0f0]/60">Active Wallets</div>
                  <div className="text-xl font-bold">{stats.activeWallets.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-[#f0f0f0]/60">Avg. Collateral Ratio</div>
                  <div className="text-xl font-bold">{stats.collateralizationRatio}%</div>
                </div>
                <div>
                  <div className="text-sm text-[#f0f0f0]/60">Liquidation Events</div>
                  <div className="text-xl font-bold">{stats.liquidationEvents}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* At-Risk Positions */}
        <Card className="bg-[#2d2d2d] border-[#3d3d3d]">
          <CardHeader>
            <CardTitle>At-Risk Positions</CardTitle>
            <CardDescription>Vaults with collateralization ratio below 165%</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b-[#3d3d3d] hover:bg-[#2d2d2d]">
                  <TableHead>Address</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Collateral Value
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Debt (zUSD)</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      C-Ratio
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riskPositions.map((position) => (
                  <TableRow key={position.id} className="border-b-[#3d3d3d] hover:bg-[#3d3d3d]">
                    <TableCell>{position.address}</TableCell>
                    <TableCell>{position.collateralValue}</TableCell>
                    <TableCell>{position.debt}</TableCell>
                    <TableCell>{position.ratio}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${
                            position.status === "Warning"
                              ? "border-yellow-500 text-yellow-500"
                              : "border-red-500 text-red-500"
                          }
                        `}
                      >
                        {position.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-[#f0f0f0]/60">Showing {riskPositions.length} at-risk positions</p>
            <Button
              variant="destructive"
              className="bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500/30"
              onClick={() => setShowLiquidationDialog(true)}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Simulate Liquidation (Demo Only)
            </Button>
          </CardFooter>
        </Card>

        {/* Liquidation Dialog */}
        <Dialog open={showLiquidationDialog} onOpenChange={setShowLiquidationDialog}>
          <DialogContent className="bg-[#2d2d2d] border-[#3d3d3d]">
            <DialogHeader>
              <DialogTitle>Simulate Liquidation</DialogTitle>
              <DialogDescription>
                This will simulate the liquidation process for demonstration purposes only.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-500">Warning: Demo Feature</p>
                  <p className="text-sm text-[#f0f0f0]/80">
                    This is a demonstration feature for the hackathon. In a production environment, liquidations would
                    be handled automatically by the protocol based on market conditions and collateralization ratios.
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowLiquidationDialog(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleSimulateLiquidation}>
                Simulate Liquidation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
