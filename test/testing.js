console.log("I am running")
const pm = require('..');
const Client = new pm.Manager("bruhmoments");
setTimeout(() => {
	Client.addElement("bruh","bruhvalue");
},1000);
