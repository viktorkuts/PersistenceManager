const fsLib    = require('fs');
const pathLib  = require('path');
const ActiveManager = null;
/* Persistence Storage File

File Type Name: Persistence
"Save" inside the file type name: Container


[
    "container_name":{
        "metadata":{
            createdAt: 0,
            containerName: "container_name"
        },

        "data": []
    }
]


*/


class Manager
{
    /**
     * @param {string} SaveName The key to the container
     * @param {any} [StartData] The data that should be initiated with the new save
     * @returns {class} ManagerClass
     */
    constructor(SaveName,StartData)
    {
        SaveName = SaveName.toLowerCase();
        this.saveName       = SaveName;

        // Try to locate a persistence
        let FoundStuff = fsLib.readdirSync('./',{withFileTypes: true}).map(v => {
            if(v.name === 'persistence.json')
            {
                this.persistence = JSON.parse(fsLib.readFileSync(pathLib.resolve('./',v.name)));
                this.filePath    = pathLib.resolve('./',v.name);
            }
        });

        if (this.persistence !== undefined)
        {
            if (this.persistence[SaveName] !== undefined)
            {
                this.container  = this.persistence[SaveName];
                this.data       = this.container.data;
                this.metadata   = this.container.metadata;
                this.createdAt  = this.metadata.createdAt;
            }else{
                this.container  = this.persistence[SaveName] = [];
                this.data       = this.container.data = [];
                this.metadata   = this.container.metadata = { createdAt: Date.now(), containerName: SaveName };
                this.createdAt  = this.metadata.createdAt;
            }
	}else{

            	fsLib.writeFileSync('./persistence.json',JSON.stringify([]));
	    	this.persistence= [];
		this.container 	= this.persistence[SaveName] = [];
		this.data 	= this.container.data = [];
		this.metadata	= this.container.metadata = { createdAt: Date.now(), containerName: SaveName };
		this.createdAt 	= this.metadata.createdAt;
        }
	    console.log(this);
	    return this;
    }

    /**
     * @param {...any} ElementsToAdd Adds elements to save file
     * @param {string} [Key] Sets as dictionnary
     */
    addElement(Key,Value)
    {
	this.data[Key] = Value;
	

	return this.data;
    }

}

setInterval(() => {
	if (ActiveManager !== null)
	{
		fsLib.readdir('./',(error,file) => {
			if (file === "persistence.json")
			{
				
				fsLib.readFile(pathLib.resolve('./',file),(err,data) => {
					if (JSON.parse(data) !== ActiveManager.persistence)
					{
						console.log("Data Change Detected. Writing new data...");
						fsLib.writeFile(pathLib.resolve('./',file),JSON.parse(data));
					}
				});
			}
		});
	}
});


module.exports = Manager;
