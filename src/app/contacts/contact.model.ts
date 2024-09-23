export interface Contact {
  id: string,
  icon: string,
  personal: boolean,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null, // string,
  favoritesRanking: number | null,
  phone: Phone, // Partial<Phone>
  address: Address, // Partial<Address>
  notes: string,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypeValues = [
  {title: 'Mobile', value: 'mobile'},
  {title: 'Work', value: 'work'},
  {title: 'Other', value: 'other'},
];

export const addressTypeValues = [
  {title: 'Select type', value: ''},
  {title: 'Home', value: 'home'},
  {title: 'Work', value: 'work'},
  {title: 'Other', value: 'other'},
];