import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import LayoutClient from "@/components/layout-client"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: {
    default: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    template: '%s | OB.1 AI Solutions',
  },
  description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results. Rules before tools.',
  generator: 'v0.app',
  metadataBase: new URL('https://ob1ai.co'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ob1ai.co',
    siteName: 'OB.1 AI Solutions',
    title: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OB.1 AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results.',
    images: ['/twitter-card.png'],
  },
  manifest: '/site.webmanifest',
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
