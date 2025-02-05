"use client";

import { useState, useEffect } from "react";

type Shipment = {
  id: string;
  location: string;
  status: string;
};

export default function Shipment() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShipments, setFilteredShipments] = useState<Shipment[] | null>(
    null
  );

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => console.log("🟢 Connected to WebSocket Server");

    socket.onmessage = (event) => {
      const updatedShipments = JSON.parse(event.data);
      setShipments(updatedShipments);
    };

    socket.onclose = () => console.log("🔴 Disconnected from WebSocket Server");

    return () => socket.close();
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredShipments(null);
      return;
    }
    const foundShipment = shipments.find(
      (shipment) => shipment.id === searchQuery
    );
    setFilteredShipments(foundShipment ? [foundShipment] : []);
  };

  return (
    <div className="max-w-screen-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-3xl font-bold text-center">
        Real-Time Shipment Tracking
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 mb-6">
        <input
          type="text"
          placeholder="Enter tracking ID..."
          className="w-full sm:w-auto max-w-md px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="mt-2 sm:mt-0 sm:ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="bg-black shadow-lg rounded-lg p-4">
        {(filteredShipments || shipments.slice(0, 3)).map((shipment) => (
          <div
            key={shipment.id}
            className="p-4 border-b border-gray-500 last:border-none flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">
                Tracking ID: #{shipment.id}
              </p>
              <p className="text-gray-600">
                <span className="text-white">Location</span>:{" "}
                {shipment.location}
              </p>
            </div>
            <p
              className={`text-sm px-3 py-1 rounded-full ${
                shipment.status === "Delivered"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              🚚 {shipment.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
