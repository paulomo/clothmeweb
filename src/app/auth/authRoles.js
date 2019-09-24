/**
 * Authorization Roles
 * will allow headOffice access to some part as well
 * location(city) office
 */
const authRoles = {
  locationAdmin: ["locationAdmin"],
  locationStaff: ["locationAdmin", "locationStaff"],
  user: [
    "headOfficeAdmin",
    "headOfficeStaff",
    "locationAdmin",
    "locationStaff",
    "countryOfficeAdmin",
    "countryOfficeStaff"
  ],
  onlyGuest: [],
  headOfficeAdmin: ["headOfficeAdmin"],
  headOfficeStaff: ["headOfficeAdmin", "headOfficeStaff"],
  regionalOfficeAdmin: ["regionalOfficeAdmin"],
  countryOfficeStaff: ["countryOfficeAdmin", "countryOfficeStaff"]
};

export default authRoles;
