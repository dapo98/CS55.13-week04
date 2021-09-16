/*import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getAllIds(){
const filePath = path.join (dataDir, 'persons.json');
const jsonString = fs.readFileSync(filePath, 'utf8');
const jsonObj = JSON.parse(jsonString);

const objMatch = jsonObj.filter(obj =>{
  return obj.id.toString() === idRequested;
});
const returnedData = jsonObj.map(item=>{
  return{
    params:{
      id: item.id.toString()
    }

  }
});
console.log(returnedData)
return returnedData;

let objReturned;
if (objMatch.length > 0) {
  objReturned = objMatch[0];
}
else{


}
} 

export function getSortedList(){


}

export function getData (idrequested) {
  
}
*/

import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join(process.cwd(), 'data');

// function returns ids for all json objects in array
export function getAllIds() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
  // above code returns an array with nested obj values that looks like this:
  // [
  //   {
  //     params: {
  //       id: 3
  //     }
  //   },
  //   {
  //     params: {
  //       id: 2
  //     }
  //   }
  // ]
}


export function getSortedList() {
  
  const filePath = path.join(dataDir, 'persons.json');
 
  const jsonString = fs.readFileSync(filePath, 'utf8');
 
  const jsonObj = JSON.parse(jsonString);
  
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

export async function getData(idRequested) {
  
  const filePath = path.join(dataDir, 'persons.json');
  
  const jsonString = fs.readFileSync(filePath, 'utf8');
  
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(obj => {
    return obj.id.toString() === idRequested;
  });

  
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  
  return objReturned;
}