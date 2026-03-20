import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KQWX6QCQ');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQWX6QCQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LayoutClient>
          {children}
        </LayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
