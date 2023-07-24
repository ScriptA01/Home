import { Injectable } from '@angular/core';
import { HousingLocation } from '../housinglocation';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {}

  addContact(email: string, housingLocation: HousingLocation) {
    const existingContact = this.contacts.find((contact) => contact.email === email);
    if (existingContact) {
      existingContact.housingLocations.push(housingLocation);
    } else {
      const newContact: Contact = {
        email,
        housingLocations: [housingLocation]
      };
      this.contacts.push(newContact);
    }
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}

export interface Contact {
  email: string;
  housingLocations: HousingLocation[];
}
