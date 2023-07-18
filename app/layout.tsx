import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TMI meditation",
  keywords:
    "meditation, samatha, tmi, the mind illuminated, culadasa, 9 stages of samatha",
  description:
    "Based on traditional Samatha meditation and scientific approach of The Mind Illuminated, this website will systematically guide you through Nine stages of Samatha meditation to build stable and focused attention",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
