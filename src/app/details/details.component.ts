import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService, Contact } from '../contact-service/contact-service.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.ts', 
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  
    const email = this.applyForm.value.email as string;
    if (email) {
      if (this.housingLocation) {
        this.contactService.addContact(email, this.housingLocation);
        console.log(`Contact added: ${email}`);
      } else {
        console.log("Error: housingLocation is undefined.");
      }
    } else {
      console.log("Error: Email is null or undefined.");
    }
  }
}