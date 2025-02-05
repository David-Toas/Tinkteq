import express from "express";
import http from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

const locations = [
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "Houston, USA",
  "Miami, USA",
];
const statuses = ["In Transit", "Delivered", "Pending", "Out for Delivery"];

let shipments = [
  { id: "JD014600002345678", location: "New York, USA", status: "In Transit" },
  {
    id: "JD014600002876543",
    location: "Los Angeles, USA",
    status: "Delivered",
  },
  { id: "JD014600001234567", location: "Houston, USA", status: "Pending" },
  {
    id: "JD014600009876543",
    location: "Chicago, USA",
    status: "Out for Delivery",
  },
  { id: "JD014600005432109", location: "Miami, USA", status: "In Transit" },
  {
    id: "JD014600003987654",
    location: "Toronto, Canada",
    status: "In Transit",
  },
  { id: "JD014600007654321", location: "London, UK", status: "Delivered" },
  { id: "JD014600004321098", location: "Berlin, Germany", status: "Pending" },
  {
    id: "JD014600006543210",
    location: "Paris, France",
    status: "Out for Delivery",
  },
  { id: "JD014600008765432", location: "Tokyo, Japan", status: "In Transit" },
  {
    id: "JD014600009876543",
    location: "Sydney, Australia",
    status: "Delivered",
  },
  { id: "JD014600001234567", location: "Dubai, UAE", status: "Pending" },
  {
    id: "JD014600008765432",
    location: "Mumbai, India",
    status: "Out for Delivery",
  },
  {
    id: "JD014600005432109",
    location: "São Paulo, Brazil",
    status: "In Transit",
  },
  {
    id: "JD014600006543210",
    location: "Cape Town, South Africa",
    status: "Delivered",
  },
];

const updateShipments = () => {
  shipments = shipments.map((shipment) => ({
    ...shipment,
    location: locations[Math.floor(Math.random() * locations.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify(shipments));
    }
  });
};

setInterval(updateShipments, 5000);

wss.on("connection", (ws) => {
  console.log("🟢 WebSocket Client Connected");

  ws.send(JSON.stringify(shipments));

  ws.on("close", () => {
    console.log("🔴 WebSocket Client Disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
