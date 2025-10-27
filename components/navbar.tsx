"use client"

import { useState } from "react"
import { Menu, X, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="OB.1 AI Solutions" width={480} height={160} className="h-32 w-auto" priority />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
            >
              <FileCheck className="mr-2 h-4 w-4" />
              Get Readiness Score
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                onClick={() => {
                  window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")
                  setIsOpen(false)
                }}
              >
                <FileCheck className="mr-2 h-4 w-4" />
                Get Readiness Score
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
