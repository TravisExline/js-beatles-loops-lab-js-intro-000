// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}

function johnLennonFacts() {
  var facts = [
    "foo",
    "bar"
  ];
  var newFacts = [];
  var i = 0;
  while (newFacts.length < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}
