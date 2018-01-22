const url = require('url');
const fs = require('fs')
const http = require('http')
http.createServer(function(req,res){
  //receiving the number of results to be shown from request
  const url_parts = url.parse(req.url, true);
  const resultCount = url_parts.query.count;

  const data = fs.readFileSync('./bikes.json')
  const bikesArray = JSON.parse(data);

  const map={}
  bikesArray.map(bikeComb=>{
    let key =''
    //forming the unique key using alphabetically sorted the array of bikes of each family and joining them using '~' as delimeter
    bikeComb['bikes'].sort().map((bike,i,arr)=>{
      key += (!i && i!==arr.length-1) ? `${bike}~` : `${bike}`
    })
    // if this collection of bikes already exists in the map then increment it, else initialise it
    map[key] = map.hasOwnProperty(key) ? map[key]+1 : 1
  })

  //sorting the object valueWise and making the array of keys
  const valueSorted = Object.keys(map).sort((a,b)=>(map[b] - map[a]))

  const finalSol=[]
  //forming the array of collection of bikes
  for(let i=0; i<resultCount; i++){
    //pushing in each collection of bikes
    console.log(valueSorted[i].split('~') + ' = ' + map[valueSorted[i]] )
    finalSol.push(valueSorted[i].split('~'))
  }
  res.writeHead(200,'Content-Type','text/html')
  res.end(JSON.stringify(finalSol))
}).listen(8080)



