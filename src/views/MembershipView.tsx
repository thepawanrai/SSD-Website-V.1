import React from 'react';
import { siteConfig } from '../config/siteData';
import { ShieldCheck, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface MembershipViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const MembershipView: React.FC<MembershipViewProps> = ({ onOpenDonate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#793A27]">
          स्थायी आत्मिक संबंध
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B]">
          आजीवन सदस्यता (Life Membership)
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          सत्य सनातन धाम के सेवा परिवार से जीवनपर्यंत जुड़ने का पावन सौभाग्य
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs space-y-4 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base text-[#3E2B23]">
        <h2 className="font-serif text-2xl font-bold text-[#5B2A1B]">
          सदस्यता का उद्देश्य एवं महत्व
        </h2>
        <p>
          आजीवन सदस्यता केवल एक औपचारिक पंजीयन नहीं, अपितु सनातन संस्कृति, श्री श्री राधा कृष्ण बिहारी जी की नित्य सेवा, गौवंश के संवर्धन और गुरुकुल के विस्तार में आजीवन सहभागिता का संकल्प है।
        </p>
        <p>
          विभिन्न सेवा संदर्भों के अंतर्गत निर्धारित पावन सदस्यता का विवरण नीचे पारदर्शी रूप से प्रस्तुत है। संस्था के आधिकारिक अभिलेखों में दोनों संदर्भों का सम्मानजनक स्थान है।
        </p>
      </div>

      {/* Two Verified Membership Categories (Context-Preserved) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Tier 1: Temple Daily Service Context */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border-2 border-[#5B2A1B]/30 shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#793A27] bg-[#FAF0E4] px-2.5 py-1 rounded uppercase tracking-wider">
              मंदिर सेवा संदर्भ
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">
              आजीवन सदस्यता (मंदिर सेवा)
            </h3>
            <div className="font-serif text-3xl font-bold text-[#5B2A1B]">
              ₹५१,०००
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              श्री श्री राधा कृष्ण बिहारी जी मंदिर के स्थायी सेवा कोष, नित्य आरती-भोग एवं धार्मिक उत्सवों में आजीवन संरक्षक के रूप में सहभागिता।
            </p>
            <ul className="space-y-2 text-xs text-[#3E2B23] pt-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>मंदिर में यजमान के नाम से वार्षिक पावन संकल्प</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>वार्षिक पाटोत्सव एवं भागवत कथा में विशेष आमंत्रण</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>आजीवन सदस्य प्रमाण पत्र एवं धाम में विश्राम व्यवस्था</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenDonate('ajeevan-sadasyata-51000', 51000)}
            className="w-full py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center space-x-1.5"
          >
            <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
            <span>सदस्यता ग्रहण करें (₹51,000)</span>
          </button>
        </div>

        {/* Tier 2: Anna Daan & Trust Context */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border-2 border-[#C49033]/40 shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#996C1B] bg-[#FAF0E4] px-2.5 py-1 rounded uppercase tracking-wider">
              अन्न दान एवं न्यास संदर्भ
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">
              आजीवन सदस्यता (अन्न क्षेत्र)
            </h3>
            <div className="font-serif text-3xl font-bold text-[#5B2A1B]">
              ₹५५,५५५
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              धाम के निर्बाध अन्न क्षेत्र, साधु सेवा एवं लोक-कल्याणकारी प्रकल्पों को स्थायी वित्तीय संबल प्रदान करने हेतु आजीवन संरक्षक संकल्प।
            </p>
            <ul className="space-y-2 text-xs text-[#3E2B23] pt-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>नित्य अन्नदान एवं भंडारे में आजीवन पुण्य सहभागिता</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>परिवार के नाम से प्रतिवर्ष विशेष भंडारा प्रसादम संकल्प</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#265B33]" />
                <span>संस्था के वार्षिक आयोजनों में विशिष्ट सम्मान</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenDonate('ajeevan-sadasyata-55555', 55555)}
            className="w-full py-3 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] font-bold text-sm rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center space-x-1.5"
          >
            <Heart className="w-4 h-4 text-[#3E1B10] fill-current" />
            <span>सदस्यता ग्रहण करें (₹55,555)</span>
          </button>
        </div>
      </div>

      {/* Note on Transparency */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl border border-[#E7D7C4] text-xs text-stone-600 leading-relaxed text-center">
        * सदस्यता राशि संस्था के अधिकृत बैंक खाते में सीधे जमा की जाती है। किसी भी सहायता अथवा चेक द्वारा भुगतान हेतु संपर्क करें: <strong>{siteConfig.contact.primaryPhone}</strong>
      </div>
    </div>
  );
};
