import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { ShieldCheck, Heart, Users, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate?: (tab: string) => void;
  onOpenDonate?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenDonate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#793A27]">
          <span>आधिकारिक परिचय</span>
          <span>•</span>
          <span className="text-[#C49033]">संस्था का ध्येय</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B]">
          सत्य सनातन धाम के बारे में
        </h1>
        <p className="text-base sm:text-lg text-stone-600 font-serif">
          {siteConfig.tagline}
        </p>
      </div>

      {/* Main Story & Institutional Philosophy */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#3E2B23] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#5B2A1B]">
            हमारा संकल्प एवं पावन उद्देश्य
          </h2>
          <p>
            सत्य सनातन धाम एक ऐसा आध्यात्मिक, सांस्कृतिक और सेवा-आधारित प्रयास है, जहाँ सनातन मूल्यों, भारतीय संस्कृति और जन-कल्याण को प्राथमिकता दी जाती है। ग्राम पसून (मौदहा, हमीरपुर, उत्तर प्रदेश) की पावन भूमि पर स्थित यह संस्थान समाज, प्रकृति और आने वाली पीढ़ियों के कल्याण हेतु समर्पित है।
          </p>
          <p>
            हमारा मानना है कि धर्म केवल व्यक्तिगत आस्था नहीं, अपितु समाज के प्रति प्रत्यक्ष सेवा का उत्तरदायित्व है। इसी विचार को मूर्तरूप देने हेतु धाम परिसर में भव्य मंदिर, देशी गोवंश की रक्षा हेतु गौशाला, बच्चों के चरित्र निर्माण हेतु गुरुकुल, और पर्यावरण संतुलन हेतु ११,००० वृक्षों का रोपण किया जा रहा है।
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <Link
              to="/donate"
              className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md hover:bg-[#3E1B10] transition-colors cursor-pointer inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
              <span>सेवा से जुड़ें</span>
            </Link>
            <Link
              to="/seva"
              className="text-xs sm:text-sm font-bold text-[#5B2A1B] hover:underline"
            >
              सेवा सूची देखें →
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#FAF0E4] p-6 rounded-xl border border-[#E7D7C4] space-y-4">
          <div className="w-14 h-14 rounded-full bg-white p-2 mx-auto flex items-center justify-center shadow-xs">
            <img
              src="/SSD Logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logo.png';
              }}
            />
          </div>
          <h3 className="font-serif font-bold text-lg text-center text-[#5B2A1B]">
            संस्था के तीन प्रमुख स्तंभ
          </h3>
          <ul className="space-y-3 text-xs text-[#3E2B23]">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#265B33] flex-shrink-0 mt-0.5" />
              <span><strong>सेवा:</strong> गौ सेवा, अन्नदान, वृक्षारोपण एवं समाज के निर्बल वर्गों का संबल।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C49033] flex-shrink-0 mt-0.5" />
              <span><strong>संस्कार:</strong> गुरुकुल शिक्षा, नैतिक मूल्य, योग-निरोग और नशामुक्त समाज निर्माण।</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#5B2A1B] flex-shrink-0 mt-0.5" />
              <span><strong>सनातन:</strong> श्री राधा कृष्ण बिहारी जी मंदिर, दैनिक भोग-आरती एवं कथा संकीर्तन।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Leadership & Trustees Section (Verified context only) */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs uppercase font-bold text-[#793A27] tracking-wider">
            मार्गदर्शन एवं व्यवस्था
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
            न्यास एवं प्रशासनिक नेतृत्व
          </h2>
          <p className="text-xs text-stone-600">
            आधिकारिक न्यास सूचना एवं सेवा व्यवस्थापन
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {siteConfig.leadership.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[#E7D7C4] shadow-xs space-y-3 text-center sm:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF0E4] text-[#5B2A1B] flex items-center justify-center font-serif font-bold text-lg mx-auto sm:mx-0">
                {person.name[0]}
              </div>
              <div>
                <span className="text-xs text-[#DFB25A] font-bold uppercase tracking-wider block">
                  {person.role}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#5B2A1B]">
                  {person.name}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Location & Contact CTA Card */}
      <div className="bg-[#5B2A1B] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
            धाम पधारने एवं सेवा से जुड़ने हेतु संपर्क करें
          </h3>
          <p className="text-xs text-[#DFB25A]">
            {siteConfig.address.hindiFull}
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#DFB25A] text-[#3E1B10] font-bold text-xs sm:text-sm rounded-md hover:bg-[#C49033] transition-colors cursor-pointer inline-block"
        >
          संपर्क पृष्ठ पर जाएं →
        </Link>
      </div>
    </div>
  );
};
