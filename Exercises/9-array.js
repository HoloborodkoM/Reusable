'use strict';

const phonebook = [
  { name: 'Misha', phone: '+34567' },
  { name: 'Masha', phone: '+89765' },
  { name: 'Denis', phone: '+67849' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
