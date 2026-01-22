import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface NavLink {
  label: string;
  route: string;
  icon?: string;
}

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  isMobileOpen = signal(false);
  isDarkMode = signal(false);
  notificationCount = 5;

  navLinks: NavLink[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'MFE', route: '/micro', icon: 'apps' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
  ];

  userProfile: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  };

  toggleMobileMenu(): void {
    this.isMobileOpen.set(!this.isMobileOpen());
  }

  toggleDarkMode(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  logout(): void {
    console.log('Logging out...');
  }
}
