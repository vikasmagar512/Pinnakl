  var url = require('url');
  const fs = require('fs')
  const http = require('http')
  http.createServer(function(req,res){

  const data = fs.readFileSync('../bikes.json')
  const bikesArray = JSON.parse(data);
  //console.log(`bikes = ${bikesArray}`)
  //console.log(`bikes[0] = ${bikesArray[0]['bikes']}`)
  var map={}
  var keysSorted=[]
  bikesArray.map(bikeComb=>{
    let key =''
    bikeComb['bikes'].sort().map(bike=>{
      key+=`~${bike}`
    })
    map[key] = map.hasOwnProperty(key) ? map[key]+1 : 1
    console.log(`key is ${key} value = ${map[key]}`)
  })
  keysSorted = Object.keys(map).sort(function(a,b){return map[b] - map[a]})

  keysSorted.map(bikes=>{
    // console.log(`bikes ${bikes.split('~').join(', ')}`)
  })

  var finalSol=[]
  for(let i=0;i<3;i++){
    let bikes = keysSorted[i]
    console.log(`bikes ${bikes.split('~').join(',')}`)
    finalSol.push(bikes.split('~'))
  }

  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;
  console.log(query);

  res.end(JSON.stringify(finalSol))
  // res.end(JSON.stringify(keysSorted.splice(0,query.count)))
}).listen(8080)

