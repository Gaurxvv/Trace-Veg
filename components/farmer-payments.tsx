"use client";

import { useState } from "react";
import { DollarSign, CreditCard, BarChart, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InteractivePaymentGatewayComponent } from "./interactive-payment-gateway";

export function FarmerPayments() {
  const [amount, setAmount] = useState("");
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentGateway(true);
  };

  if (showPaymentGateway) {
    return <InteractivePaymentGatewayComponent />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Direct Farmer Payments
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            VegeTrace ensures fair compensation for farmers through our
            blockchain-based direct payment system. This transparent process
            eliminates intermediaries and guarantees timely payments for your
            produce.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Make a Payment</h2>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Payment Amount (₹)
                </label>
                <Input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Process Payment
              </Button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Payment Statistics</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  Total Payments This Month:
                </span>
                <span className="font-semibold">₹12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Payment Amount:</span>
                <span className="font-semibold">₹1,850</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Number of Transactions:</span>
                <span className="font-semibold">28</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Fastest Payment Time:</span>
                <span className="font-semibold">2 minutes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Payments</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Farmer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-15</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>₹2,500</TableCell>
                <TableCell className="text-green-600">Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-14</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>₹1,800</TableCell>
                <TableCell className="text-green-600">Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-13</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>₹3,200</TableCell>
                <TableCell className="text-green-600">Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-12</TableCell>
                <TableCell>Alice Brown</TableCell>
                <TableCell>₹2,100</TableCell>
                <TableCell className="text-green-600">Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <DollarSign className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
            <p className="text-gray-700">
              Receive payments directly to your account within minutes of
              transaction confirmation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <CreditCard className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Multiple Payment Options
            </h3>
            <p className="text-gray-700">
              Choose from various payment methods including bank transfer and
              mobile money.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BarChart className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
            <p className="text-gray-700">
              Access detailed reports of all your transactions for better
              financial management.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market-Based Pricing</h3>
            <p className="text-gray-700">
              Benefit from fair, market-driven prices for your produce, updated
              in real-time.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
