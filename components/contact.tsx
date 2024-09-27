import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <p className="text-lg text-green-600 mb-6">
        Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-green-700">Name</label>
          <Input type="text" id="name" name="name" className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-green-700">Email</label>
          <Input type="email" id="email" name="email" className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-green-700">Message</label>
          <Textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Send Message</Button>
      </form>
    </div>
  )
}