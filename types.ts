import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface CareerItem {
  year: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ImageAsset {
  name: string;
  url: string;
  alt: string;
}