import { Injectable } from '@angular/core';

interface ISubject {
  id: string;
  name: string;
  iconName: any;
}

const subjects: ISubject[] = [
  { id: '1', name: 'Дакументы', iconName: 'faPassport' },
  { id: '2', name: 'Медыцына', iconName: 'faPills' },
  { id: '3', name: 'Падаткі', iconName: 'faMoneyBill' },
  { id: '4', name: 'Нерухомасць', iconName: 'faHouseChimneyWindow' },
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
