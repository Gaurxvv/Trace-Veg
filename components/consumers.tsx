import { Carrot, Search, ShieldCheck, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ConsumersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">For Consumers</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            With VegeTrace, you can now trace the journey of your vegetables from farm to table. 
            Know exactly where your food comes from, how it was grown, and support sustainable farming practices.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Carrot className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Know Your Food</h2>
            <p className="text-gray-700">
              Access detailed information about the origin, farming practices, and journey of your vegetables.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ShieldCheck className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Ensure Quality</h2>
            <p className="text-gray-700">
              Verify the freshness and quality of your produce with blockchain-secured data.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">How to Use VegeTrace</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Search className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find</h3>
              <p className="text-gray-700">
                Look for the VegeTrace QR code on vegetable packaging in participating stores.
              </p>
            </div>
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scan</h3>
              <p className="text-gray-700">
                Use your smartphone to scan the QR code and access the vegetable's journey.
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verify</h3>
              <p className="text-gray-700">
                Review the blockchain-verified information about your vegetables' origin and quality.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-600 text-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Ready to Trace Your Veggies?</h2>
          <p className="text-center mb-6">
            Download our app to start tracing your vegetables and supporting sustainable farming practices.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Download for iOS
            </Button>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Download for Android
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}