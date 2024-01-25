import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Main Component</h1>

  `,
})
export class MainComponent {}
