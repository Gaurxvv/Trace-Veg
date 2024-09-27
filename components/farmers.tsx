import { Button } from "@/components/ui/button"
import { Leaf, BarChart2, CreditCard } from 'lucide-react'

export default function Farmers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">For Farmers</h1>
      <p className="text-lg text-green-600 mb-6">
        Join TraceVeg to get fair prices for your produce, access real-time market data, and connect directly with consumers.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <FeatureCard 
          icon={<Leaf className="w-8 h-8 text-green-600" />}
          title="Crop Management"
          description="Track your crop health and get timely alerts for optimal care."
        />
        <FeatureCard 
          icon={<BarChart2 className="w-8 h-8 text-green-600" />}
          title="Market Insights"
          description="Access real-time price data and trends to make informed decisions."
        />
        <FeatureCard 
          icon={<CreditCard className="w-8 h-8 text-green-600" />}
          title="Direct Payments"
          description="Receive secure and timely payments directly to your account."
        />
      </div>
      <Button className="bg-green-600 hover:bg-green-700 text-white">Register as a Farmer</Button>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-green-700">{description}</p>
    </div>
  )
}