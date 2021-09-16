import fs from 'fs';
import path from 'path';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const dataDir = path.join (process.cwd(), "data" );

//console.log(dataDir);
export default function handler(req, res) {
  const filepath = path.join (dataDir,"persons.json" );

  const jsondata = fs.readFileSync( filepath, "utf8");

  const jsonObj = JSON.parse (jsondata); 

  jsonObj.sort(
    function(a,b){
      return a.name.localeCompare(b.name);
    }
  );
   
  res.status(200).json( jsonObj )
}
