import React from 'react';
import Section from '../components/Section';
import { Search, Building, LineChart, Scale } from 'lucide-react';
import { IMAGES } from '../constants';

const Expertise: React.FC = () => {
  return (
    <>
      <div className="w-full h-64 bg-slate-800 relative overflow-hidden">
        <img src={IMAGES.BUILDING_EXTERIOR.url} alt="Buildings" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white font-bold tracking-wider">전문 분야</h1>
        </div>
      </div>

      <Section title="토탈 부동산 솔루션" subtitle="단편적인 중개가 아닌, 자산의 전체 라이프사이클을 관리합니다.">
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary rounded-sm">
              <Search size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">정밀 권리 분석</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                등기부등본상의 권리뿐만 아니라, 현장 실사를 통한 유치권, 법정지상권 등 보이지 않는 리스크까지 100% 파악하여 브리핑합니다.
              </p>
              <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                <li>공적 장부 10종 정밀 대조</li>
                <li>현장 탐문 조사를 통한 점유 관계 확인</li>
                <li>법률 전문가 자문 연계</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary rounded-sm">
              <Building size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">상업용 빌딩 매매</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                강남/서초 지역을 중심으로 꼬마빌딩부터 대형 오피스까지 다양한 매물 풀을 보유하고 있습니다.
              </p>
              <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                <li>빅데이터 기반 적정 시세 산출</li>
                <li>매수자 니즈에 맞춘 맞춤형 매물 매칭</li>
                <li>비공개(Off-Market) 우량 매물 보유</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary rounded-sm">
              <LineChart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">수익률 분석 및 가치 제고</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                단순 임대 수익률 계산을 넘어, 리모델링 및 신축 시나리오별 예상 수익 분석(Pro-forma)을 제공합니다.
              </p>
              <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                <li>현재 현금 흐름(Cash Flow) 분석</li>
                <li>대출 레버리지 효과 시뮬레이션</li>
                <li>최유효 이용(Highest and Best Use) 방안 제안</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary rounded-sm">
              <Scale size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">세무·법무 원스톱 연계</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                20년간 협업해온 검증된 세무사, 법무사, 건축사와 함께 계약부터 등기, 세금 신고까지 전 과정을 지원합니다.
              </p>
              <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                <li>양도세/증여세 절세 전략 상담</li>
                <li>법인 설립 및 부동산 취득 컨설팅</li>
                <li>계약서 법률 검토</li>
              </ul>
            </div>
          </div>

        </div>
      </Section>
      
      {/* AI Analysis Feature Highlight */}
      <Section dark className="text-center">
        <h3 className="text-2xl font-serif font-bold text-primary mb-4">AI 기반 시장 분석 시스템 도입</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          최신 Gemini AI 기술을 활용하여 방대한 부동산 시장 데이터를 실시간으로 분석, 
          고객님께 가장 객관적이고 과학적인 투자 지표를 제공합니다.
        </p>
        <div className="inline-block px-6 py-3 border border-slate-300 bg-white text-slate-500 text-sm">
          * 방문 상담 시 AI 상권 분석 보고서를 무료로 제공해 드립니다.
        </div>
      </Section>
    </>
  );
};

export default Expertise;