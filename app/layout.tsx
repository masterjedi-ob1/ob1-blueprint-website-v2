import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import LayoutClient from "@/components/layout-client"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Architecting AI Process with Operational Blueprints: OB.1",
  description: "Architecting AI Process with Operational Blueprints: OB.1",
  generator: "v0.app",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Architecting AI Process with Operational Blueprints: OB.1",
    description: "Architecting AI Process with Operational Blueprints: OB.1",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'OB.1 AI Solutions' }],
    url: 'https://ob1ai.co',
    siteName: 'OB.1 AI Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Architecting AI Process with Operational Blueprints: OB.1",
    description: "Architecting AI Process with Operational Blueprints: OB.1",
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LayoutClient>
          {children}
        </LayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
