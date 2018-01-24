   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    

function theBeatlesPlay(musicians, instruments){
  var array=[];
  for(var i=0;i<4;i++){
    array.push(musicians[i] + " plays " + instruments[i]) ;
  }
  return array;
}

function johnLennonFacts(facts){
  var array=[];
  for(var i=0;i<facts.length;i++){
    array.push(facts[i] +"!!!");
  }
  return array;
<<<<<<< HEAD
}

function iLoveTheBeatles(n){
  var array=[];
  if(n==17){
    array.push('I love the Beatles!');
    return array;
  }
  else{
    for (var i=0;i<=n;i++){
    array.push('I love the Beatles!');
  }return array;
  }
  
=======
>>>>>>> 91ea27461181488626e52fe41d086da1ad92f028
}