'use strict';
const phonebook = [
    {"name":"Billy","phone":"+380669685235"},
    {"name":"Van","phone":"+380678945265"},
    {"name":"Joe","phone":"+380984567188"},
    {"name":"Candice","phone":"+380973758462"}];

const findPhoneByName = (a) =>{
    for (const b of phonebook) {
        if (b.name === a) return b.phone;
      }
};

module.exports = { phonebook, findPhoneByName };