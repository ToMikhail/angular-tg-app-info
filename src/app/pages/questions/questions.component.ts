import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { TelegramService } from '../../core/services/telegram.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>FAQ:</h1>
    <ul>
      @for (product of products; track product.id) {
      <li class="main-list-item">
        <a
          [routerLink]="['article', product.id]"
          routerLinkActive="router-link-active"
        >
          {{ product.id }}
          {{ product.title }}
        </a>
      </li>
      }
    </ul>
  `,
})
export class QuestionsComponent {
  private telegram = inject(TelegramService);
  private productsService = inject(ProductsService);
  public products;

  constructor() {
    this.telegram.BackButton.hide();
    this.products = this.productsService.products;
  }
}
