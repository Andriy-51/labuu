'use strict';
const phonebook = {
    Bill:"+380669685235",
    Van:"+380678945265",
    Joe:"+380984567188",
    Candice:"+380933758462"
};

const findPhoneByName = (name) =>phonebook[name];

module.exports = { phonebook, findPhoneByName };