// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}

function johnLennonFacts(facts) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts[i] = facts[i] + '!!!' + 'foo' + 'bar';
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var num = [];
  do{
    num.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return num;
}
