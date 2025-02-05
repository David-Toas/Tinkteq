"use client";
import { useEffect, useState } from "react";

export default function WebSocketComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => console.log("🟢 Connected to WebSocket");
    
    socket.onmessage = (event) => {
      console.log("📩 Message received:", event.data);
      setMessage(event.data);
    };

    socket.onclose = () => console.log("🔴 WebSocket Disconnected");

    return () => socket.close();
  }, []);

  return <div>WebSocket Message: {message}</div>;
}
