import { Injectable } from '@angular/core';

interface ISubject {
  id: string;
  name: string;
  iconName: string;
}

const subjects: ISubject[] = [
  { id: '1', name: 'Легалізація/дакументы', iconName: 'fa-passport' },
  { id: '2', name: 'Медыцына', iconName: 'fa-pills' },
  { id: '3', name: 'Падаткі', iconName: 'fa-money-check-dollar-pen' },
  { id: '4', name: 'Нерухомасць', iconName: 'fa-house-chimney-window' },
];

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  readonly subjects: ISubject[] = subjects;

  constructor() {}

  public getSubjects(): ISubject[] {
    return [...this.subjects];
  }

  public getSubjectById(id: string): ISubject | undefined {
    return this.subjects.find((s: ISubject) => s.id === id);
  }
}
