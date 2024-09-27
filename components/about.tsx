import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">About TraceVeg</h1>
      <p className="text-lg text-green-600 mb-6">
        TraceVeg is a revolutionary platform that leverages blockchain technology to bring transparency and efficiency to the agricultural supply chain. Our mission is to empower farmers, inform consumers, and create a more sustainable food ecosystem.
      </p>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
      <p className="text-lg text-green-600 mb-6">
        We envision a world where every vegetable can be traced from farm to table, ensuring fair prices for farmers and quality produce for consumers. By providing real-time data and market insights, we aim to revolutionize the way agricultural products are bought and sold.
      </p>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside text-lg text-green-600 mb-6 space-y-2">
        <li>Farmers register their crops on our blockchain-based platform.</li>
        <li>IoT sensors monitor crop health and environmental conditions.</li>
        <li>Each batch of vegetables receives a unique QR code.</li>
        <li>Consumers can scan the QR code to view the complete journey of their produce.</li>
        <li>Smart contracts ensure fair pricing and timely payments to farmers.</li>
      </ol>
      <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
    </div>
  )
}