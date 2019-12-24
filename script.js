document.getElementById('button12').addEventListener('click', reload);
document.getElementById('button24').addEventListener('click', reload);
document.getElementById('button36').addEventListener('click', reload);
var numItems;
var score = 0;

function reload(event){
  // document.location.reload();
  createBoard(event);
}

function createBoard(event) {
  var colorMap = new Map();
  for (var i = 0; i < colorChoices.length; i++) { //initalizing the values of the map to 0, because none of the colors have been used yet
    colorMap.set(colorChoices[i], '0');
  }
  const parent = document.getElementById("content");
  while (parent.firstChild) {
    console.log("removing");
    parent.removeChild(parent.firstChild);
  }
  numItems = event.target.id.replace("button", '');
  console.log(numItems);
  console.log(numItems/2);
  for (var i = 0; i < numItems; i++) { //assigning a color value to each block
    var index = Math.trunc(Math.random() * (numItems / 2));
    console.log(i);
    while (colorMap.get(colorChoices[index]) > 2) { //does not allow a color value to be assigned to more than 2 blocks
      console.log('stuck');
      index = Math.trunc(Math.random() * (numItems / 2));
    }
    colorMap.set(colorChoices[index], colorMap.get(colorChoices[index]) + 1);
    document.getElementById("score").innerHTML = score;
    // document.getElementById('score').appendChild(score);
    var box = document.createElement('article');
    box.classList.add('matchingBox');
    box.setAttribute("id", "box" + i);
    box.setAttribute('style', 'background-color: black;');
    box.setAttribute('data-myColor', colorChoices[index]);
    box.setAttribute('data-matched', 'false');

    document.getElementById('content').appendChild(box);
    box.addEventListener('click', changeColor);
  }
}

var clicked = 0;
var colorChoices = ['pink', 'red', 'blue', 'green', 'yellow', 'orange',
  'magenta', 'maroon', 'DarkBlue', 'aqua', 'brown', 'grey', 'gold',
  'cyan', 'coral', 'light pink', 'navy', 'purple'
];



function changeColor(event) { //changes block to its internal color value if clicked on
  document.getElementById(event.target.id).style.backgroundColor = document.getElementById(event.target.id).getAttribute('data-myColor');
  clicked += 1;
  if (clicked == 2) {
    setTimeout(isMatch, 500);
  }
}

function isMatch() { //checks to see if two blocks are a match
  clicked = 0;
  var comparing = []
  for (var i = 0; i < numItems; i++) {
    if (document.getElementById('box' + i).style.backgroundColor !== 'black' && document.getElementById('box' + i).getAttribute('data-matched') == 'false') {
      console.log("color is: " + document.getElementById('box' + i).style.backgroundColor);
      var first = 0;
      if (comparing[0] != null) {
        first = 1;
      }
      comparing[first] = document.getElementById('box' + i).id;
    }
  }
  if (document.getElementById(comparing[0]).getAttribute('data-myColor') != document.getElementById(comparing[1]).getAttribute('data-myColor')) {
    document.getElementById(comparing[0]).setAttribute('style', 'background-color: black');
    document.getElementById(comparing[1]).setAttribute('style', 'background-color: black');
  } else {
    score += 1;
    console.log(score);
    document.getElementById("score").innerHTML = score;
    document.getElementById(comparing[0]).setAttribute('data-matched', 'true');
    document.getElementById(comparing[1]).setAttribute('data-matched', 'true');
    if (score === numItems / 2) {
      alert('you win!');
    }
  }

}
