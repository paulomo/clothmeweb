/**
 * Authorization Roles
 */
const authRoles = {
    admin           : ['admin'],
    staff           : ['admin', 'staff'],
    user            : ['admin', 'staff', 'user'],
    onlyGuest       : [],
    headOffice      : [],
    regionalOffice  : [],
    countryOffice   : []
};

export default authRoles;
