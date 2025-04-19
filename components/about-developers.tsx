import { useState, useEffect } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutDevelopersPage() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const developers = [
    {
      name: "Gaurav Mehra",
      quote:
        "Empowering farmers with knowledge empowers the entire food chain, creating a system where every seed sown reaps not just produce but prosperity for all.",
      github: "https://github.com/Gaurxvv",
      instagram: "https://www.instagram.com/gxuravv/",
      linkedin: "https://www.linkedin.com/in/gaurav-mehra-560479277/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % developers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          About the Developer
        </h1>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission at VeggieTrace is to empower both farmers and consumers
            by providing transparent, real-time information on vegetable and
            fruit prices, integrating the Minimum Support Price (MSP) law and
            local mandi (market) rates. Through VeggieTrace, we aim to bridge
            the gap between farmers and end consumers, promoting fair pricing,
            traceability, and accountability. By offering easy access to pricing
            data, VeggieTrace not only helps farmers make informed decisions
            about selling their produce but also ensures that consumers can
            purchase fresh produce at fair market values, fostering a
            sustainable and equitable agricultural ecosystem.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">{dev.name}</h2>
              <div className="flex space-x-4 mb-6">
                <a href={dev.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href={dev.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-green-600 text-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Developer Insights
          </h2>
          <div className="relative h-32">
            {developers.map((dev, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentQuote ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-lg italic mb-2">&quot;{dev.quote}&quot;</p>
                <p className="text-right">&quot;{dev.name}&quot;</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
