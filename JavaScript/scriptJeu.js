var occupees = [0,0,0,0,0,0,0,0,0]; //0 = vide, 1 = joueur, 2 = ordinateur
var tours = 0;
var fin = false;

function morpion(choixCase){
  if(fin == false){
  tours += 1;

  if(choixCase == "a1"){
    if(occupees[0] == 0){
    document.getElementById("case1").style.background = 'Black';
    occupees[0] = 1;
  }
  }
  if(choixCase == "a2"){
    if(occupees[1] == 0){
    document.getElementById("case2").style.background = 'Black';
    occupees[1] = 1;
  }
  }
  if(choixCase == "a3"){
    if(occupees[2] == 0){
    document.getElementById("case3").style.background = 'Black';
    occupees[2] = 1;
  }
  }
  if(choixCase == "b1"){
    if(occupees[3] == 0){
    document.getElementById("case4").style.background = 'Black';
    occupees[3] = 1;
  }
  }
  if(choixCase == "b2"){
    if(occupees[4] == 0){
    document.getElementById("case5").style.background = 'Black';
    occupees[4] = 1;
  }
  }
  if(choixCase == "b3"){
    if(occupees[5] == 0){
    document.getElementById("case6").style.background = 'Black';
    occupees[5] = 1;
  }
  }
  if(choixCase == "c1"){
    if(occupees[6] == 0){
    document.getElementById("case7").style.background = 'Black';
    occupees[6] = 1;
  }
  }
  if(choixCase == "c2"){
    if(occupees[7] == 0){
    document.getElementById("case8").style.background = 'Black';
    occupees[7] = 1;
  }
  }
  if(choixCase == "c3"){
    if(occupees[8] == 0){
    document.getElementById("case9").style.background = 'Black';
    occupees[8] = 1;
  }
  }

  //------------------Au tour de l'ordinateur------------------
  if(tours < 5){
    ordi();
}
else{ // Fin du jeu
  testVictoire();
}
}

function ordi(){
  var choixOrdi = Math.floor(Math.random()*9);



  if(occupees[0] == 2 && occupees[2] == 2 && occupees[1] == 0){ //Possibilités de victoire ordinateur
    choixOrdi = 1;
  }
  else if(occupees[3] == 2 && occupees[5] == 2 && occupees[4] == 0){
    choixOrdi = 4;
  }
  else if(occupees[6] == 2 && occupees[8] == 2 && occupees[7] == 0){
    choixOrdi = 7;
  }

  else if(occupees[0] == 2 && occupees[6] == 2 && occupees[3] == 0){
    choixOrdi = 3;
  }
  else if(occupees[1] == 2 && occupees[7] == 2 && occupees[4] == 0){
    choixOrdi = 4;
  }
  else if(occupees[3] == 2 && occupees[8] == 2 && occupees[5] == 0){
    choixOrdi = 5;
  }

  else if(occupees[0] == 2 && occupees[1] == 2 && occupees[2] == 0){
    choixOrdi = 2;
  }
  else if(occupees[1] == 2 && occupees[2] == 2 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[3] == 2 && occupees[4] == 2 && occupees[5] == 0){
    choixOrdi = 5;
  }
  else if(occupees[4] == 2 && occupees[5] == 2 && occupees[3] == 0){
    choixOrdi = 3;
  }
  else if(occupees[6] == 2 && occupees[7] == 2 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[7] == 2 && occupees[8] == 2 && occupees[6] == 0){
    choixOrdi = 6;
  }

  else if(occupees[0] == 2 && occupees[3] == 2 && occupees[6] == 0){
    choixOrdi = 6;
  }
  else if(occupees[3] == 2 && occupees[6] == 2 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[1] == 2 && occupees[4] == 2 && occupees[7] == 0){
    choixOrdi = 7;
  }
  else if(occupees[4] == 2 && occupees[7] == 2 && occupees[1] == 0){
    choixOrdi = 1;
  }
  else if(occupees[2] == 2 && occupees[5] == 2 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[5] == 2 && occupees[8] == 2 && occupees[2] == 0){
    choixOrdi = 2;
  }

  else if(occupees[0] == 2 && occupees[4] == 2 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[4] == 2 && occupees[8] == 2 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[2] == 2 && occupees[4] == 2 && occupees[6] == 0){
    choixOrdi = 6;
  }
  else if(occupees[4] == 2 && occupees[6] == 2 && occupees[2] == 0){
    choixOrdi = 2;
  }


  else if(occupees[0] == 1 && occupees[2] == 1 && occupees[1] == 0){ //Possibilités de défense
    choixOrdi = 1;
  }
  else if(occupees[3] == 1 && occupees[5] == 1 && occupees[4] == 0){
    choixOrdi = 4;
  }
  else if(occupees[6] == 1 && occupees[8] == 1 && occupees[7] == 0){
    choixOrdi = 7;
  }

  else if(occupees[0] == 1 && occupees[6] == 1 && occupees[3] == 0){
    choixOrdi = 3;
  }
  else if(occupees[1] == 1 && occupees[7] == 1 && occupees[4] == 0){
    choixOrdi = 4;
  }
  else if(occupees[3] == 1 && occupees[8] == 1 && occupees[5] == 0){
    choixOrdi = 5;
  }

  else if(occupees[0] == 1 && occupees[1] == 1 && occupees[2] == 0){
    choixOrdi = 2;
  }
  else if(occupees[1] == 1 && occupees[2] == 1 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[3] == 1 && occupees[4] == 1 && occupees[5] == 0){
    choixOrdi = 5;
  }
  else if(occupees[4] == 1 && occupees[5] == 1 && occupees[3] == 0){
    choixOrdi = 3;
  }
  else if(occupees[6] == 1 && occupees[7] == 1 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[7] == 1 && occupees[8] == 1 && occupees[6] == 0){
    choixOrdi = 6;
  }

  else if(occupees[0] == 1 && occupees[3] == 1 && occupees[6] == 0){
    choixOrdi = 6;
  }
  else if(occupees[3] == 1 && occupees[6] == 1 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[1] == 1 && occupees[4] == 1 && occupees[7] == 0){
    choixOrdi = 7;
  }
  else if(occupees[4] == 1 && occupees[7] == 1 && occupees[1] == 0){
    choixOrdi = 1;
  }
  else if(occupees[2] == 1 && occupees[5] == 1 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[5] == 1 && occupees[8] == 1 && occupees[2] == 0){
    choixOrdi = 2;
  }

  else if(occupees[0] == 1 && occupees[4] == 1 && occupees[8] == 0){
    choixOrdi = 8;
  }
  else if(occupees[4] == 1 && occupees[8] == 1 && occupees[0] == 0){
    choixOrdi = 0;
  }
  else if(occupees[2] == 1 && occupees[4] == 1 && occupees[6] == 0){
    choixOrdi = 6;
  }
  else if(occupees[4] == 1 && occupees[6] == 1 && occupees[2] == 0){
    choixOrdi = 2;
  }

  if(occupees[choixOrdi] != 0){ //On choisi une case vide
    ordi();
  }
  else{
    if(choixOrdi == 0){
      if(occupees[0] == 0){
      document.getElementById("case1").style.background = 'White';
      occupees[0] = 2;
    }
  }
  if(choixOrdi == 1){
    if(occupees[1] == 0){
    document.getElementById("case2").style.background = 'White';
    occupees[1] = 2;
  }
}
if(choixOrdi == 2){
  if(occupees[2] == 0){
  document.getElementById("case3").style.background = 'White';
  occupees[2] = 2;
}
}
if(choixOrdi == 3){
if(occupees[3] == 0){
document.getElementById("case4").style.background = 'White';
occupees[3] = 2;
}
}
if(choixOrdi == 4){
if(occupees[4] == 0){
document.getElementById("case5").style.background = 'White';
occupees[4] = 2;
}
}
if(choixOrdi == 5){
if(occupees[5] == 0){
document.getElementById("case6").style.background = 'White';
occupees[5] = 2;
}
}
if(choixOrdi == 6){
if(occupees[6] == 0){
document.getElementById("case7").style.background = 'White';
occupees[6] = 2;
}
}
if(choixOrdi == 7){
if(occupees[7] == 0){
document.getElementById("case8").style.background = 'White';
occupees[7] = 2;
}
}
if(choixOrdi == 8){
if(occupees[8] == 0){
document.getElementById("case9").style.background = 'White';
occupees[8] = 2;
}
}
}
testVictoire();
}

function testVictoire(){
if(occupees[0] == 1 && occupees[1] == 1 && occupees[2] == 1){ //Détection de victoire joueur
  changeTexte("Vous avez gagné!");
  fin = true;
}
else if(occupees[3] == 1 && occupees[4] == 1 && occupees[5] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}
else if(occupees[6] == 1 && occupees[7] == 1 && occupees[8] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}

else if(occupees[0] == 1 && occupees[3] == 1 && occupees[6] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}
else if(occupees[1] == 1 && occupees[4] == 1 && occupees[7] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}
else if(occupees[2] == 1 && occupees[5] == 1 && occupees[8] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}

else if(occupees[0] == 1 && occupees[4] == 1 && occupees[8] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}
else if(occupees[2] == 1 && occupees[4] == 1 && occupees[6] == 1){
  changeTexte("Vous avez gagné!");
  fin = true;
}

if(occupees[0] == 2 && occupees[1] == 2 && occupees[2] == 2){ //Détection de victoire ordinateur
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(occupees[3] == 2 && occupees[4] == 2 && occupees[5] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(occupees[6] == 2 && occupees[7] == 2 && occupees[8] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}

else if(occupees[0] == 2 && occupees[3] == 2 && occupees[6] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(occupees[1] == 2 && occupees[4] == 2 && occupees[7] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(occupees[2] == 2 && occupees[5] == 2 && occupees[8] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}

else if(occupees[0] == 2 && occupees[4] == 2 && occupees[8] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(occupees[2] == 2 && occupees[4] == 2 && occupees[6] == 2){
  changeTexte("L'ordinateur a gagné!");
  fin = true;
}
else if(tours == 5){
  changeTexte("Egalité!");
  fin = true;
}
}
}

function changeTexte(texte){
document.getElementById('partieTerminee').innerHTML = texte;
}

function recommencer(){
occupees = [0,0,0,0,0,0,0,0,0];
tours = 0;
fin = false;
changeTexte('');

document.getElementById("case1").style.background = 'Grey';
document.getElementById("case2").style.background = 'Grey';
document.getElementById("case3").style.background = 'Grey';
document.getElementById("case4").style.background = 'Grey';
document.getElementById("case5").style.background = 'Grey';
document.getElementById("case6").style.background = 'Grey';
document.getElementById("case7").style.background = 'Grey';
document.getElementById("case8").style.background = 'Grey';
document.getElementById("case9").style.background = 'Grey';
}
