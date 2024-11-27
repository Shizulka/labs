'use strict';


const phonebook = [
    {name:'Hatsune Miku', phone:'+81393939390'},
    {name:'Kasane Teto', phone:'+815744784'}

];

const findPhoneByName = (name) => {
    for (const obj of phone) {
        if (obj.name === name)

            return obj;
    }

}

module.exports = { phonebook, findPhoneByName };