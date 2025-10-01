export type recruitingStation = {
  name: string;
  address: string;
  userEnteredZip: string;
  invalidZip?: string;
  collegeState?: string;
  collegeName?: string;
  rank?: { [key: string]: string };
  servicePreference?: { [key: string]: string };
};
