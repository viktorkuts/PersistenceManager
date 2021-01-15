const fsLib    = require('fs')
const pathLib  = require('path')
 
class Manager
{
    /**
     * @param {string} SaveName The name used for the index in the current save
     * @param {any} [StartData] The data that should be initiated with the new save
     * @returns {class} ManagerClass
     */
    constructor(SaveName,StartData)
    {
        this.createdAt = Date.now();
        this.savePath  = './';
        this.container = [];
        this.saveName  = SaveName;
        this.saveFile  = CreateFile(pathLib.join(this.savePath,'persistence_' + this.saveName + ".json"),JSON.stringify(this.container));

        function CreateFile(Path,Data)
        {
            fsLib.writeFileSync(Path,Data);
            return Path
        }
    }

    /**
     * @param {...any} ElementsToAdd Adds elements to save file
     * @param {string} [Key] Sets as dictionnary
     */
    addElement(Key,...ElementsToAdd)
    {
        
        if (Key == null)
        {
            this.container.push(ElementsToAdd);
        }else{
            this.container[Key] = ElementsToAdd;
        }
        var Data = fsLib.readFileSync(this.saveFile);
        console.log(Data.toString('utf-8'))
        if (Data.toString() === "[]" || Data.toString() === "") {
            Data = JSON.parse(Data.toString('utf-8'));
            this.container = JSON.stringify(this.container.concat(Data));
        }else{
            fsLib.writeFileSync(this.saveFile,JSON.stringify(this.container));
        }
        return this.container
    }
}

module.exports = Manager;
