// value vs reference

/**
 * 1. Change the 'getObjectClone' function so that 'Success!' gets logged out at the end
 */
function getObjectClone (origin) {
  return Object.assign({}, origin);
}

const user = {
  id: '123',
  profile: { firstName: 'Max', lastName: 'Mueller' }
};

const copy = getObjectClone(user);
copy.profile.lastName = 'Mustermann';

if (user.profile.lastName === 'Mueller') {
  console.log('Success!');
}
