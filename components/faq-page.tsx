"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const useTypingEffect = (text: string, speed: number = 30) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayedText("");
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(() => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, isTyping]);

  return { displayedText, startTyping, isTyping };
};

const faqItems = [
  {
    question: "What is VeggiTrace?",
    answer:
      "VeggiTrace is a blockchain-powered vegetable traceability platform that ensures transparency and trust in the agricultural supply chain. It allows consumers to track the journey of their vegetables from farm to table using immutable blockchain records.",
  },
  {
    question: "How does the QR code scanning work?",
    answer:
      "Each batch of vegetables is tagged with a unique QR code. Consumers can scan this code using our mobile app or website to access complete information about the product's origin, farming practices, and journey through the supply chain.",
  },
  {
    question: "What information can I see about the vegetables?",
    answer:
      "By scanning the QR code or searching for a specific batch, you can see information such as the farm of origin, planting and harvest dates, farming practices used, transportation details, and any quality certifications.",
  },
  {
    question: "How does VeggiTrace ensure the accuracy of the information?",
    answer:
      "VeggiTrace uses blockchain technology to create an immutable record of each step in the supply chain. This means that once information is recorded, it cannot be altered without leaving a trace. Additionally, we use IoT sensors for real-time crop health monitoring to ensure data accuracy.",
  },
  {
    question: "How does VeggiTrace benefit farmers?",
    answer:
      "VeggiTrace provides farmers with several benefits, including direct payments through smart contracts, access to real-time market pricing based on crop health and quality, and the ability to showcase their farming practices to consumers, potentially leading to better prices for high-quality produce.",
  },
  {
    question: "Is VeggiTrace available for all types of vegetables?",
    answer:
      "Currently, VeggiTrace supports a wide range of commonly consumed vegetables. We are continuously expanding our database to include more varieties. If you don't see a specific vegetable in our system, please contact us, and we'll work on adding it.",
  },
  {
    question: "How can I join VeggiTrace as a farmer or distributor?",
    answer:
      "To join VeggiTrace as a farmer or distributor, visit our 'Join Network' page on the website. You'll need to provide some basic information about your farm or business. Our team will review your application and guide you through the onboarding process.",
  },
  {
    question: "Is my personal data safe on VeggiTrace?",
    answer:
      "Yes, we take data privacy very seriously. All personal data is encrypted and stored securely. We comply with GDPR and other relevant data protection regulations. Your personal information is never shared without your explicit consent.",
  },
  {
    question: "How often is the market pricing updated?",
    answer:
      "Market prices on VeggiTrace are updated in real-time based on various factors including crop health data, supply and demand, and Minimum Support Price (MSP). This ensures that both farmers and consumers always have access to the most current pricing information.",
  },
  {
    question: "Can I trust the information provided by VeggiTrace?",
    answer:
      "Absolutely. The use of blockchain technology ensures that all recorded information is tamper-proof and verifiable. Additionally, our network of trusted partners and rigorous verification processes further guarantee the authenticity of the information provided.",
  },
  {
    question: "What if I find incorrect information about a product?",
    answer:
      "If you believe you've found incorrect information, please use the 'Report Issue' feature available on each product page. Our team will investigate the matter promptly and make any necessary corrections.",
  },
  {
    question: "How does VeggiTrace contribute to sustainable agriculture?",
    answer:
      "VeggiTrace promotes sustainable agriculture by providing transparency in farming practices, encouraging responsible resource use, and rewarding farmers for quality produce. This transparency allows consumers to make informed choices, driving demand for sustainably grown vegetables.",
  },
  {
    question:
      "Can consumers communicate directly with farmers through VeggiTrace?",
    answer:
      "While VeggiTrace doesn't currently offer direct messaging, we provide a feedback system where consumers can leave comments and ratings for specific products. Farmers can view this feedback to understand consumer preferences and improve their practices.",
  },
  {
    question:
      "How does VeggiTrace handle disputes between parties in the supply chain?",
    answer:
      "VeggiTrace has a dedicated dispute resolution process. If a dispute arises, all parties can submit their evidence through our platform. Our team of impartial mediators will review the blockchain records and additional information to help resolve the issue fairly.",
  },
  {
    question: "Can VeggiTrace integrate with existing farm management systems?",
    answer:
      "Yes, VeggiTrace offers API integration capabilities that allow it to connect with various farm management systems. This enables seamless data flow and reduces the need for manual data entry. Contact our technical support team for integration assistance.",
  },
  {
    question: "How does VeggiTrace ensure fair pricing for farmers?",
    answer:
      "VeggiTrace uses a combination of real-time market data, crop quality information, and smart contracts to ensure fair pricing. The transparent nature of our platform allows farmers to see current market trends and negotiate better prices based on the quality of their produce.",
  },
  {
    question: "What measures does VeggiTrace take to prevent fraud?",
    answer:
      "VeggiTrace employs multiple layers of security to prevent fraud. This includes blockchain verification, IoT sensor data, and regular audits of participating entities. Any suspicious activity is flagged for immediate investigation.",
  },
  {
    question:
      "How can consumers provide feedback on the vegetables they purchase?",
    answer:
      "After purchasing a product, consumers can scan the QR code again to access the product page. Here, they can leave ratings and reviews. This feedback is valuable for both farmers and other consumers.",
  },
  {
    question: "Does VeggiTrace support organic certification tracking?",
    answer:
      "Yes, VeggiTrace supports tracking of various certifications, including organic. Farmers can upload their certification documents to the blockchain, making them easily verifiable by consumers and other stakeholders in the supply chain.",
  },
  {
    question:
      "How does VeggiTrace handle seasonal variations in vegetable production?",
    answer:
      "VeggiTrace's platform is designed to accommodate seasonal variations. Our system provides real-time updates on crop availability, helping to manage consumer expectations and assisting distributors in planning their inventory.",
  },
];

function TypingAnswer({
  answer,
  isExpanded,
}: {
  answer: string;
  isExpanded: boolean;
}) {
  const { displayedText, startTyping, isTyping } = useTypingEffect(answer);

  useEffect(() => {
    if (isExpanded) {
      startTyping();
    }
  }, [isExpanded, startTyping]);

  if (!isExpanded) return null;

  return (
    <p>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </p>
  );
}

export function FaqPage() {
  const [currentFAQPage, setCurrentFAQPage] = useState(1);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(faqItems.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentFAQPage - 1) * itemsPerPage;
    return faqItems.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleAccordionChange = (value: string) => {
    setExpandedItem(value === expandedItem ? null : value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-800">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              onValueChange={handleAccordionChange}
              className="w-full"
            >
              {getCurrentPageItems().map((item, index) => {
                const globalIndex = (currentFAQPage - 1) * itemsPerPage + index;
                return (
                  <AccordionItem
                    value={`item-${globalIndex}`}
                    key={globalIndex}
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <TypingAnswer
                        answer={item.answer}
                        isExpanded={expandedItem === `item-${globalIndex}`}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="flex justify-between items-center mt-8">
              <Button
                onClick={() => {
                  setCurrentFAQPage((prev) => Math.max(prev - 1, 1));
                  setExpandedItem(null);
                }}
                disabled={currentFAQPage === 1}
                variant="outline"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-gray-500">
                Page {currentFAQPage} of {totalPages}
              </span>
              <Button
                onClick={() => {
                  setCurrentFAQPage((prev) => Math.min(prev + 1, totalPages));
                  setExpandedItem(null);
                }}
                disabled={currentFAQPage === totalPages}
                variant="outline"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
