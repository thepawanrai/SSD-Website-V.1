import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E1B10] text-[#FAF7F2] border-t border-[#5B2A1B]">
      {/* Upper Seva Sankalpa Banner */}
      <div className="bg-[#5B2A1B] border-b border-[#793A27]/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#DFB25A] font-semibold">
              पावन संकल्प
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
              आप भी सेवा के इस संकल्प से जुड़ें।
            </h3>
            <p className="text-sm text-[#FAF7F2]/80 mt-1 max-w-xl">
              सेवा, संस्कार और सनातन मूल्यों के माध्यम से समाज, प्रकृति और आने वाली पीढ़ियों के लिए सार्थक प्रयास।
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/tree-plantation"
              className="px-5 py-2.5 bg-[#265B33] hover:bg-[#194023] text-white text-sm font-bold rounded-md transition-colors cursor-pointer border border-[#3D7A4D]/40 shadow-sm"
            >
              🌱 वृक्ष सेवा (₹1,001 से)
            </Link>
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] text-sm font-bold rounded-md transition-colors cursor-pointer shadow-md inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#3E1B10] fill-current" />
              <span>सेवा में सहयोग करें</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex-shrink-0 flex items-center justify-center shadow-xs">
                <img
                  src="/SSD Logo.png"
                  alt="Satya Sanatan Dham Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.png';
                  }}
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#FAF7F2] leading-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-xs text-[#DFB25A] font-medium tracking-wide">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-sans">
              सत्य सनातन धाम एक ऐसा आध्यात्मिक, सांस्कृतिक एवं सेवा-आधारित प्रयास है, जहाँ समाज, प्रकृति, गोवंश एवं सनातन परंपराओं की रक्षा हेतु निरंतर कार्य किया जा रहा है।
            </p>

            <div className="pt-2 text-xs text-[#DFB25A]/90 space-y-1">
              <p className="font-semibold">प्रमुख प्रेरणा:</p>
              <p className="text-[#FAF7F2]/70">सेवा • संस्कार • सनातन</p>
            </div>
          </div>

          {/* Column 2: Separate Page Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              पृष्ठ संदर्शिका (Pages)
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80 font-sans">
              <li>
                <Link to="/" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> मुख्य पृष्ठ (Home)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> हमारे बारे में (About Us)
                </Link>
              </li>
              <li>
                <Link to="/seva" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> सेवा निर्देशिका (All Sevas)
                </Link>
              </li>
              <li>
                <Link to="/temple" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> श्री राधा कृष्ण बिहारी जी मंदिर
                </Link>
              </li>
              <li>
                <Link to="/gaushala" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> गौशाला एवं गौ सेवा
                </Link>
              </li>
              <li>
                <Link to="/gurukul" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> गुरुकुल विस्तार (Gurukul)
                </Link>
              </li>
              <li>
                <Link to="/tree-plantation" className="hover:text-[#DFB25A] transition-colors flex items-center font-bold text-[#E2EEDF]">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> वृक्षारोपण महाअभियान (११,००० वृक्ष)
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> अभियान निर्देशिका (Campaigns)
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> कार्यक्रम एवं उत्सव (Events)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> अधिकृत छायाचित्र दीर्घा
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> आजीवन सदस्यता (Membership)
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-[#DFB25A] transition-colors flex items-center font-semibold text-[#DFB25A]">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> सेवा समर्पण एवं पुष्टि (Contribute)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              संपर्क सूत्र (Contact Us)
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80 font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#DFB25A] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {siteConfig.address.hindiFull}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] text-[#DFB25A] font-semibold">फोन / व्हाट्सएप संपर्क:</p>
                {siteConfig.contact.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-[#DFB25A]" />
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#DFB25A] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#DFB25A]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#DFB25A] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.treeCampaign.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFB25A] hover:underline inline-flex items-center"
                >
                  <span>अभियान पोर्टल: abhiyan.satyasanatandham.org</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Transparent Bank Account Attribution */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              सेवा समर्पण खाता (Bank Details)
            </h4>
            <div className="bg-[#2D140B] p-3.5 rounded-lg border border-[#793A27]/60 space-y-2 text-xs font-sans">
              <div className="flex items-center text-[#DFB25A] text-[11px] font-semibold">
                <ShieldCheck className="w-4 h-4 mr-1 text-[#DFB25A]" />
                <span>अधिकृत बैंक विवरण</span>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/90 leading-tight">
                <strong className="text-white">खाताधारक:</strong> {siteConfig.payment.accountHolder}
                <br />
                <span className="text-[#DFB25A]">({siteConfig.payment.role})</span>
              </p>
              <p className="text-[11px] text-[#FAF7F2]/80">
                <strong>बैंक:</strong> {siteConfig.payment.bank}
                <br />
                <strong>शाखा:</strong> {siteConfig.payment.branch}
              </p>
              <div className="p-2 bg-[#1A0A05] rounded border border-[#5B2A1B] space-y-1">
                <p className="text-[11px]">
                  <strong>खाता संख्या:</strong> <code className="text-[#DFB25A] font-mono">{siteConfig.payment.accountNumber}</code>
                </p>
                <p className="text-[11px]">
                  <strong>IFSC:</strong> <code className="text-[#DFB25A] font-mono">{siteConfig.payment.ifsc}</code>
                </p>
                <p className="text-[11px]">
                  <strong>UPI ID:</strong> <code className="text-[#DFB25A] font-mono">{siteConfig.payment.upiId}</code>
                </p>
              </div>
              <p className="text-[10px] text-[#FAF7F2]/60 leading-tight italic pt-1">
                * {siteConfig.payment.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution Strip */}
        <div className="mt-12 pt-6 border-t border-[#793A27]/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-3">
          <p>© {new Date().getFullYear()} {siteConfig.name} (Satya Sanatan Dham). सर्वाधिकार सुरक्षित।</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-[#DFB25A]">
              गोपनीयता नीति (Privacy Policy)
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#DFB25A]">
              नियम व शर्तें (Terms &amp; Conditions)
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#DFB25A]">
              संपर्क व पता
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
