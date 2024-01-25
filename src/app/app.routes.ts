import { Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MainComponent } from './pages/main/main.component';
import { QuestionsComponent } from './pages/questions/questions.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'questions/article/:id',
    component: ArticleComponent,
  },
  { path: 'contacts', component: ContactsComponent },
];
