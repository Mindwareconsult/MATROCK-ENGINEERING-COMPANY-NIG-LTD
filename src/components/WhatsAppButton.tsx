import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/2348061294537?text=Hello%20MATROCK%20ENGINEERING%20COMPANY%20NIG%20LTD%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20%2F%20construction%20project.%20Please%20provide%20more%20information.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact MATROCK ENGINEERING on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-white text-brand-charcoal text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with MATROCK
      </span>
    </a>
  );
}
