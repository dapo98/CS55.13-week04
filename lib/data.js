//import fs from 'fs';
//import path from 'path';

import got from 'got';

//const dataDir = path.join(process.cwd(), 'data');


const dataURL = "https://dev-dapo-srjc-fall-2021-cs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";

export async function getAllIds() {
  
  //const filePath = path.join(dataDir, 'persons.json');
  
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
jsonString.body = [];
console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);

  //const jsonObj = JSON.parse(jsonString);
 
  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });

}


export async function getSortedList() {
  
 // const filePath = path.join(dataDir, 'persons.json');
  
 // const jsonString = fs.readFileSync(filePath, 'utf8');
 let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
jsonString.body = [];
console.log(error);
  }
  
  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}


export async function getData(idRequested) {
  
 // const filePath = path.join(dataDir, 'persons.json');
 // const filePath2 = path.join(dataDir, 'relations.json');

  
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  //const jsonString2 = fs.readFileSync(filePath2, 'utf8');

  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
jsonString.body = [];
console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);
 // const jsonObj2 = JSON.parse(jsonString2);

  
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

    const objMatch2 = jsonObj2.filter(obj => {
        return obj.owner_id.toString() === idRequested;
      }
    );

    if (objMatch2.length > 0) {
    
      const objMatch3 = jsonObj.filter(obj => {
          return objMatch2[0].related_ids.includes( obj.id );
        }
      );

      if (objMatch3.length > 0) {
        objReturned.related = objMatch3;
      }
    }

  } else {
    objReturned = {};
  }
  
 

  
  return objReturned;
}