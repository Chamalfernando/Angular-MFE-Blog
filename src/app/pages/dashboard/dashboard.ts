import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  color: string;
  trend: string;
}

interface ChartData {
  label: string;
  percentage: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressBarModule,
    MatChipsModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats: StatCard[] = [
    {
      title: 'Total Users',
      value: '12,543',
      icon: 'people',
      color: '#FF6B6B',
      trend: '+12%',
    },
    {
      title: 'Revenue',
      value: '$54,321',
      icon: 'attach_money',
      color: '#4ECDC4',
      trend: '+8%',
    },
    {
      title: 'Orders',
      value: '2,847',
      icon: 'shopping_cart',
      color: '#45B7D1',
      trend: '+23%',
    },
    {
      title: 'Conversion',
      value: '3.24%',
      icon: 'trending_up',
      color: '#96CEB4',
      trend: '+4%',
    },
  ];

  chartData: ChartData[] = [
    { label: 'Product A', percentage: 85 },
    { label: 'Product B', percentage: 72 },
    { label: 'Product C', percentage: 90 },
    { label: 'Product D', percentage: 65 },
  ];

  recentActivities = [
    { user: 'John Doe', action: 'Purchased Product A', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'Left a review', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'Added to cart', time: '6 hours ago' },
    { user: 'Sarah Williams', action: 'Wishlist update', time: '8 hours ago' },
  ];
}
