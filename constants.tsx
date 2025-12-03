import { NavItem, ImageAsset } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '경력 기술서', path: '/resume' },
  { label: '전문 분야', path: '/expertise' },
  { label: '중개 철학', path: '/philosophy' },
  { label: '상담 문의', path: '/contact' },
];

export const IMAGES: Record<string, ImageAsset> = {
  PROFILE_MAIN: {
    name: "PROFILE_MAIN",
    url: "https://loremflickr.com/800/800/businessman,suit,asian",
    alt: "박동성 공인중개사"
  },
  OFFICE_BG: {
    name: "OFFICE_BG",
    url: "https://loremflickr.com/1600/900/office,interior,modern",
    alt: "사무실 전경"
  },
  DOCUMENT_SIGN: {
    name: "DOCUMENT_SIGN",
    url: "https://loremflickr.com/1600/900/contract,signing,pen",
    alt: "계약 체결"
  },
  BUILDING_EXTERIOR: {
    name: "BUILDING_EXTERIOR",
    url: "https://loremflickr.com/1600/900/architecture,skyscraper,seoul",
    alt: "상업용 빌딩"
  }
};

export const CONTACT_INFO = {
  phone: "02-1234-5678",
  email: "ds.park@realty-expert.com",
  address: "서울특별시 강남구 테헤란로 123, 파이낸스 타워 15층",
  kakao: "@RealEstatePark"
};