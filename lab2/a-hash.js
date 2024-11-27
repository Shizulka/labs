'use strict';

const phonebook = {
    Miku: '+81393939390',
    Teto: '+815744784',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
