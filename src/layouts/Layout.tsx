import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTopButton } from '../components/BackToTopButton';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] lg:pt-[84px]">
        <Outlet />
      </main>
      <WhatsAppButton />
      <BackToTopButton />
      <Footer />
    </div>
  );
}
