# PersistenceManager
A data storing library that lets you to store data in a JSON file.

PeristenceManager was created to store data on one JSON file, called a persistence. It was designed to only use the native node.js dependecies. Inside the persistence are stored the container objects, which contain the saved data. Each container contains a metadata object and a data array.


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

# Documentation  

## Manager

```js
new PersistenceLib.Manager(SaveName,InitData):class Manager
```  
#### Description:  
Creates a new Persistance Manager which is used to handle the storing and retrieving of the saved data.  

#### Passed Arguments:  
  - SaveName\[string\]: The name used for the storage file.
  - InitData\[any\]: \[Optional\] The data the storage will begin with.

#### Returns
Return Type: Container Array

## Methods :  

## addElement
```js
.addElement(Key,...Elements):array Container
```  
#### Description:  
Adds elements to the save file and container. Returns the data array.  

#### Passed Arguments:  
  - Key\[string or null\]: The key that will be used to index the elements. If null, elements will be pushed in the array.  
  - Elements\[...any\]: The elements to be inserted into the array.  
## removeContainer
```js
.removeContainer():void
```
#### Description:  
Removes entirely the container and destroys the Manager.

#### Returns
Return Type: Container Array  
Summary: Returns the deleted container.