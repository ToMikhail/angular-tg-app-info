import { Injectable } from '@angular/core';

interface EmergencyContactsInterface {
  id: string;
  name: string;
  phone: string;
  description: string;
  iconName: any;
}

const EmergencyContacts: EmergencyContactsInterface[] = [
  {
    id: '1',
    name: 'Агульны тэлефон',
    phone: '112',
    description:
      '112 — ваш спасительный номер. 112 — это европейский номер телефона службы экстренной помощи, который доступен бесплатно в любой точке ЕС. Позвонив по номеру 112 со стационарных и мобильных телефонов, вы можете вызвать любую экстренную службу: скорую помощь, пожарную команду или полицию. В Польше на 112 звонков отвечают пожарная служба и полиция.',
    iconName: 'faHandHoldingMedical',
    },
  { id: '2', name: 'Служба скорой помощи', phone: '999', description: '', iconName: 'faTruckMedical', },
  { id: '3', name: 'Пажарная брыгада', phone: '998', description: '', iconName: 'faFireExtinguisher', },
  { id: '4', name: 'Паліцыя ', phone: '997', description: '', iconName: 'faBuildingShield', },
  { id: '5', name: 'Муніцыпальная паліцыя ', phone: '986', description: '', iconName: 'faPersonMilitaryPointing', },
  { id: '6', name: 'Аварыйныя сітуацыі з электрычнасцю ', phone: '991', description: '', iconName: 'faBoltLightning', },
  { id: '7', name: 'Аварыйныя сітуацыі з газам ', phone: '992', description: '', iconName: 'faMaskVentilator', },
  { id: '8', name: 'Аварыйная сітуацыя з цэнтралізаваным цеплазабеспячэннем', phone: '993', description: '', iconName: 'faTemperatureEmpty', },
  { id: '9', name: 'Надзвычайныя сітуацыі з водазабеспячэннем і водаадвядзеннем', phone: '994', description: '', iconName: 'faHouseFloodWaterCircleArrowRight', },
  { id: '10', name: 'Аварыйныя сітуацыі на муніцыпальным транспарце', phone: '995', description: '', iconName: 'faBus', },
];

@Injectable({
  providedIn: 'root',
})

export class EmergencyContactsService {
  readonly emergencyContacts: EmergencyContactsInterface[] = EmergencyContacts;

  constructor() {}
  getContacts(): EmergencyContactsInterface[] {
    return [...this.emergencyContacts]
  }
}
