import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/2348061294537?text=Hello%20ONYIITEX%20CONSTRUCTION%20COMPANY%20LTD%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.%20Please%20provide%20more%20information.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-brand-charcoal text-sm font-medium py-1 px-3 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
