// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments){
    
    let playArray = [];
    for (let i = 0; i < arrMusicians.length; i++){
      let currentMusician = arrMusicians[i];
      let currentInstrument = arrInstruments[i];
      playArray.push(currentMusician + " plays " + currentInstrument);
    }
    return playArray;
}
function johnLennonFacts(facts){
  let factsReturn = [];
  let i = 0;
  while (i < facts.length){
    let currentFact = facts[i];
    factsReturn.push(currentFact + "!!!")
    i++;
  }
  return factsReturn;
}