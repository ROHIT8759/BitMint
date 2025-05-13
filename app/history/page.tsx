"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown, ExternalLink, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HistoryPage() {
  const [filterType, setFilterType] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<string | null>(null)

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: "Mint",
      amount: "500 zUSD",
      date: "2023-05-12 14:32",
      status: "Completed",
      address: "8xzt...3kfP",
      txHash: "7Yx2...9pQr",
    },
    {
      id: 2,
      type: "Transfer",
      amount: "120 zUSD",
      date: "2023-05-10 09:15",
      status: "Completed",
      address: "3rFd...7jKl",
      txHash: "2Zx9...4mNb",
    },
    {
      id: 3,
      type: "Redeem",
      amount: "0.05 BTC",
      date: "2023-05-08 18:45",
      status: "Completed",
      address: "8xzt...3kfP",
      txHash: "9Lk4...2pRt",
    },
    {
      id: 4,
      type: "Mint",
      amount: "300 zUSD",
      date: "2023-05-05 11:20",
      status: "Completed",
      address: "8xzt...3kfP",
      txHash: "5Gh7...1qWe",
    },
    {
      id: 5,
      type: "Transfer",
      amount: "75 zUSD",
      date: "2023-05-03 16:08",
      status: "Completed",
      address: "7Plm...9nBv",
      txHash: "3Ty6...8iOp",
    },
    {
      id: 6,
      type: "Transfer",
      amount: "250 zUSD",
      date: "2023-04-29 13:42",
      status: "Completed",
      address: "2Qwe...5rTy",
      txHash: "6Ui9...0pAs",
    },
    {
      id: 7,
      type: "Redeem",
      amount: "0.02 BTC",
      date: "2023-04-25 10:30",
      status: "Completed",
      address: "8xzt...3kfP",
      txHash: "8Df4...3gHj",
    },
    {
      id: 8,
      type: "Mint",
      amount: "600 zUSD",
      date: "2023-04-20 08:15",
      status: "Completed",
      address: "8xzt...3kfP",
      txHash: "1Kl7...5zXc",
    },
  ]

  // Filter transactions based on selected filters
  const filteredTransactions = transactions.filter((tx) => {
    if (filterType && tx.type !== filterType) {
      return false
    }
    // Date range filtering would be implemented here
    return true
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {filterType || "All Types"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#2d2d2d] border-[#3d3d3d]">
                <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#3d3d3d]" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className={!filterType ? "bg-[#3d3d3d]" : ""} onClick={() => setFilterType(null)}>
                    All Types
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={filterType === "Mint" ? "bg-[#3d3d3d]" : ""}
                    onClick={() => setFilterType("Mint")}
                  >
                    Mint
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={filterType === "Transfer" ? "bg-[#3d3d3d]" : ""}
                    onClick={() => setFilterType("Transfer")}
                  >
                    Transfer
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={filterType === "Redeem" ? "bg-[#3d3d3d]" : ""}
                    onClick={() => setFilterType("Redeem")}
                  >
                    Redeem
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {dateRange || "Date Range"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-[#2d2d2d] border-[#3d3d3d]">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Select Date Range</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="from">From</Label>
                        <Input id="from" type="date" className="bg-[#1e1e1e] border-[#3d3d3d]" />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="to">To</Label>
                        <Input id="to" type="date" className="bg-[#1e1e1e] border-[#3d3d3d]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setDateRange(null)}>
                      Reset
                    </Button>
                    <Button
                      className="bg-[#00FFFF] text-black hover:opacity-90"
                      onClick={() => setDateRange("Last 7 days")}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Card className="bg-[#2d2d2d] border-[#3d3d3d]">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b-[#3d3d3d] hover:bg-[#2d2d2d]">
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((tx) => (
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
                    <TableCell className="hidden md:table-cell">{tx.date}</TableCell>
                    <TableCell className="hidden md:table-cell">{tx.address}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        {tx.status}
                      </Badge>
                    </TableCell>
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
      </div>
    </div>
  )
}
