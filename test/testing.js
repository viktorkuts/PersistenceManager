console.log("I am running")
const pm = require('../moduleRouter');
const Client = new pm.Manager("bruhmoments");
Client.addElement(null,[5,10,20]);

console.log(Client)