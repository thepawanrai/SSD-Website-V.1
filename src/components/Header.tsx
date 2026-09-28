import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { Menu, X, Phone, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'मुख्य पृष्ठ', english: 'Home' },
    { path: '/about', label: 'परिचय', english: 'About' },
    { path: '/seva', label: 'सेवा सूची', english: 'Seva' },
    { path: '/temple', label: 'मंदिर', english: 'Temple' },
    { path: '/gaushala', label: 'गौशाला', english: 'Gaushala' },
    { path: '/gurukul', label: 'गुरुकुल', english: 'Gurukul' },
    { path: '/tree-plantation', label: 'वृक्षारोपण', english: 'Tree Plantation' },
    { path: '/campaigns', label: 'अभियान', english: 'Campaigns' },
    { path: '/events', label: 'कार्यक्रम', english: 'Events' },
    { path: '/gallery', label: 'दीर्घा', english: 'Gallery' },
    { path: '/membership', label: 'सदस्यता', english: 'Membership' },
    { path: '/contact', label: 'संपर्क', english: 'Contact' },
  ];

  return (
    <>
      {/* Top Announcements & Quick Contact Bar */}
      <div className="bg-[#481E13] text-[#FAF7F2] text-xs font-sans border-b border-[#5B2A1B]/40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-[#DFB25A] font-medium tracking-wide">
              {siteConfig.tagline}
            </span>
            <span className="hidden md:inline-block text-[#FAF7F2]/40">•</span>
            <span className="hidden md:inline-flex items-center text-[#FAF7F2]/80">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#DFB25A]" />
              ग्राम – पासुन, मौदहा, जनपद – हमीरपुर (उ.प्र.) – 210507
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto text-xs">
            <a
              href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center text-[#FAF7F2]/90 hover:text-[#DFB25A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#DFB25A]" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
            <span className="text-[#FAF7F2]/30">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden sm:inline-flex items-center text-[#FAF7F2]/90 hover:text-[#DFB25A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-1 text-[#DFB25A]" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E7D7C4]'
            : 'bg-[#FAF7F2] py-3.5 border-b border-[#E7D7C4]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2A1B]"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-[#5B2A1B]/20 p-0.5 bg-white shadow-sm flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/SSD Logo.png"
                alt="Satya Sanatan Dham Official Crest"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#5B2A1B] leading-tight tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-sans text-[#793A27] tracking-wider font-semibold">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 text-xs lg:text-sm font-medium transition-colors cursor-pointer rounded-md ${
                    isActive
                      ? 'text-[#5B2A1B] font-bold bg-[#ECE4D6]'
                      : 'text-[#3E2B23] hover:text-[#5B2A1B] hover:bg-[#FAF0E4]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <Link
              to="/tree-plantation"
              className="px-3 py-2 text-xs font-semibold text-[#194023] bg-[#E2EEDF] hover:bg-[#D3E5CF] border border-[#265B33]/30 rounded-md transition-colors inline-flex items-center cursor-pointer shadow-xs"
            >
              🌱 वृक्ष सेवा
            </Link>
            <Link
              to="/donate"
              className="px-4 py-2 text-xs lg:text-sm font-bold text-[#FAF7F2] bg-[#5B2A1B] hover:bg-[#3E1B10] rounded-md transition-all cursor-pointer shadow-sm hover:shadow-md inline-flex items-center space-x-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-[#DFB25A] fill-current" />
              <span>सेवा करें</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <Link
              to="/donate"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-[#FAF7F2] bg-[#5B2A1B] rounded-md transition-colors"
            >
              सेवा करें
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5B2A1B] hover:bg-[#ECE4D6] rounded-md focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E7D7C4] shadow-lg animate-in fade-in duration-150">
            <div className="px-4 pt-3 pb-5 space-y-1">
              <div className="px-3 py-2 bg-[#FCFAF6] border border-[#E7D7C4] rounded-md mb-3 flex items-center justify-between">
                <span className="text-xs text-[#793A27] font-semibold">{siteConfig.tagline}</span>
                <span className="text-xs text-[#5B2A1B] font-bold">ग्राम – पासुन, मौदहा</span>
              </div>

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#5B2A1B] text-[#FAF7F2] font-bold'
                        : 'text-[#3E2B23] hover:bg-[#ECE4D6]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span className={`text-xs ${isActive ? 'text-[#DFB25A]' : 'text-stone-500'}`}>
                        {item.english}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-[#E7D7C4] grid grid-cols-2 gap-2">
                <Link
                  to="/tree-plantation"
                  className="w-full py-2.5 text-xs font-bold text-center text-[#194023] bg-[#E2EEDF] border border-[#265B33]/30 rounded-md"
                >
                  🌱 वृक्ष सेवा
                </Link>
                <Link
                  to="/donate"
                  className="w-full py-2.5 text-xs font-bold text-center text-[#FAF7F2] bg-[#5B2A1B] rounded-md shadow-xs"
                >
                  🙏 सेवा करें
                </Link>
              </div>

              <div className="mt-3 pt-2 text-center text-xs text-[#793A27]">
                हेल्पलाइन: {siteConfig.contact.primaryPhone}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
