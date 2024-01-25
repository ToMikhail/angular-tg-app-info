import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface tgButton {
  hide(): void;
  show(): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private window: any;
  public tg;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    if (this.window) {
      this.tg = this.window.Telegram.WebApp;
    }
  }

  get BackButton(): tgButton {
    return this.tg.BackButton;
  }
  ready(): void {
    this.tg.ready();
  }
  expand(): void {
    return this.tg.expand();
  }

  //don't need
  open(link: string) {
    return this.tg.openLink(link);
  }
}
