import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import LayoutClient from "@/components/layout-client"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "OB.1 AI Solutions | Operational Blueprint for AI Implementation",
  description:
    "Transform AI chaos into operational excellence. Get your free AI Readiness Score and build your blueprint in days, not months.",
  generator: "v0.app",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
