import { Sprout, Shield, Truck, Users } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 rounded-xl"> 
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">About VegeTrace</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            VegeTrace is a cutting-edge blockchain-based platform designed to revolutionize the vegetable supply chain. 
            Our mission is to bring transparency, traceability, and trust to every step of the journey from farm to table.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            By leveraging the power of blockchain technology, we ensure that every piece of information about your 
            vegetables - from planting to harvesting, transportation to delivery - is securely recorded and easily accessible.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Sprout className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To create a world where every consumer knows the complete journey of their food, 
              fostering trust, promoting sustainable farming practices, and supporting local farmers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Shield className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
            <p className="text-gray-700">
              We are committed to providing accurate, real-time information about crop health, 
              farming practices, and market prices, ensuring fair compensation for farmers and 
              quality produce for consumers.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">How VegeTrace Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track</h3>
              <p className="text-gray-700">
                Every vegetable batch is assigned a unique QR code, allowing real-time tracking 
                throughout the supply chain.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verify</h3>
              <p className="text-gray-700">
                Blockchain technology ensures that all recorded information is tamper-proof and verifiable.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-700">
                VegeTrace bridges the gap between farmers and consumers, fostering a more 
                connected and transparent food ecosystem.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}