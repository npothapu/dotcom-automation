import { recruitingStation } from "../types/recruiting-station";

export const eastCoastRecruitingStation: recruitingStation = {
  name: "US Marine Corps Recruiting Station PORTLAND",
  address: "200 Exhibition Drive Scarborough, ME 04074",
  userEnteredZip: "04101",
  invalidZip: "123456789",
};

export const eastCoastCollegeRecruitingStation: recruitingStation = {
  name: "US Marine Corps Officer Selection Station PORTSMOUTH",
  address: "875 Greenland Ave Suite 1500, Unit 8-1 Bld A Portsmouth, NH 03801",
  userEnteredZip: "04101",
  collegeState: "Maine",
  collegeName: "University of Southern Maine",
};

export const eastCoastOfficer: recruitingStation = {
  name: "US Marine Corps Officer Selection Station PORTSMOUTH",
  address: "875 Greenland Ave Suite 1500, Unit 8-1 Bld A Portsmouth, NH 03801",
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
  name: "US Marine Corps Recruiting Station PORTLAND",
  address: "200 Exhibition Drive Scarborough, ME 04074",
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
  name: "US Marine Corps Prior Service Station CHICOPEE",
  address: "BLDG 5550 WESTOVER ARB  CHICOPEE, MA 01022",
  userEnteredZip: "04101",
  rank: {
    Enlisted: "enlisted",
  },
  servicePreference: {
    Reserves: "reserves",
  },
};
