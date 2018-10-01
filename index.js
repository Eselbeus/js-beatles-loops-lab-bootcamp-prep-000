// add solution here
function theBeatlesBlay(arrMusicians, arrInstruments){
 let playArray = [];
 for (i = 0; i < arrMusicians.length; i++){
   let currentMusician = arrMusicians[i];
   let currentInstrument = arrInstruments[i];
   playArray.push(currentMusician + " plays " + currentInstrument);
 }
 return playArray;
}