import React, { useState } from 'react';
import Section from '../components/Section';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '매도',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.');
    setFormData({ name: '', phone: '', type: '매도', message: '' });
  };

  return (
    <>
      <div className="w-full h-64 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white font-bold tracking-wider">상담 문의</h1>
        </div>
      </div>

      <Section className="pb-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">오시는 길</h2>
            <div className="bg-slate-50 p-6 border border-slate-200 mb-8 space-y-4">
              <div className="flex items-start">
                <MapPin className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">주소</h4>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">전화</h4>
                  <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">이메일</h4>
                  <p className="text-slate-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">업무 시간</h4>
                  <p className="text-slate-600">평일 09:30 - 18:30 (주말/공휴일 예약제)</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 flex items-center justify-center text-slate-500 border border-slate-300">
               <div className="text-center">
                 <MapPin size={40} className="mx-auto mb-2 opacity-50" />
                 <span>지도 로딩 중... (실제 구현 시 API 연동)</span>
               </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">VIP 상담 예약</h2>
            <p className="text-slate-600 mb-8">
              상담 내용을 남겨주시면 박동성 대표가 직접 분석하여 연락드립니다.<br/>
              모든 상담 내용은 철저히 비공개로 처리됩니다.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">성함</label>
                <input 
                  type="text" 
                  required
                  className="w-full border-b-2 border-slate-200 bg-transparent py-2 px-1 focus:border-primary focus:outline-none transition-colors"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                <input 
                  type="tel" 
                  required
                  className="w-full border-b-2 border-slate-200 bg-transparent py-2 px-1 focus:border-primary focus:outline-none transition-colors"
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">관심 분야</label>
                <div className="flex gap-4 mt-2">
                  {['매도', '매수', '임대', '자산관리'].map(type => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value={type}
                        checked={formData.type === type}
                        onChange={e => setFormData({...formData, type: e.target.value})}
                        className="mr-2 accent-primary"
                      />
                      <span className="text-slate-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">상담 내용</label>
                <textarea 
                  rows={4}
                  className="w-full border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                  placeholder="보유하신 부동산 정보나 찾으시는 매물 조건 등을 간단히 적어주세요."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 hover:bg-blue-900 transition-colors shadow-lg"
              >
                상담 예약하기
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;