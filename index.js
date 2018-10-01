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
function johnLennonFact(facts){
  let factsReturn = [];
  let i = 0;
  while (i < facts.length){
    let currentFact = facts[i];
    factsReturn.push(currentFact + "!!!")
    i++;
  }
}