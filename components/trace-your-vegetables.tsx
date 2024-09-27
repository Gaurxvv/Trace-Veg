"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Leaf, BarChart2, CreditCard, Facebook, Twitter, Instagram, ArrowUp, ArrowDown, Heart, Sun, Cloud, CloudRain, AlertTriangle, RefreshCw, Search, QrCode } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Link from 'next/link'
import About from './about'
import Farmers from './farmers'
import Consumers from './consumers'
import Contact from './contact'

export function TraceYourVegetablesComponent() {
  const [text, setText] = useState('')
  const fullText = "Trace Your Vegetables"
  const [currentPage, setCurrentPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [showQRScanner, setShowQRScanner] = useState(false)

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  const handleQRScan = () => {
    setShowQRScanner(!showQRScanner)
    // Implement QR scanning functionality here
    console.log('QR scanner toggled')
  }

  return (
    <div className="min-h-screen bg-white text-green-800 flex flex-col">
      <header className="py-6 px-4 md:px-6 lg:px-8 border-b border-green-200">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-green-600">TraceVeg</div>
          <div className="space-x-4">
            <Button variant="ghost" className="text-green-600 hover:text-green-800 hover:bg-green-100" onClick={() => setCurrentPage('home')}>Home</Button>
            <Button variant="ghost" className="text-green-600 hover:text-green-800 hover:bg-green-100" onClick={() => setCurrentPage('about')}>About</Button>
            <Button variant="ghost" className="text-green-600 hover:text-green-800 hover:bg-green-100" onClick={() => setCurrentPage('farmers')}>Farmers</Button>
            <Button variant="ghost" className="text-green-600 hover:text-green-800 hover:bg-green-100" onClick={() => setCurrentPage('consumers')}>Consumers</Button>
            <Button variant="ghost" className="text-green-600 hover:text-green-800 hover:bg-green-100" onClick={() => setCurrentPage('contact')}>Contact</Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Sign Up</Button>
          </div>
        </nav>
      </header>

      <div className="bg-green-100 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <form onSubmit={handleSearch} className="flex-grow mr-2">
            <Input
              type="text"
              placeholder="Search for vegetable batches or farms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-green-300 focus:ring-green-500 focus:border-green-500"
            />
          </form>
          <Button type="submit" onClick={handleSearch} className="bg-green-600 hover:bg-green-700 text-white mr-2">
            <Search className="w-5 h-5" />
          </Button>
          <Button onClick={handleQRScan} className="bg-green-600 hover:bg-green-700 text-white">
            <QrCode className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {currentPage === 'home' && (
          <>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-700">
              {text}
              <span className="inline-block w-0.5 h-8 bg-green-600 animate-blink ml-1"></span>
            </h1>
            <p className="text-xl mb-8 text-green-600">Empowering farmers with blockchain technology for transparent and efficient agriculture.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <FeatureCard 
                icon={<Leaf className="w-8 h-8 text-green-600" />}
                title="Blockchain Transactions"
                description="Secure and transparent tracking of your produce from farm to table."
              />
              <FeatureCard 
                icon={<BarChart2 className="w-8 h-8 text-green-600" />}
                title="Real-time Crop Health"
                description="Monitor and manage your crop health with advanced IoT sensors."
              />
              <FeatureCard 
                icon={<CreditCard className="w-8 h-8 text-green-600" />}
                title="Direct Farmer Payments"
                description="Receive payments directly, cutting out middlemen and increasing profits."
              />
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Automated Price Updates</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <AutomatedPriceCard 
                  vegetable="Tomatoes" 
                  msp={20} 
                  localPrice={25} 
                />
                <AutomatedPriceCard 
                  vegetable="Potatoes" 
                  msp={15} 
                  localPrice={18} 
                />
                <AutomatedPriceCard 
                  vegetable="Onions" 
                  msp={25} 
                  localPrice={30} 
                />
              </div>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Price Trends Visualization</h2>
              <PriceTrendsVisualization />
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-green-700">Weather and Crop Advisory</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <WeatherForecast />
                <GovernmentSchemes />
              </div>
            </section>
          </>
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'farmers' && <Farmers />}
        {currentPage === 'consumers' && <Consumers />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <footer className="bg-green-100 py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">TraceVeg</h3>
            <p className="text-green-600">Empowering farmers with blockchain technology for transparent and efficient agriculture.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-600 hover:text-green-800">About Us</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">Features</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">Contact</a></li>
              <li><a href="#" className="text-green-600 hover:text-green-800">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-800">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-green-600">
          © 2023 TraceVeg. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-green-700">{description}</p>
    </motion.div>
  )
}

function AutomatedPriceCard({ vegetable, msp, localPrice }) {
  const [currentMsp, setCurrentMsp] = useState(msp)
  const [currentLocalPrice, setCurrentLocalPrice] = useState(localPrice)
  const [isUpdating, setIsUpdating] = useState(false)

  const fetchPrices = () => {
    setIsUpdating(true)
    // Simulating API call with setTimeout
    setTimeout(() => {
      setCurrentMsp(msp + Math.random() * 2 - 1) // Random fluctuation between -1 and 1
      setCurrentLocalPrice(localPrice + Math.random() * 4 - 2) // Random fluctuation between -2 and 2
      setIsUpdating(false)
    }, 1000)
  }

  useEffect(() => {
    const interval = setInterval(fetchPrices, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const priceDifference = currentLocalPrice - currentMsp
  const percentageDifference = (priceDifference / currentMsp) * 100

  return (
    <motion.div 
      className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{vegetable}</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchPrices}
          disabled={isUpdating}
          className="text-green-600 border-green-600 hover:bg-green-100"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isUpdating ? 'animate-spin' : ''}`} />
          Update
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-green-600">MSP</p>
          <p className="text-lg font-bold text-green-700">₹{currentMsp.toFixed(2)}/kg</p>
        </div>
        <div>
          <p className="text-sm text-green-600">Local Mandi Price</p>
          <p className="text-lg font-bold text-green-700">₹{currentLocalPrice.toFixed(2)}/kg</p>
        </div>
      </div>
      <div className={`flex items-center ${priceDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {priceDifference >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
        <span>₹{Math.abs(priceDifference).toFixed(2)} ({percentageDifference.toFixed(2)}%)</span>
      </div>
      <p className="mt-2 text-sm text-green-600">
        {priceDifference >= 0
          ? "Local price is higher than MSP. Good time to sell!"
          : "Local price is lower than MSP. Consider holding or seeking government support."}
      </p>
    </motion.div>
  )
}

function PriceTrendsVisualization() {
  const [selectedVegetable, setSelectedVegetable] = useState('Tomatoes')
  const vegetables = ['Tomatoes', 'Potatoes', 'Onions']

  // Sample data for price trends (replace with actual data from API)
  const priceTrendsData = {
    Tomatoes: [
      { month: 'Jan', msp: 18, localPrice: 20 },
      { month: 'Feb', msp: 18, localPrice: 22 },
      { month: 'Mar', msp: 19, localPrice: 21 },
      { month: 'Apr', msp: 19, localPrice: 23 },
      { month: 'May', msp: 20, localPrice: 25 },
      { month: 'Jun', msp: 20, localPrice: 24 },
    ],
    Potatoes: [
      { month: 'Jan', msp: 14, localPrice: 16 },
      { month: 'Feb', msp: 14, localPrice: 15 },
      { month: 'Mar', msp: 15, localPrice: 17 },
      { month: 'Apr', msp: 15, localPrice: 18 },
      { month: 'May', msp: 16, localPrice: 19 },
      { month: 'Jun', msp: 16, localPrice: 18 },
    ],
    Onions: [
      { month: 'Jan', msp: 22, localPrice: 25 },
      { month: 'Feb', msp: 22, localPrice: 24 },
      { month: 'Mar', msp: 23, localPrice: 26 },
      { month: 'Apr', msp: 23, localPrice: 28 },
      { month: 'May', msp: 24, localPrice: 30 },
      { month: 'Jun', msp: 24, localPrice: 29 },
    ],
  }

  return (
    <motion.div 
      className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Price Trends: {selectedVegetable}</h3>
        <select
          value={selectedVegetable}
          onChange={(e) => setSelectedVegetable(e.target.value)}
          className="border border-green-300 rounded-md p-2 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {vegetables.map((veg) => (
            <option key={veg} value={veg}>{veg}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={priceTrendsData[selectedVegetable]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" data={priceTrendsData[selectedVegetable]} dataKey="msp" stroke="#059669" name="MSP" />
          <Line type="monotone" data={priceTrendsData[selectedVegetable]} dataKey="localPrice" stroke="#3B82F6" name="Local Price" />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-4 text-sm text-green-600">
        Compare historical MSP and local market prices to make informed selling decisions.
      </p>
    </motion.div>
  )
}

function WeatherForecast() {
  const weatherData = [
    { day: "Today", icon: <Sun className="w-8 h-8 text-yellow-500" />, temp: "32°C", description: "Sunny" },
    { day: "Tomorrow", icon: <Cloud className="w-8 h-8 text-gray-500" />, temp: "28°C", description: "Partly Cloudy" },
    { day: "Wednesday", icon: <CloudRain className="w-8 h-8 text-blue-500" />, temp: "25°C", description: "Light Rain" },
  ]

  return (
    <motion.div 
      className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-4">Weather Forecast</h3>
      <div className="space-y-4">
        {weatherData.map((day, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="font-medium">{day.day}</span>
            <div className="flex items-center space-x-2">
              {day.icon}
              <span>{day.temp}</span>
            </div>
            <span className="text-sm text-green-600">{day.description}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-green-600">Plan your irrigation and harvesting activities accordingly.</p>
    </motion.div>
  )
}

function GovernmentSchemes() {
  const schemes = [
    { name: "PM-KISAN", description: "Direct income support for farmers" },
    { name: "Crop Insurance Scheme", description: "Protection against crop failure" },
    { name: "Soil Health Card Scheme", description: "Soil nutrient status and recommended dosage of nutrients" },
  ]

  return (
    <motion.div 
      className="p-6 border border-green-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-4">Government Schemes</h3>
      <div className="space-y-4">
        {schemes.map((scheme, index) => (
          <div key={index} className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium">{scheme.name}</h4>
              <p className="text-sm text-green-600">{scheme.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
        Check Eligibility
      </Button>
    </motion.div>
  )
}