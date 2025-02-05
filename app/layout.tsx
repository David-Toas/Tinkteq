import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TINKTEQ",
  description: "Assessment",
  openGraph: {
    title: "TINKTEQ - Assessment",
    description: "This is the TINKTEQ assessment page.",
    images: ["/thumbnail.jpg"],
    siteName: "TINKTEQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="">{children}</body>
    </html>
  );
}
