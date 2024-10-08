import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact.model';

export class InMemoryContactsApi implements InMemoryDbService {
  createDb() {
    let contacts: Contact[] = [
      {
        id: '5CehW',
        icon: '',
        personal: false,
        firstName: 'Percival',
        lastName: 'Doodleplumb',
        dateOfBirth: new Date('1994/05/05'), // .toISOString() '1994-05-05T06:00:00.000Z'
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-765-4321', phoneType: 'mobile', preferred: false }],
        address: {
          streetAddress: '777 Whimsy Lane',
          city: 'Gleeberg City',
          state: 'Colohoma',
          postalCode: 'A4321',
          addressType: 'home'
        },
        notes: '',
      },
      {
        id: 'A6rwe',
        icon: '',
        personal: false,
        firstName: 'Mortimer',
        lastName: 'Flungford',
        dateOfBirth: new Date('1988/10/05'), // .toISOString()
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-877-5678', phoneType: 'mobile', preferred: false }],
        address: {
          streetAddress: '543 Lullaby Lane',
          city: 'Sleepytown',
          state: 'Ulaska',
          postalCode: 'F2231',
          addressType: 'other'
        },
        notes: '',
      },
      {
        id: '3bNGA',
        icon: '',
        personal: false,
        firstName: 'Wanda',
        lastName: 'Giggleworth',
        dateOfBirth: new Date('1986/11/08'), // .toISOString()
        favoritesRanking: 1,
        phones: [
          { phoneNumber: '555-123-4567', phoneType: 'mobile', preferred: false },
          { phoneNumber: '980-355-7861', phoneType: 'work', preferred: false }
        ],
        address: {
          streetAddress: '123 Merriment Avenue',
          city: 'Dorado City',
          state: 'Mezona',
          postalCode: 'Z2345',
          addressType: 'work'
        },
        notes: '',
      },
      {
        id: '8bCNA',
        icon: '',
        personal: false,
        firstName: 'Camila',
        lastName: 'Hitchcov',
        dateOfBirth: new Date('1991/12/08'), // .toISOString()
        favoritesRanking: 1,
        phones: [{ phoneNumber: '9-8855-4451', phoneType: 'mobile', preferred: false }],
        address: {
          streetAddress: 'Main Town Avenue',
          city: 'San Francisco',
          state: 'California',
          postalCode: '156-888-45',
          addressType: 'home'
        },
        notes: '',
      },
    ]

    return { contacts }
  }
}