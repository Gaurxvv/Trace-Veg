"use client";

import { useState, useEffect } from "react";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const remarks = [
  "VeggieTrace has truly empowered us farmers by giving us a clear view of market prices. Now, we know we're getting a fair deal for our produce! -  Rakesh Kumar",
  "As a consumer, it's great to see exactly where my vegetables come from and know that the prices are fair. This transparency builds trust. - Ansh Tripathi  ",
  "The real-time MSP updates have helped us decide the best time to sell our crops. It's like having a guiding hand in the market! - Gaurav Mehra",
  "I never realized how much local mandi prices fluctuated! With VeggieTrace, I feel more informed when I buy fresh produce. - Pulkit Chauhan",
  "VeggieTrace has brought accountability into the farming business. I hope more people join and make this the new standard. - Rajesh Yadav",
  "Tracking prices has always been a challenge for small farmers like me. VeggieTrace makes it easy and accessible with just a few clicks! - Shivam Singh",
  "I appreciate how user-friendly and informative VeggieTrace is. This platform is a game-changer for both buyers and sellers. - Yuvraj Sharma",
  "The platform is excellent for young farmers just starting. It's like having a market expert at your fingertips. - Prem Pasand",
  "Since using VeggieTrace, I feel more confident negotiating prices with buyers. Knowing the MSP helps us get fair compensation. - Bhumika Rawat",
  "This app has brought transparency and fairness back into the food supply chain. I feel good knowing my purchases support farmers directly! - Akshita Chauhan",
];

export function InteractivePaymentGatewayComponent() {
  const [isScanning, setIsScanning] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [amount, setAmount] = useState(100);
  const [displayedRemarks, setDisplayedRemarks] = useState(remarks.slice(0, 6));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRemarks((prevRemarks) => {
        const newRemarks = [...prevRemarks];
        const indexToReplace = Math.floor(Math.random() * 6);
        const remainingRemarks = remarks.filter(
          (remark) => !prevRemarks.includes(remark)
        );
        if (remainingRemarks.length > 0) {
          newRemarks[indexToReplace] =
            remainingRemarks[
              Math.floor(Math.random() * remainingRemarks.length)
            ];
        }
        return newRemarks;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    setPaymentStatus("idle");
    setTimeout(() => {
      setIsScanning(false);
      setPaymentStatus(Math.random() > 0.2 ? "success" : "error");
    }, 3000);
  };

  const handleSliderChange = (newValue: number[]) => {
    setAmount(newValue[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="flex w-full max-w-7xl gap-8">
        <div className="hidden lg:flex flex-col w-1/4 space-y-4">
          <h2 className="text-xl font-semibold text-green-800 text-center">
            Remarks
          </h2>
          {displayedRemarks.slice(0, 3).map((remark, index) => (
            <Card key={index} className="bg-green-100 shadow-md">
              <CardContent className="p-4">
                <p className="text-sm italic text-green-800">{`"${remark}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="w-full lg:w-1/2 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800 text-center">
              VeggieTrace Payment
            </CardTitle>
            <CardDescription className="text-center">
              Scan the QR code to make a secure payment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-200 opacity-50 rounded-lg animate-pulse group-hover:animate-none transition-all duration-300"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-inner group-hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://cdn.discordapp.com/attachments/1276449155484487681/1306503893957611570/2e1ca1a6-f6c7-4ee1-ba8c-42027aaadf38.jpg?ex=6736e811&is=67359691&hm=16ec41e19cc88f697dae50c460c875bf2563aaf4773e036a8f6c3edd975ae107&"
                      alt="Paytm QR Code"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {isScanning && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Loader2 className="w-12 h-12 text-white animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center font-semibold text-green-700 text-lg">
              VeggieTrace
            </div>
            <div className="space-y-4">
              <Label htmlFor="amount" className="text-lg">
                Amount (₹)
              </Label>
              <div className="flex items-center space-x-4">
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="text-lg"
                />
                <RefreshCcw
                  className="w-6 h-6 text-white cursor-pointer hover:rotate-180 transition-transform duration-300"
                  onClick={() => setAmount(100)}
                />
              </div>
              <Slider
                value={[amount]}
                onValueChange={handleSliderChange}
                max={1000}
                step={10}
                className="py-4"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              onClick={handleScan}
              disabled={isScanning || amount <= 0}
              className={cn(
                "w-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center",
                isScanning
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-500 hover:bg-green-600"
              )}
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  Scan & Pay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {paymentStatus === "success" && (
              <div className="flex items-center text-white animate-bounce">
                <CheckCircle className="w-5 h-5 mr-2" />
                Payment successful!
              </div>
            )}
            {paymentStatus === "error" && (
              <div className="flex items-center text-red-600 animate-shake">
                <AlertCircle className="w-5 h-5 mr-2" />
                Payment failed. Please try again.
              </div>
            )}
          </CardFooter>
        </Card>
        <div className="hidden lg:flex flex-col w-1/4 space-y-4">
          <h2 className="text-xl font-semibold text-green-800 text-center">
            Remarks
          </h2>
          {displayedRemarks.slice(3, 6).map((remark, index) => (
            <Card key={index} className="bg-green-100 shadow-md">
              <CardContent className="p-4">
                <p className="text-sm italic text-green-800">{`"${remark}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
