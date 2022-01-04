// code your solution here

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
]

//******* This works without .find ******
// function searchRecords(foo) {
//   console.log(foo(record));
// }


// function superbowlWin(array) {
//   let winningYear = [];
  
//   for(let item of array) {
//       if(item.result === "W") {
//           winningYear.push(item.year);
//       };
//   };
  
//   // return `Winning years of: ${winningYear.join(', ')}`;
//   return winningYear[0];
// }

// a. loop through the array
// b. find the first object whose condition return true for have "W" as a result.


// ******* This works without .find as does this one ******

// function superbowlWin(record, findWin) {
//   let result = null;

//   for(let item of record) {
    
//     //for every item in the array, run the findWin function
//     if(findWin(item) === true) {
//       result = item;
//       break;
//     };

//   };

//   return result.year;
// }

// function isWinThere(item) {
//   return item.result === 'W';
// }

// const superbowlWin = record.find(record => (record.result === 'W'));
function superbowlWin(records) {
  let result = records.find(record => (record.result === 'W'));

  // make sure the result is existing
  if(result) {
    return result.year;
  }
  
}