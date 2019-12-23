var colorChoices = ['pink', 'red', 'blue', 'green', 'yellow', 'orange'];
var colorMap = new Map();
for(var i = 0; i < colorChoices.length; i++){ //initalizing the values of the map to 0, because none of the colors have been used yet
  colorMap.set(colorChoices[i], '0');
  console.log(colorMap.get(colorChoices[i]));
}


for (var i = 0; i < 12; i++) { //assigning a color value to each block
  var index = Math.trunc(Math.random() * 6);
  while(colorMap.get(colorChoices[index]) > 2){ //does not allow a color value to be assigned to more than 2 blocks
    index = Math.trunc(Math.random() * 6);
  }
  colorMap.set(colorChoices[index], colorMap.get(colorChoices[index])+1);
  document.getElementById('box' + i).setAttribute('data-myColor', colorChoices[index]);
  document.getElementById('box' + i).addEventListener('click', changeColor);
}

function changeColor(event) { //changes block to its internal color value if clicked on
  console.log(event.target.id);
  console.log(document.getElementById(event.target.id).getAttribute('data-myColor'));
  document.getElementById(event.target.id).style.backgroundColor = document.getElementById(event.target.id).getAttribute('data-myColor');
}
