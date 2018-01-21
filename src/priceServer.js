var url = require('url');
const fs = require('fs')
const http = require('http')
http.createServer(function(req,res){
  //receiving the number of results to be shown from request
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;
  let resultCount = query.count

  const data = fs.readFileSync('../bikes.json')
  const bikesArray = JSON.parse(data);

  const map={}
  bikesArray.map(bikeComb=>{
    let key =''
    //forming the unique key using alphabetically sorted the array of bikes of each family and joining them using '~' as delimeter
    bikeComb['bikes'].sort().map((bike,i,arr)=>{
      key += (!i && i!==arr.length-1) ? `${bike}~` : `${bike}`
    })
    // if this collection of bikes already exists in the map then increment it else initialise it
    map[key] = map.hasOwnProperty(key) ? map[key]+1 : 1
  })

  //sorting the object valueWise and making the array of keys
  const valueSorted = Object.keys(map).sort((a,b)=>(map[b] - map[a]))

  const finalSol=[]
  //forming the array of collection of bikes
  for(let i=0; i<resultCount; i++){
    //pushing in each collection of bikes
    finalSol.push(valueSorted[i].split('~'))
  }
  res.end(JSON.stringify(finalSol))
}).listen(8080)

var sort = function(array) {
  var len = array.length;
  if(len < 2) {
    return array;
  }
  var pivot = Math.ceil(len/2);
  return merge(sort(array.slice(0,pivot)), sort(array.slice(pivot)));
};

var merge = function(left, right) {
  var result = [];
  while((left.length > 0) && (right.length > 0)) {
    if(left[0]["price"].someProp > right[0]["price"].someProp) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  result = result.concat(left, right);
  return result;
};

var largeList = sort(largeList);

