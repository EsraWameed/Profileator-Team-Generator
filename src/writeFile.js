// require fs
const fs = require("fs");
const writeFile = (addHTML) => {
    fs.writeFile("./index.html", addHTML, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("Team generation is complete")
        }
    });
};

//exporting module
module.exports = writeFile;

