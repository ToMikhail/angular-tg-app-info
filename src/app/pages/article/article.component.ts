import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product, ProductsService } from '../../core/services/products.service';
import { TelegramService } from '../../core/services/telegram.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div [innerHTML]="product?.htmlData"></div>
    <button (click)="goBack()">here</button>
  `,
})
export class ArticleComponent implements OnInit, OnDestroy {
  public product?: Product;
  private telegram = inject(TelegramService);

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private _location: Location
  ) {
    this.product = productsService.getProductById(
      this.activeRoute.snapshot.params['id']
    );
    this.goBack = this.goBack.bind(this);
  }
  public goBack(): void {
    this._location.back();
  }
  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }
  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
