"use client";

import { useState } from "react";
import { Droplet, Sun, Thermometer, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CropHealth() {
  const [selectedCrop, setSelectedCrop] = useState("all");

  const cropData = [
    {
      id: 1,
      name: "Tomatoes",
      health: 95,
      water: 70,
      sunlight: 85,
      temperature: 28,
    },
    {
      id: 2,
      name: "Carrots",
      health: 88,
      water: 65,
      sunlight: 75,
      temperature: 22,
    },
    {
      id: 3,
      name: "Lettuce",
      health: 92,
      water: 80,
      sunlight: 70,
      temperature: 20,
    },
    {
      id: 4,
      name: "Potatoes",
      health: 85,
      water: 60,
      sunlight: 80,
      temperature: 24,
    },
    {
      id: 5,
      name: "Cucumbers",
      health: 90,
      water: 75,
      sunlight: 90,
      temperature: 26,
    },
  ];

  const filteredCrops =
    selectedCrop === "all"
      ? cropData
      : cropData.filter((crop) => crop.name.toLowerCase() === selectedCrop);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Real-Time Crop Health
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Monitor the health and environmental conditions of various crops in
            real-time. Our advanced sensors provide up-to-date information on
            crop health, water levels, sunlight exposure, and temperature.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Crop Health Dashboard</h2>
            <div className="flex items-center">
              <span className="mr-2">Filter by crop:</span>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Select a crop" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Crops</SelectItem>
                  <SelectItem value="tomatoes">Tomatoes</SelectItem>
                  <SelectItem value="carrots">Carrots</SelectItem>
                  <SelectItem value="lettuce">Lettuce</SelectItem>
                  <SelectItem value="potatoes">Potatoes</SelectItem>
                  <SelectItem value="cucumbers">Cucumbers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                <TableHead>Health Index</TableHead>
                <TableHead>Water Level</TableHead>
                <TableHead>Sunlight Exposure</TableHead>
                <TableHead>Temperature</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCrops.map((crop) => (
                <TableRow key={crop.id}>
                  <TableCell className="font-medium">{crop.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${crop.health}%` }}
                        ></div>
                      </div>
                      <span>{crop.health}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Droplet className="h-5 w-5 text-blue-500 mr-2" />
                      {crop.water}%
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                      {crop.sunlight}%
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                      {crop.temperature}°C
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Droplet className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Water Management</h3>
            <p className="text-gray-700">
              Optimize irrigation based on real-time soil moisture data and
              weather forecasts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Sun className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sunlight Monitoring</h3>
            <p className="text-gray-700">
              Track sunlight exposure to ensure optimal photosynthesis and
              growth.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Thermometer className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Temperature Control</h3>
            <p className="text-gray-700">
              Monitor temperature fluctuations to protect crops from extreme
              conditions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Wind className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Air Quality</h3>
            <p className="text-gray-700">
              Measure air quality parameters to ensure optimal growing
              conditions.
            </p>
          </div>
        </section>

        <section className="bg-green-600 text-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Take Action
          </h2>
          <p className="text-center mb-6">
            Use our real-time data to make informed decisions and improve your
            crop yield.
          </p>
          <div className="flex justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Download Detailed Report
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
