var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var correctedText = text.replace('Velociraptor', dinosaurUpperCased);

console.log(correctedText.substr(0, text.length/2))
 