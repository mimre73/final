interface CardInfo {
  values: {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    postalCode: string;
  };
  valid: boolean;
  status: {
    number: 'invalid' | 'incomplete' | 'valid';
    expiry: 'invalid' | 'incomplete' | 'valid';
    cvc: 'invalid' | 'incomplete' | 'valid';
    name: 'invalid' | 'incomplete' | 'valid';
    postalCode: 'invalid' | 'incomplete' | 'valid';
  };
}
