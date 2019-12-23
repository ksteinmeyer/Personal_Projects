for(var i = 0; i < 12; i++){
  document.getElementById('box'+i).addEventListener('click', changeColor);
}

function changeColor(event){
  document.getElementById(event.target.id).style.backgroundColor = 'red';
}
