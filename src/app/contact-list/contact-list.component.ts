import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact-service/contact-service.component';

@Component({
  selector: 'app-contact-list',
  template: `
    <div *ngIf="contacts.length > 0">
      <h2>Contact List</h2>
      <ul>
        <li *ngFor="let contact of contacts">
          <strong>Email:</strong> {{ contact.email }}
          <ul>
            <li *ngFor="let property of contact.housingLocations">
              {{ property.name }} - {{ property.city }}, {{ property.state }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div *ngIf="contacts.length === 0">
      <p>No contacts found.</p>
    </div>
  `,
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}

