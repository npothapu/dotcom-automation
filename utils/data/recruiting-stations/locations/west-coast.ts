import { recruitingStation } from "../types/recruiting-station";

export const westCoastRecruitingStation: recruitingStation = {
  name: "US Marine Corps Recruiting Station BERKELEY",
  address: "24780 Hesperian Blvd Suite D Hayward, CA 94545",
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
