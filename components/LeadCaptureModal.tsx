'use client';

import { useState } from 'react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  downloadUrl?: string;
}

export function LeadCaptureModal({ isOpen, onClose, title, description, downloadUrl }: LeadCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to LeadConnector/GHL API or webhook endpoint
    console.log('Lead capture:', { name, email, asset: title });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-[#F5F0E8] rounded-lg shadow-xl border border-[#1B3A5C]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#8B8178] hover:text-[#3D3832] text-xl leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#D97757]">
              Gated Resource
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#3D3832]">{title}</h3>
            <p className="mt-2 text-sm text-[#8B8178]">{description}</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-[#3D3832]">
                  Name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-[#1B3A5C]/30 rounded bg-white text-[#3D3832] focus:border-[#D97757] focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="block text-sm font-medium text-[#3D3832]">
                  Email
                </label>
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-[#1B3A5C]/30 rounded bg-white text-[#3D3832] focus:border-[#D97757] focus:outline-none"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!email || !name}
                className="w-full py-3 bg-[#D97757] text-white font-bold rounded hover:bg-[#E09070] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Get Access
              </button>
            </div>
            <p className="mt-3 text-xs text-[#8B8178] text-center">
              No spam. Just the case study + one follow-up email.
            </p>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="text-4xl mb-4 text-green-600">&#10003;</div>
            <h3 className="text-xl font-bold text-[#3D3832]">You&apos;re in.</h3>
            <p className="mt-2 text-sm text-[#8B8178]">Check your inbox for the download link.</p>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="mt-4 inline-block py-2 px-6 bg-[#1B3A5C] text-white rounded hover:bg-[#2E5E8E] transition-colors"
              >
                Download Now
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
