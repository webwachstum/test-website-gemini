import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export enum BudgetOption {
  LOW = "2.000€ - 5.000€",
  MEDIUM = "5.000€ - 10.000€",
  HIGH = "10.000€ - 25.000€",
  ENTERPRISE = "25.000€+",
}