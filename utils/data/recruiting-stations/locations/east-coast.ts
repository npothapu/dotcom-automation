import { recruitingStation } from "../types/recruiting-station";

export const eastCoastRecruitingStation: recruitingStation = {
  name: "Example Organization Recruiting Station EAST",
  address: "123 Example Street, Example City, EX 12345",
  userEnteredZip: "04101",
  invalidZip: "123456789",
};

export const eastCoastCollegeRecruitingStation: recruitingStation = {
  name: "Example Organization Officer Selection Station EAST",
  address: "456 College Avenue Suite 100, Example Town, EX 54321",
  userEnteredZip: "04101",
  collegeState: "Maine",
  collegeName: "University of Southern Maine",
};

export const eastCoastOfficer: recruitingStation = {
  name: "Example Organization Officer Selection Station EAST",
  address: "456 College Avenue Suite 100, Example Town, EX 54321",
  userEnteredZip: "04101",
  rank: {
    Officer: "officer",
  },
  servicePreference: {
    Reserves: "reserves",
    ActiveDuty: "active",
  },
};
export const eastCoastEnlisted: recruitingStation = {
  name: "Example Organization Recruiting Station EAST",
  address: "123 Example Street, Example City, EX 12345",
  userEnteredZip: "04101",
  rank: {
    Enlisted: "enlisted",
  },
  servicePreference: {
    Reserves: "reserves",
    ActiveDuty: "active",
  },
};

export const eastCoastReserves: recruitingStation = {
  name: "Example Organization Prior Service Station EAST",
  address: "789 Reserve Boulevard, Example Base, EX 67890",
  userEnteredZip: "04101",
  rank: {
    Enlisted: "enlisted",
  },
  servicePreference: {
    Reserves: "reserves",
  },
};
