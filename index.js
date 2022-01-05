// code your solution here
// a. Write a function called superbowlWin()
// b. The function should receive 1 argument, an Array of JavaScript Objects
// c. Each object has two properties: year and result
// d. It should use find() to test each Object to see if the result is "W" — a win!
// e. It should return the year when the win occurred (if it occurred at all!)
// f. If no win is found, it should return, sadly, undefined


// a. the long way
// ===============
// function superbowlWin(array, finder) {
//     let result = null;

//     for(let item of array){
//         if(finder(item) === true){
//             result = item;
//             break;
//         };
//     };

//     return result.year;
// }

// function findWin(item){
//     return item.result === 'W';
// }

// b. The way, I followed the leture video in the checkpoint - Video: .find;
function superbowlWin(array) {


  // let winningYear = array.find(function findW(item){
  //   return item.result === 'W';
  // });
  // !!! - refactor into arrow function...
  let findResult = array.find(item => item.result === 'W');

  if(findResult) {
    return findResult.year;
  }
}


// While working with Enoch
// ========================
// function superbowlWin(records) {
//   let result = records.find(record => (record.result === 'W'));

//   // make sure the result is existing
//   if(result) {
//     return result.year;
//   };
// }