var compteur = 0;

function changeCouleurFond(couleur){
      document.body.style.background = couleur;
}

function changeCouleurOver(){
  document.getElementById("defi2").style.background = 'Red';
}

function changeCouleurOut(){
  document.getElementById("defi2").style.background = 'Black';
}

function changeTexteDefi3(texte){
  document.getElementById('defi3').innerHTML = texte;
}

function changeTexteDefi4(texte){
  document.getElementById('defi4').innerHTML = texte;
}

function compteurDeClique(){
  compteur += 1;
  changeTexteDefi4(compteur);
}

var taillePolice = 20;

function diminueTaille(){
  taillePolice -= 1;
  document.getElementById("defi5").style.fontSize = taillePolice + "px";
}

function augmenteTaille(){
  taillePolice += 1;
  document.getElementById("defi5").style.fontSize = taillePolice + "px";
}

function lancerDes(){
  var de1 = Math.floor(Math.random()*6)+1; //Génération aléatoire des dés
  var de2 = Math.floor(Math.random()*6)+1;
  document.getElementById('de1').innerHTML = de1;
  document.getElementById('de2').innerHTML = de2;
}

function fondAleatoire(){
  var r = Math.floor(Math.random()*256); //Génération aléatoire des couleurs
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  document.body.style.background = "rgb("+ r +","+ g + "," + b + ")";
  document.getElementById('defi7').innerHTML = "Rouge: " + r + " Vert: " + g + " Bleu: " + b;
}

var blanc = false;

function inverseFondTexte(){
  if(blanc == false){
  document.getElementById("defi8").style.background = 'White';
  document.getElementById("defi8").style.color = 'Black';
  blanc = true;
}
else{
  document.getElementById("defi8").style.background = 'Black';
  document.getElementById("defi8").style.color = 'White';
  blanc = false;
}
}

function chifoumi(choix){
  choixOrdi = Math.floor(Math.random()*3);
  if(choixOrdi == 0){ //Si choixOrdi == Pierre
    document.getElementById('defi9choix').innerHTML = "L'ordinateur joue Pierre";
    if(choix == 2){
      document.getElementById('defi9reponse').innerHTML = "L'ordinateur a gagné";
    }
    if(choix == 1){
      document.getElementById('defi9reponse').innerHTML = "Vous avez gagné";
    }
  }
  if(choixOrdi == 1){ //Si choixOrdi == Feuille
    document.getElementById('defi9choix').innerHTML = "L'ordinateur joue Feuille";
    if(choix == 0){
      document.getElementById('defi9reponse').innerHTML = "L'ordinateur a gagné";
    }
    if(choix == 2){
      document.getElementById('defi9reponse').innerHTML = "Vous avez gagné";
    }
  }
  if(choixOrdi == 2){ //Si choixOrdi == Ciseaux
    document.getElementById('defi9choix').innerHTML = "L'ordinateur joue Ciseaux";
    if(choix == 0){
      document.getElementById('defi9reponse').innerHTML = "Vous avez gagné";
    }
    if(choix == 1){
      document.getElementById('defi9reponse').innerHTML = "L'ordinateur a gagné";
    }
  }
  if(choixOrdi == choix){ //Égalité
    document.getElementById('defi9reponse').innerHTML = "Égalité";
  }
}

function displayOff(){
  document.getElementById("display").style.display = "none";
}

function visibilityOff(){
  document.getElementById("visibility").style.visibility = "hidden";
}

var clique = 0;

function troisCliques(){
  if(clique < 3){
    document.getElementById("boutonCache").style.display = "none";
    clique += 1;
    document.getElementById('defi11').innerHTML = clique;
  }
  if(clique == 3){
    document.getElementById("boutonCache").style.display = "initial";
  }
}

function activeClique(){
  clique = 0;
  document.getElementById('defi11').innerHTML = clique;
  document.getElementById("boutonCache").style.display = "none";
}

function cachebouton(){
  document.getElementById("boutoncache").style.display = "none";
}

function fondPersonnalise(){
  var saisieRouge;
  var saisieVert;
  var saisieBleu;
  saisieRouge = parseInt(document.getElementById('rouge').value);
  saisieVert = parseInt(document.getElementById('vert').value);
  saisieBleu = parseInt(document.getElementById('bleu').value);
  document.body.style.background = "rgb("+ saisieRouge +","+ saisieVert + "," + saisieBleu + ")";
}

var chiffre;

function plusOuMoins(){
  chiffre = Math.floor(Math.random()*501)+1;
  document.getElementById('reponse').innerHTML = "Entrez une valeur";
}

function validerPlusOuMoins(){
  saisie = parseInt(document.getElementById('texteReponse').value);
  if(saisie == chiffre){
    document.getElementById('reponse').innerHTML = "Gagné!!! La réponse était bien "+ saisie;
  }
  if(saisie < chiffre){
    document.getElementById('reponse').innerHTML = "Trop petit";
  }
  if(saisie > chiffre){
    document.getElementById('reponse').innerHTML = "Trop grand";
  }
}
