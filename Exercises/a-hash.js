'use strict';

const phonebook = {
  'Misha': '+34567',
  'Masha': '+89765',
  'Denis': '+67849',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
