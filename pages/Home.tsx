import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Briefcase, Award } from 'lucide-react';
import Section from '../components/Section';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-10 mix-blend-multiply" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 grayscale"
          style={{ backgroundImage: `url(${IMAGES.OFFICE_BG.url})` }}
        />
        
        <div className="relative z-20 px-8 md:px-16 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-white max-w-xl mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 border border-secondary text-secondary text-sm font-semibold tracking-widest mb-4">
              SINCE 2004
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              20년 무사고,<br />
              <span className="text-secondary">안전한 자산</span>을<br />
              약속합니다.
            </h1>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
              복잡한 권리 분석부터 대형 빌딩 거래까지.<br />
              당신의 자산을 지키는 든든한 파트너, 박동성입니다.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-3 bg-secondary text-white font-semibold hover:bg-yellow-600 transition shadow-lg">
                VIP 상담 예약하기
              </Link>
              <Link to="/resume" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-primary transition">
                경력 상세 보기
              </Link>
            </div>
          </div>
          
          <div className="relative w-64 h-80 md:w-80 md:h-96 border-8 border-white/10 shadow-2xl">
            <img 
              src={IMAGES.PROFILE_MAIN.url} 
              alt={IMAGES.PROFILE_MAIN.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl">
              <p className="font-serif text-primary font-bold text-xl">박동성</p>
              <p className="text-slate-500 text-sm">공인중개사 / 대표</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Preview */}
      <Section title="핵심 역량" subtitle="단순 중개를 넘어 가치를 만듭니다">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={32} />,
              title: "권리 분석 시스템",
              desc: "20년의 데이터베이스를 기반으로 숨겨진 리스크까지 찾아내는 완벽한 권리 분석을 제공합니다."
            },
            {
              icon: <TrendingUp size={32} />,
              title: "수익률 극대화",
              desc: "단순 매매가 아닌, 리모델링 및 용도 변경 등 자산 가치 상승을 위한 전략적 솔루션을 제안합니다."
            },
            {
              icon: <Briefcase size={32} />,
              title: "VIP 전담 케어",
              desc: "상담부터 계약, 사후 관리까지. 4050 건물주 및 투자자를 위한 프라이빗 원스톱 서비스를 제공합니다."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 border border-slate-200 hover:border-secondary transition-colors group">
              <div className="text-primary mb-4 group-hover:text-secondary transition-colors">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Indicators */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">숫자로 증명하는 신뢰</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "경력", value: "20", suffix: "년" },
              { label: "중개 사고", value: "0", suffix: "건" },
              { label: "누적 거래액", value: "5000", suffix: "억+" },
              { label: "VIP 고객", value: "300", suffix: "명+" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}<span className="text-xl">{stat.suffix}</span></div>
                <div className="text-slate-300 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <Section className="text-center bg-paper-texture">
        <div className="max-w-2xl mx-auto py-10">
          <Award size={48} className="mx-auto text-secondary mb-6" />
          <p className="font-serif text-xl md:text-2xl italic text-slate-700 mb-8 leading-relaxed">
            "부동산은 고객님의 삶과 땀이 담긴 소중한 자산입니다.<br/>
            그 무게를 알기에, 단 하나의 계약도 허투루 하지 않습니다."
          </p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
            alt="Signature" 
            className="h-16 mx-auto opacity-60"
          />
        </div>
      </Section>
    </>
  );
};

export default Home;