"use client"

import { useState } from "react"
import { Menu, X, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "The Workshop", href: "/workshop" },
    { label: "Contact", href: "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="OB.1 AI Solutions" width={480} height={160} className="h-32 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith("http") ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ),
            )}
            <button
              onClick={() => window.dispatchEvent(new Event("open-waste-calculator"))}
              aria-label="AI Waste Calculator"
              title="AI Waste Calculator"
              className="p-2 border border-slate-600 rounded-md text-white hover:border-orange-500 transition-colors"
            >
              <Calculator className="h-5 w-5" />
            </button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link href="/snapshot">
                Take the Snapshot
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : link.href.startsWith("http") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-waste-calculator"));
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors font-medium"
              >
                <Calculator className="h-4 w-4" />
                AI Waste Calculator
              </button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                asChild
              >
                <Link href="/snapshot" onClick={() => setIsOpen(false)}>
                  Take the Snapshot
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
