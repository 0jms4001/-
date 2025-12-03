import React from 'react';
import Section from '../components/Section';
import { IMAGES } from '../constants';

const Resume: React.FC = () => {
  const experiences = [
    { year: "2020 - 현재", title: "박동성 공인중개사 사무소 대표", desc: "강남/서초 상업용 부동산 전문, VIP 자산관리팀 운영" },
    { year: "2015 - 2019", title: "가인 부동산 중개법인 이사", desc: "빌딩 매매 파트 총괄, 연간 거래액 1,000억 달성" },
    { year: "2010 - 2014", title: "대성 공인중개사무소 실장", desc: "재개발/재건축 투자 컨설팅 전담" },
    { year: "2004 - 2009", title: "부동산 중개업 입문 및 자격 취득", desc: "제 15회 공인중개사 자격 취득, 실무 경험 축적" }
  ];

  const education = [
    { year: "2008", title: "부동산 자산관리사(KPM) 취득", desc: "한국부동산자산관리학회" },
    { year: "2004", title: "공인중개사 자격 취득", desc: "한국산업인력공단" },
    { year: "2000", title: "서울 소재 대학교 법학과 졸업", desc: "민법 및 부동산 공법 심화 학습" }
  ];

  return (
    <>
      {/* Header Image */}
      <div className="w-full h-64 bg-slate-800 relative overflow-hidden">
        <img src={IMAGES.DOCUMENT_SIGN.url} alt="Contract" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white font-bold tracking-wider">경력 기술서</h1>
        </div>
      </div>

      <Section title="업무 경력" subtitle="20년, 현장에서 쌓아올린 실력">
        <div className="border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm" />
              <span className="block text-secondary font-bold text-sm mb-1">{exp.year}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
              <p className="text-slate-600">{exp.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="학력 및 자격" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white p-6 shadow-sm border border-slate-100 flex items-start">
              <div className="mr-4 mt-1 w-12 h-1 bg-primary"></div>
              <div>
                <span className="text-xs text-slate-400 block mb-1">{edu.year}</span>
                <h4 className="font-bold text-lg text-slate-800 mb-1">{edu.title}</h4>
                <p className="text-slate-600 text-sm">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="주요 프로젝트">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-primary font-serif uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3 border-b">프로젝트명</th>
                <th className="px-6 py-3 border-b">지역</th>
                <th className="px-6 py-3 border-b">규모</th>
                <th className="px-6 py-3 border-b">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-800">S타워 통매각 프로젝트</td>
                <td className="px-6 py-4">서울 강남구 역삼동</td>
                <td className="px-6 py-4">지하 2층 / 지상 7층</td>
                <td className="px-6 py-4 text-xs bg-green-50 text-green-700 inline-block m-2 rounded">권리관계 복잡 해결</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-800">H병원 부지 매입 컨설팅</td>
                <td className="px-6 py-4">서울 서초구 서초동</td>
                <td className="px-6 py-4">대지 250평</td>
                <td className="px-6 py-4">용도변경 인허가 지원</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-800">K기업 사옥 이전 중개</td>
                <td className="px-6 py-4">판교 테크노밸리</td>
                <td className="px-6 py-4">전용 400평</td>
                <td className="px-6 py-4">임대차 조건 협상 최적화</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-slate-400 mt-4 text-right">* 고객 정보 보호를 위해 구체적인 명칭은 익명 처리되었습니다.</p>
        </div>
      </Section>
    </>
  );
};

export default Resume;