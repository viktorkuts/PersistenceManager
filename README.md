# PersistenceManager
A persistence npm library that allows you to store data with a plain textfile.

# Example

```js
const PersistenceLib = require('PersistenceManager');
const Manager = PersistenceLib.Manager();

var PersistenceContainer = Manager.createPersistence("TempSave",[5,10,15,"StringElement"]);

PersistenceContainer.addElement(null,20,25,30,"NewStringElement");
PersistenceContainer.addElement("ArrayKey",5,10,15,"StringElement";

console.log(PersistenceContainer.container); // [ 5, 10, 15, "StringElement", 20, 25, 30, "NewStringElement", ["ArrayKey"]: [ 5, 10, 15, "StringElement" ]]

PersistenceContainer.removePersistence("TempSave");

console.log(PersistenceContainer); // undefined
```

