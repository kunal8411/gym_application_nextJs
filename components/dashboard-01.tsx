"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="sticky top-0 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6">
        <nav className="flex-col items-center hidden gap-5 md:flex md:flex-row lg:gap-6">
          <Link href="#" aria-label="Acme Inc" className="flex items-center gap-2">
            <Package2 className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {["Dashboard", "Orders", "Products", "Customers", "Analytics"].map(
            (text, index) => (
              <Link
                key={index}
                href="#"
                className="transition-colors text-muted-foreground hover:text-foreground"
              >
                {text}
              </Link>
            )
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6">
              <Link
                href="#"
                aria-label="Acme Inc"
                className="flex items-center gap-2"
              >
                <Package2 className="w-6 h-6" />
              </Link>
              {["Dashboard", "Orders", "Products", "Customers", "Analytics"].map(
                (text, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {text}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center w-full gap-4 md:ml-auto">
          <form className="relative flex-1 ml-auto sm:flex-initial">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["Settings", "Support", "Logout"].map((item, index) => (
                <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: <DollarSign className="w-4 h-4" /> },
            { title: "Subscriptions", value: "+2350", change: "+180.1%", icon: <Users className="w-4 h-4" /> },
            { title: "Sales", value: "+12,234", change: "+19%", icon: <CreditCard className="w-4 h-4" /> },
            { title: "Active Now", value: "+573", change: "+201", icon: <Activity className="w-4 h-4" /> },
          ].map(({ title, value, change, icon }, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto">
                <Link href="#">
                  View All <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-cell">Type</TableHead>
                    <TableHead className="hidden xl:table-cell">Status</TableHead>
                    <TableHead className="hidden xl:table-cell">Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Liam Johnson", email: "liam@example.com", type: "Sale", status: "Approved", date: "2023-06-23", amount: "$250.00" },
                    { name: "Olivia Smith", email: "olivia@example.com", type: "Refund", status: "Declined", date: "2023-06-24", amount: "$150.00" },
                    { name: "Noah Williams", email: "noah@example.com", type: "Subscription", status: "Approved", date: "2023-06-25", amount: "$350.00" },
                    { name: "Emma Brown", email: "emma@example.com", type: "Sale", status: "Approved", date: "2023-06-26", amount: "$450.00" },
                  ].map(({ name, email, type, status, date, amount }, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium">{name}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">{email}</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">{type}</TableCell>
                      <TableCell className="hidden xl:table-cell">
                        <Badge variant="outline" className="text-xs">{status}</Badge>
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">{date}</TableCell>
                      <TableCell className="text-right">{amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
