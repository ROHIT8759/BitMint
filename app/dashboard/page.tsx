"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Copy, ExternalLink, RefreshCcw, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState("8xzt...3kfP")
  const [collateralizationRatio, setCollateralizationRatio] = useState(175)

  // Mock transaction data
  const transactions = [
    { id: 1, type: "Mint", amount: "500 zUSD", date: "2023-05-12", status: "Completed" },
    { id: 2, type: "Transfer", amount: "120 zUSD", date: "2023-05-10", status: "Completed" },
    { id: 3, type: "Redeem", amount: "0.05 BTC", date: "2023-05-08", status: "Completed" },
    { id: 4, type: "Mint", amount: "300 zUSD", date: "2023-05-05", status: "Completed" },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Wallet Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center mt-2 text-[#f0f0f0]/60">
              <span>Connected: {walletAddress}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-1 text-[#f0f0f0]/60 hover:text-[#39FF14]">
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy address</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-[#f0f0f0]/60 hover:text-[#39FF14]">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
            >
              Disconnect
            </Button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#2d2d2d] border-[#39FF14]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">zBTC Balance</CardTitle>
              <CardDescription>Locked as collateral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.25 zBTC</div>
              <div className="text-sm text-[#f0f0f0]/60 mt-1">≈ $15,250.00</div>
            </CardContent>
          </Card>
          <Card className="bg-[#2d2d2d] border-[#00FFFF]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">zUSD Balance</CardTitle>
              <CardDescription>Available to spend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,750 zUSD</div>
              <div className="text-sm text-[#f0f0f0]/60 mt-1">≈ $8,750.00</div>
            </CardContent>
          </Card>
          <Card className="bg-[#2d2d2d] border-[#39FF14]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Vault Health</CardTitle>
              <CardDescription>Collateralization ratio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">{collateralizationRatio}%</div>
                <Badge
                  variant="outline"
                  className={`
                    ${
                      collateralizationRatio >= 170
                        ? "border-green-500 text-green-500"
                        : collateralizationRatio >= 155
                          ? "border-yellow-500 text-yellow-500"
                          : "border-red-500 text-red-500"
                    }
                  `}
                >
                  {collateralizationRatio >= 170 ? "Healthy" : collateralizationRatio >= 155 ? "Warning" : "At Risk"}
                </Badge>
              </div>
              <Progress
                value={collateralizationRatio > 200 ? 100 : ((collateralizationRatio - 100) / 100) * 100}
                className="h-2 bg-[#1e1e1e]"
                indicatorClassName={`
                  ${
                    collateralizationRatio >= 170
                      ? "bg-[#39FF14]"
                      : collateralizationRatio >= 155
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }
                `}
              />
              <div className="flex justify-between text-xs text-[#f0f0f0]/60 mt-1">
                <span>Min: 150%</span>
                <span>Target: 180%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90"
            size="lg"
            asChild
          >
            <Link href="/mint">
              Mint zUSD
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
            size="lg"
            asChild
          >
            <Link href="/redeem">
              Redeem BTC
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:text-[#00FFFF]"
            size="lg"
            asChild
          >
            <Link href="/transfer">
              <Send className="mr-2 h-4 w-4" />
              Send zUSD
            </Link>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="mt-4">
          <Tabs defaultValue="recent" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Transactions</h2>
              <TabsList className="bg-[#2d2d2d]">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="all">All Transactions</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="recent">
              <Card className="bg-[#2d2d2d] border-[#2d2d2d]">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-[#3d3d3d] hover:bg-[#2d2d2d]">
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((tx) => (
                        <TableRow key={tx.id} className="border-b-[#3d3d3d] hover:bg-[#3d3d3d]">
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`
                                ${
                                  tx.type === "Mint"
                                    ? "border-[#39FF14] text-[#39FF14]"
                                    : tx.type === "Transfer"
                                      ? "border-[#00FFFF] text-[#00FFFF]"
                                      : "border-orange-500 text-orange-500"
                                }
                              `}
                            >
                              {tx.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{tx.amount}</TableCell>
                          <TableCell>{tx.date}</TableCell>
                          <TableCell>{tx.status}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">View transaction</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="all">
              <Card className="bg-[#2d2d2d] border-[#2d2d2d]">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center py-8">
                    <p className="text-[#f0f0f0]/60">View all your transactions in the history page</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
                      asChild
                    >
                      <Link href="/history">
                        View Transaction History
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
