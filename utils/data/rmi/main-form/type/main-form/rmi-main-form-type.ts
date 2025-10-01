export type rmiMainFormData = {
  firstName: string;
  lastName: string;
  email: string;
  userEnteredZip: string;
  phone: string;
  birthMonth: string;
  birthYear: string;
  educationLevel: string | { [key: string]: string };
  schoolName: string;
  schoolCity?: string;
  schoolState?: string;
  schoolValue?: string | string;
  priorServiceRank?: string | { [key: string]: string };
  mos?: string;
  meop?: boolean;
  nrotc?: boolean;
  relationship?: string;
};
