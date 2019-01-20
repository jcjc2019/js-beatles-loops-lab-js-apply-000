// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i= 0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}


johnLennonFacts(facts);

function iLoveTheBeatles (num) {
  
  return "I love the Beatles!"
}