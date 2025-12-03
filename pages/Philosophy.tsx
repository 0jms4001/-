import React from 'react';
import Section from '../components/Section';
import { Quote } from 'lucide-react';
import { IMAGES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <>
      <div className="w-full h-64 bg-slate-800 relative overflow-hidden">
         {/* Abstract background */}
        <div className="absolute inset-0 bg-primary/20 pattern-grid-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white font-bold tracking-wider">중개 철학</h1>
        </div>
      </div>

      <Section className="py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Quote className="text-secondary/30 w-16 h-16 mb-4 rotate-180" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 leading-snug mb-6">
              안전하지 않은 길은<br />
              <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4">절대 가지 않습니다.</span>
            </h2>
            <p className="text-slate-600 leading-loose mb-6 text-lg">
              공인중개사는 단순히 물건을 소개하고 수수료를 받는 직업이 아닙니다. 
              고객의 인생이 담긴 자산을 다루는 '책임'을 지는 자리입니다.
            </p>
            <p className="text-slate-600 leading-loose text-lg">
              20년 전, 첫 사무소를 열며 다짐했던 '무사고'의 원칙.
              화려한 말솜씨보다는 꼼꼼한 서류 확인을,
              무리한 계약 유도보다는 냉철한 분석을 앞세웠기에
              지금까지 단 한 건의 사고 없이 고객님들과 함께할 수 있었습니다.
            </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute -inset-4 border-2 border-secondary/20 rounded-sm"></div>
             <img src={IMAGES.PROFILE_MAIN.url} alt="Profile" className="relative w-full shadow-lg grayscale hover:grayscale-0 transition duration-700" />
          </div>
        </div>
      </Section>

      <Section dark title="고객과의 3가지 약속">
        <div className="space-y-8">
          <div className="flex">
            <div className="mr-6 text-4xl font-serif text-secondary font-bold opacity-50">01</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">투명한 정보 공개</h3>
              <p className="text-slate-600">매물의 장점뿐만 아니라 단점과 리스크까지 가감 없이 말씀드립니다. 판단은 고객님의 몫이지만, 정확한 정보 제공은 저의 의무입니다.</p>
            </div>
          </div>
          <hr className="border-slate-200" />
          <div className="flex">
            <div className="mr-6 text-4xl font-serif text-secondary font-bold opacity-50">02</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">철저한 비밀 유지</h3>
              <p className="text-slate-600">VIP 고객님의 자산 현황과 거래 내역은 철저한 보안 시스템 하에 관리되며, 외부 유출을 원천 차단합니다.</p>
            </div>
          </div>
          <hr className="border-slate-200" />
          <div className="flex">
            <div className="mr-6 text-4xl font-serif text-secondary font-bold opacity-50">03</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">끝까지 책임지는 자세</h3>
              <p className="text-slate-600">계약서 도장을 찍는 순간이 끝이 아닙니다. 잔금 처리, 등기 이전을 넘어 사후 관리까지 책임지고 동행합니다.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Philosophy;