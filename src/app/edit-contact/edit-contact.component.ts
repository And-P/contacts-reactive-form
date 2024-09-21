import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { phoneTypeValues, addressTypeValues } from '../contacts/contact.model';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

   phoneTypes = phoneTypeValues;
   addressTypes = addressTypeValues;

  contactForm = this.fb.nonNullable.group({

    id: '',
    personal: false,
    firstName: '', 
    lastName: '', 
    dateOfBirth: <Date | null> null, 
    favoritesRanking: <number | null> null, 
    
    phone: this.fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
    }),
    
    address: this.fb.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '', 
    }),

    notes: '',

  });

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private fb: FormBuilder,
  ) { }



  saveContact() {
    // console.log(this.contactForm.controls.firstName.value);
    // console.log(this.contactForm.value.personal, typeof this.contactForm.value.personal);
    console.log(this.contactForm.value.dateOfBirth, typeof this.contactForm.value.dateOfBirth);
    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactsService.getContact(contactId).subscribe((contact) => {

        if (!contact) return; 

        // const names = {firstName: contact.firstName, lastName: contact.lastName };

        this.contactForm.setValue(contact);
        // this.contactForm.patchValue(names);


        // this.contactForm.controls.id.setValue(contact.id);
        // this.contactForm.controls.firstName.setValue(contact.firstName);
        // this.contactForm.controls.lastName.setValue(contact.lastName);
        // this.contactForm.controls.dateOfBirth.setValue(contact.dateOfBirth);
        // this.contactForm.controls.favoritesRanking.setValue(contact.favoritesRanking);

        // this.contactForm.controls.phone.controls.phoneNumber.setValue(contact.phone.phoneNumber);
        // this.contactForm.controls.phone.controls.phoneType.setValue(contact.phone.phoneType);

        // this.contactForm.controls.address.controls.streetAddress.setValue(contact.address.streetAddress);
        // this.contactForm.controls.address.controls.city.setValue(contact.address.city);
        // this.contactForm.controls.address.controls.state.setValue(contact.address.state);
        // this.contactForm.controls.address.controls.postalCode.setValue(contact.address.postalCode);
        // this.contactForm.controls.address.controls.addressType.setValue(contact.address.addressType);
      }
    );
  }

}
