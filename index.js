// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(players[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}