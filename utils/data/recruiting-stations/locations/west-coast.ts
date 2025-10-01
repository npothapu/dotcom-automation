import { recruitingStation } from "../types/recruiting-station";

export const westCoastRecruitingStation: recruitingStation = {
  name: "Example Organization Recruiting Station WEST",
  address: "987 Demo Avenue Suite A, Example City, EX 98765",
  userEnteredZip: "94579",
  invalidZip: "99999",
  rank: {
    Enlisted: "enlisted",
    Officer: "officer",
  },
  servicePreference: {
    Reserves: "reserves",
    ActiveDuty: "active",
  },
};
