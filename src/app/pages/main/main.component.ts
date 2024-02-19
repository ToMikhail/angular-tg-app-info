import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubjectsService } from '../../core/services/subjects.service';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  template: `
    <ul class="main-list">
      @for (subject of subjects; track subject.id) {
      <li class="main-list-item">
        <div routerLinkActive="router-link-active">
          <fa-icon
            class="flex-icon fa-2xl"
            [icon]="icons[subject.iconName]"
          ></fa-icon>
          <p>{{ subject.name }}</p>
        </div>
        <button class="btn main-btn">Open</button>
      </li>
      }
    </ul>
  `,
})
export class MainComponent {
  private subjectsService = inject(SubjectsService);
  public subjects;

  get icons(): any {
    return icons;
  }

  constructor() {
    this.subjects = this.subjectsService.getSubjects();
  }
}
