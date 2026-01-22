import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Security', url: '#' },
        { label: 'Updates', url: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#' },
        { label: 'Blog', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Contact', url: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', url: '#' },
        { label: 'Terms', url: '#' },
        { label: 'Cookie Policy', url: '#' },
        { label: 'Disclaimer', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', url: '#' },
        { label: 'API Docs', url: '#' },
        { label: 'Support', url: '#' },
        { label: 'Community', url: '#' },
      ],
    },
  ];

  socialLinks = [
    { icon: 'facebook', url: '#', label: 'Facebook' },
    { icon: 'language', url: '#', label: 'Twitter' },
    { icon: 'language', url: '#', label: 'LinkedIn' },
    { icon: 'language', url: '#', label: 'GitHub' },
  ];
}
