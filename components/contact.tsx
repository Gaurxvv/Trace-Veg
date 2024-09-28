import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-96 w-full bg-gradient-to-b from-green-50 to-green-100 rounded-xl">

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </form>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-600 mr-2" />
                <span>info@vegetrace.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <span>123 Green Street, Farmville, AG 12345</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}