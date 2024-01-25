import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmergencyContactsService } from '../../core/services/emergency-contacts.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { TelegramService } from '../../core/services/telegram.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <h1>Contacts:</h1>
    <ul>
      @for (contact of contacts; track contact.id) {
      <li class="contact-list-item">
        <a href="#">
          <fa-icon
            class="contact-icon-medium"
            [icon]="icons[contact.iconName]"
          ></fa-icon>
          <span class="fa-building-shield">{{ contact.name }}</span>
          <fa-icon class="contact-icon-small" [icon]="icons.faPhone"></fa-icon>
          <span class="phone" (click)="call($event)">{{ contact.phone }}</span>
        </a>
      </li>
      }
    </ul>
  `,
})
export class ContactsComponent {
  public contacts;
  // public faBuildingShield = icons.faBuildingShield;
  private contactsService = inject(EmergencyContactsService);

  public telegram = inject(TelegramService);

  get icons(): any {
    return icons;
  }

  constructor() {
    this.contacts = this.contactsService.emergencyContacts;
  }

  public call(event: any): void {
    console.log(event.target.textContent);
    this.telegram.open(`http://tel:+${event.target.textContent}`);
  }
}
