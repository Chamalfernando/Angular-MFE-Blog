import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Stat {
  number: string;
  label: string;
  suffix: string;
}

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  features: Feature[] = [
    {
      icon: 'speed',
      title: 'Lightning Fast',
      description: 'Optimized performance with real-time data processing and instant feedback.',
      color: '#FF6B6B',
    },
    {
      icon: 'security',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with end-to-end encryption and continuous monitoring.',
      color: '#4ECDC4',
    },
    {
      icon: 'analytics',
      title: 'Advanced Analytics',
      description: 'Comprehensive insights with interactive dashboards and detailed reporting.',
      color: '#45B7D1',
    },
    {
      icon: 'integration_instructions',
      title: 'Easy Integration',
      description: 'Seamless API integration with extensive documentation and support.',
      color: '#96CEB4',
    },
  ];

  stats: Stat[] = [
    { number: '10K+', label: 'Active Users', suffix: '' },
    { number: '99.9%', label: 'Uptime', suffix: '' },
    { number: '500+', label: 'Companies', suffix: '' },
    { number: '24/7', label: 'Support', suffix: '' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      avatar: 'https://i.pravatar.cc/150?img=10',
      content:
        'This dashboard has transformed how we manage our operations. The insights are invaluable!',
      rating: 5,
    },
    {
      name: 'Mike Williams',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=12',
      content: 'Outstanding performance and incredible support. Highly recommended for any team.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Operations Director',
      avatar: 'https://i.pravatar.cc/150?img=14',
      content:
        'The best investment we made this year. ROI exceeded all our expectations within weeks.',
      rating: 5,
    },
  ];

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
