# Shipment Tracker

A real-time shipment tracking web application that allows users to track shipments based on a unique tracking ID. The app fetches data via WebSocket and provides real-time updates on the shipment status.

## Features
- Real-time shipment updates via WebSocket
- Search functionality for tracking shipments using tracking ID
- Fully responsive design for mobile and desktop
- Displays shipment status (e.g., In Transit, Delivered, Pending)
- Dynamic shipment data fetching

## Technologies Used
- React.js
- TypeScript
- WebSocket (for real-time updates)
- Tailwind CSS (for styling)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

Getting Started

1. Clone the repository
Clone the repository to your local machine using the following command:
git clone https://github.com/David-Toas/Tinkteq


Install Dependencies
Navigate into the project folder and install the required dependencies using npm:
cd shipment-tracker
npm install


3. Set Up the WebSocket Server
The shipment tracker fetches real-time updates from a WebSocket server. Follow the steps below to set up and run the WebSocket server locally:

## Navigate to the server folder: Go to the server directory inside your project folder where the WebSocket server is located.
cd server

## nstall the necessary dependencies: You’ll need to install WebSocket dependencies by running:
npm install

## Run the WebSocket server: Start the WebSocket server with the following command:
npm start
npm run dev

## Navigate back to the root project folder if you’re still in the server folder:
cd ..

##Start the development server:
npm run dev
