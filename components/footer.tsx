"use client"

import { Mail, Phone, Linkedin, Facebook, Instagram, MessageCircle, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "The Workshop", href: "/workshop" },
    { label: "Contact", href: "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form" },
  ]

  const legalLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/ob1-ai",
      label: "LinkedIn Company",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/christopherjohnmccarthy",
      label: "LinkedIn Founder",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/OB1-AI-Solutions-61575721675403/",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ob.1_ai/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/12346020500",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ]

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="OB.1 AI Solutions" width={200} height={67} className="h-42 w-auto" />
            </div>
            <p className="text-sm text-slate-400">
              Transforming AI chaos into operational excellence for forward-thinking executives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a href={link.href} className="text-sm hover:text-orange-500 transition-colors">
                      {link.label}
                    </a>
                  ) : link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-orange-500 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-waste-calculator"))}
                  className="text-sm hover:text-orange-500 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  AI Waste Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:admin@ob1ai.co" className="hover:text-orange-500 transition-colors">
                  admin@ob1ai.co
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+12346020500" className="hover:text-orange-500 transition-colors">
                  (234) 602-0500
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <a
                  href="https://wa.me/12346020500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 OB.1 AI Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
