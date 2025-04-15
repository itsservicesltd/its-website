
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useEffect(() => {
    document.title = "Integral Technical Services (ITS), Ltd";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 text-gray-800">
      <section className="text-center py-16 px-4">
        <img src="/logo.png" alt="ITS Logo" className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Integral Technical Services (ITS), Ltd</h1>
        <p className="text-xl italic mb-6">
          Crafting Gibraltar’s Future — One Service at a Time.
        </p>
        <Button className="text-white bg-green-500 hover:bg-green-600 mr-2">Our Services</Button>
        <Button className="text-white bg-blue-500 hover:bg-blue-600">Contact Us</Button>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: "Maintenance" },
            { title: "Plumbing" },
            { title: "Electrical" },
            { title: "HVAC" },
            { title: "General Building Work" }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4 text-center">
                <img src={`/services/service${index + 1}.jpg`} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                <h3 className="text-lg font-medium">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Buildings</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`/buildings/building${i + 1}.jpg`}
              alt={`Building ${i + 1}`}
              className="rounded-xl w-full h-48 object-cover shadow"
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Powered by</h2>
        <div className="flex justify-center gap-10">
          {["infraspeak", "amazon", "daikin"].map((partner, i) => (
            <img
              key={i}
              src={`/powered/${partner}.png`}
              alt={partner}
              className="h-12"
            />
          ))}
        </div>
      </section>

      <footer className="bg-green-200 text-center py-6 mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} Integral Technical Services (ITS), Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}
