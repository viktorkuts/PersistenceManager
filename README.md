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


# Usage  

```js
new PersistenceLib.Manager(SaveName,InitData):class Manager
```  
#### Description:  
Creates a new Persistance Manager which is used to handle the storing and retrieving of the saved data.  

#### Passed Arguments:  
  - SaveName\[string\]: The name used for the storage file.
  - InitData\[any\]: \[Optional\] The data the storage will begin with.

## Methods :  
```js
.addElement(Key,...Elements):array Container
```  
#### Description:  
Adds elements to the save file and container. Returns the data array.  

#### Passed Arguments:  
  - Key\[string or null\]: The key that will be used to index the elements. If null, elements will be pushed in the array.  
  - Elements\[...any\]: The elements to be inserted into the array.  
    
```js
.removePersistence():void
```
#### Description:  
Removes entirely the save file and destroys the Manager.
