/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PaymentModal } from './components/PaymentModal';
import { Lightbox } from './components/Lightbox';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScrollToTop } from './components/ScrollToTop';

// Main Institutional Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { SevaView } from './views/SevaView';
import { TempleView } from './views/TempleView';
import { GaushalaView } from './views/GaushalaView';
import { GurukulView } from './views/GurukulView';
import { TreePlantationView } from './views/TreePlantationView';
import { CampaignsView } from './views/CampaignsView';
import { EventsView } from './views/EventsView';
import { GalleryView } from './views/GalleryView';
import { MembershipView } from './views/MembershipView';
import { ContactView } from './views/ContactView';

// Dedicated Separate Pages
import { SevaDetailPage } from './pages/SevaDetailPage';
import { DonatePage } from './pages/DonatePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

function AppLayout() {
  const navigate = useNavigate();

  // Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [donateSevaId, setDonateSevaId] = useState<string | undefined>(undefined);
  const [donateAmount, setDonateAmount] = useState<number | undefined>(undefined);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    src: '',
    alt: '',
    title: '',
    desc: '',
  });

  const handleNavigate = (tab: string) => {
    navigate(tab === 'home' ? '/' : `/${tab}`);
  };

  const handleOpenDonate = (sevaId?: string, amount?: number) => {
    setDonateSevaId(sevaId);
    setDonateAmount(amount);
    setPaymentModalOpen(true);
  };

  const handleOpenLightbox = (
    src: string,
    alt: string,
    title?: string,
    desc?: string
  ) => {
    setLightboxData({
      src,
      alt,
      title: title || alt,
      desc: desc || '',
    });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2421] selection:bg-[#5B2A1B] selection:text-[#FAF7F2]">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Global Sticky Header */}
      <Header onOpenDonate={() => handleOpenDonate()} />

      {/* Multi-Page Routes */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomeView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutView
                onNavigate={handleNavigate}
                onOpenDonate={() => handleOpenDonate()}
              />
            }
          />
          <Route
            path="/seva"
            element={<SevaView onOpenDonate={handleOpenDonate} />}
          />
          <Route path="/seva/:sevaId" element={<SevaDetailPage />} />
          <Route
            path="/temple"
            element={
              <TempleView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/gaushala"
            element={<GaushalaView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/gurukul"
            element={<GurukulView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/tree-plantation"
            element={
              <TreePlantationView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/campaigns"
            element={
              <CampaignsView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventsView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
              />
            }
          />
          <Route
            path="/gallery"
            element={<GalleryView onOpenLightbox={handleOpenLightbox} />}
          />
          <Route
            path="/membership"
            element={<MembershipView onOpenDonate={handleOpenDonate} />}
          />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenDonate={() => handleOpenDonate()} />

      {/* Universal Quick Donation Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        preselectedSevaId={donateSevaId}
        preselectedAmount={donateAmount}
      />

      {/* Universal Image Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        title={lightboxData.title}
        description={lightboxData.desc}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
