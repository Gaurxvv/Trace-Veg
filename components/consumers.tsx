import { Button } from "@/components/ui/button"
import { Search, Leaf, ShieldCheck } from 'lucide-react'

export default function Consumers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">For Consumers</h1>
      <p className="text-lg text-green-600 mb-6">
        TraceVeg empowers you to make informed choices about the food you eat. Discover the journey of your vegetables from farm to table.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <FeatureCard 
          icon={<Search className="w-8 h-8 text-green-600" />}
          title="Traceability"
          description="Scan QR codes to view the complete history of your produce."
        />
        <FeatureCard 
          icon={<Leaf className="w-8 h-8 text-green-600" />}
          title="Freshness Guarantee"
          description="Get real-time information on harvest dates and storage conditions."
        />
        <FeatureCard 
          icon={<ShieldCheck className="w-8 h-8 text-green-600" />}
          title="Quality Assurance"
          description="Access certifications and quality checks for each batch."
        />
      </div>
      <Button className="bg-green-600 hover:bg-green-700 text-white">Download TraceVeg App</Button>
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