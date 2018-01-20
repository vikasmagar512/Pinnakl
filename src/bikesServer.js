const fs = require('fs')
const http = require('http')
http.createServer(function(req,res){
    const data = fs.readFileSync('../bikes.json')
    const bikesArray = JSON.parse(data);
    console.log(`bikes = ${bikesArray}`)
    console.log(`bikes[0] = ${bikesArray[0]['bikes']}`)
    var map={}
    bikesArray.map(bikeComb=>{
      let key =''
      bikeComb['bikes'].sort().map(bike=>{
        key+=`_${bike}`
      })
      console.log(`key is ${key}`)
      map[key] = map[key] ? map[key]++ : 1
    })
    res.end(JSON.stringify(map))
}).listen(8080)

