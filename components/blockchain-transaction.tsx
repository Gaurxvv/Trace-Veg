"use client";

import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

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

export function BlockchainTransaction() {
  const [transactionId, setTransactionId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for transaction: ${transactionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Blockchain Transactions
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            VegeTrace uses blockchain technology to ensure transparency and
            traceability in the vegetable supply chain. Each transaction is
            securely recorded and can be verified on our blockchain.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Search Transaction</h2>
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Search</Button>
          </form>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">0x1a2b...3c4d</TableCell>
                <TableCell>Farm A</TableCell>
                <TableCell>Distributor X</TableCell>
                <TableCell>500 kg Tomatoes</TableCell>
                <TableCell className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Confirmed
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">0x5e6f...7g8h</TableCell>
                <TableCell>Distributor Y</TableCell>
                <TableCell>Retailer Z</TableCell>
                <TableCell>200 kg Carrots</TableCell>
                <TableCell className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                  Pending
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">0x9i10...11j12</TableCell>
                <TableCell>Farm B</TableCell>
                <TableCell>Processor M</TableCell>
                <TableCell>1000 kg Potatoes</TableCell>
                <TableCell className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Confirmed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Why Blockchain?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Immutable record of transactions</li>
              <li>Enhanced transparency in the supply chain</li>
              <li>Increased trust between stakeholders</li>
              <li>Faster and more efficient traceability</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Transaction is initiated (e.g., harvest recorded)</li>
              <li>Transaction is verified by network nodes</li>
              <li>Verified transaction is added to a block</li>
              <li>Block is added to the chain, creating a permanent record</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
