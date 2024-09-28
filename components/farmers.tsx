import { useState } from 'react'
import { Tractor, Leaf, BarChart, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FarmersPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for your interest! We'll contact you at ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">For Farmers</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Join VegeTrace and become part of a revolutionary platform that empowers farmers, 
            ensures fair compensation, and connects you directly with consumers who value quality and transparency.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Tractor className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Smart Farming</h2>
            <p className="text-gray-700">
              Access advanced tools and insights to optimize your farming practices.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Crop Monitoring</h2>
            <p className="text-gray-700">
              Real-time monitoring of crop health and growth stages.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BarChart className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Market Insights</h2>
            <p className="text-gray-700">
              Get up-to-date market trends and pricing information.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Fair Compensation</h2>
            <p className="text-gray-700">
              Receive fair prices for your produce through transparent transactions.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">How to Join VegeTrace</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Register your farm on our platform</li>
            <li>Integrate our QR code system into your packaging process</li>
            <li>Start recording your farming practices and crop data</li>
            <li>Connect with consumers and see the impact of transparency</li>
          </ol>
        </section>

        <section className="bg-green-600 text-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Ready to Get Started?</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow rounded-l-lg border-r-0 text-black-800"
                required
              />
              <Button type="submit" className="rounded-l-none bg-green-800 hover:bg-green-900">
                Join Now
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}