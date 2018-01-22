const url = require('url');
const fs = require('fs')
const http = require('http')
http.createServer(function(req,res){
  //receiving the number of results to be shown from request
  const url_parts = url.parse(req.url, true);
  const k= url_parts.query.count;

  const data = fs.readFileSync('./priceTimeStampDataset.json')
  let dataset = JSON.parse(data);

  let result = kLargest(dataset,k)
  res.writeHead(200,'Content-Type','text/html')
  res.end(JSON.stringify(result))
}).listen(8080)

/**
 * A function to fix a heap located in an array at a particular position
 * Returns a next position to fix the heap at, or -1.
 */
function fixHeap( array, position,heapSize) {
  let child = position * 2 + 1;
  if (child >= heapSize) {
    return -1;
  }
  // Notice the difference comparator, this is now a max heap
  if (child+1 < heapSize && array[child]['price'] < array[child+1]['price']) {
    child++;
  }
  if (array[child]['price'] > array[position]['price']) {
    // swap the two values
    let temp = array[child];
    array[child] = array[position];
    array[position] = temp;
    return child;
  }
  return -1;
}
function kLargest(array,k) {
  // Build a heap
  for (let i=array.length-1;i>=0;i--) {
    let index = fixHeap(array, i, array.length);
    while (index !== -1) {
      index = fixHeap(array, index, array.length);
    }
  }
  let result = []
  for (let i=0;i<k;i++) {
    // print the k'th maximum
    console.log(array[0]['price'] + " ");
    result.push(array[0])
    // replace it
    array[0] = array[array.length-1-i];
    // fix the heap
    let position = 0;
    while (position !== -1) {
      position = fixHeap(array, position, array.length-1-i);
    }
  }
  return result
}
