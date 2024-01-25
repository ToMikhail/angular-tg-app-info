import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './core/services/telegram.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'angular-tg-app-info';
  private telegram = inject(TelegramService);

  constructor() {
    this.telegram.ready();
    this.telegram.expand();
  }
}
