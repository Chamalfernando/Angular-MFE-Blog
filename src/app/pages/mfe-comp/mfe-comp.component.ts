import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  status: string;
  image: string;
}

@Component({
  selector: 'app-mfe-comp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    TagModule,
    ProgressBarModule,
    RatingModule,
    ToastModule,
    AvatarModule,
    PanelModule,
    DividerModule,
    InputGroupModule
  ],
  templateUrl: './mfe-comp.component.html',
  styleUrl: './mfe-comp.component.scss',
  providers: [MessageService]
})
export default class MfeCompComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = '';
  searchValue: string = '';
  rows: number = 10;

  categories = [
    { label: 'All', value: '' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Clothing', value: 'Clothing' },
    { label: 'Books', value: 'Books' }
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.initializeProducts();
  }

  initializeProducts() {
    this.products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 129.99,
        rating: 4.5,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=WH'
      },
      {
        id: 2,
        name: 'Smartwatch',
        category: 'Electronics',
        price: 299.99,
        rating: 4.8,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=SW'
      },
      {
        id: 3,
        name: 'Cotton T-Shirt',
        category: 'Clothing',
        price: 29.99,
        rating: 4.2,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=CT'
      },
      {
        id: 4,
        name: 'Denim Jeans',
        category: 'Clothing',
        price: 79.99,
        rating: 4.6,
        status: 'Low Stock',
        image: 'https://via.placeholder.com/50?text=DJ'
      },
      {
        id: 5,
        name: 'Angular Guide',
        category: 'Books',
        price: 49.99,
        rating: 4.7,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=AG'
      },
      {
        id: 6,
        name: 'Web Design Book',
        category: 'Books',
        price: 59.99,
        rating: 4.4,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=WD'
      },
      {
        id: 7,
        name: 'USB-C Cable',
        category: 'Electronics',
        price: 19.99,
        rating: 4.3,
        status: 'Available',
        image: 'https://via.placeholder.com/50?text=UC'
      },
      {
        id: 8,
        name: 'Leather Jacket',
        category: 'Clothing',
        price: 199.99,
        rating: 4.9,
        status: 'Out of Stock',
        image: 'https://via.placeholder.com/50?text=LJ'
      }
    ];
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'Available':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'info';
    }
  }

  getFilteredProducts() {
    return this.products.filter(
      p =>
        (this.selectedCategory === '' || p.category === this.selectedCategory) &&
        (this.searchValue === '' ||
          p.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    );
  }

  onAddToCart(product: Product) {
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${product.name} added successfully!`,
      life: 3000
    });
  }

  onViewDetails(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Details',
      detail: `${product.name} - $${product.price}`,
      life: 3000
    });
  }

  onPageChange(event: any) {
    // Handle pagination change
  }
}
