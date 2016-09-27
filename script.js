	
	/* votre fonction ici*/

var paragraphe = document.querySelector('p');
var bouton = document.querySelector('button');

var corpsParent = document.querySelector('body');

/*document.querySelector('button').onclick = function() {
	changerStyle(document.querySelector('p'));
};*/

function changerStyle(element) {
	element.style.color = 'white';
	element.style.backgroundColor = 'black';
	element.style.border = '10px dotted red';
	element.style.padding = '5px';
};

// DEUXIEME PARTIE DE L'EXERCICE 


//Déclaration de la fonction qui permet de créer le paragraphe et le bouton.
function creerParagBout() {
	
	//Création du paragraphe et du bouton : ils ne seront pour le moment liés à rien
	var nouvParag = document.createElement('p');
	var nouvBouton = document.createElement('button');
	
	//Attribution d'id à ces 2 elements.
	nouvParag.class = 'parag2';
	nouvBouton.class = 'bouton2';
	nouvBouton.setAttribute('onclick','changerStyle2()')

	//Insertion des elements
	corpsParent.appendChild(nouvParag);
	corpsParent.appendChild(nouvBouton);

	//Création du texte du paragraphe et du texte du bouton
	var nouvText = document.createTextNode("Je suis fatigué par ce script !!!!!!!");
	var nouvTextBouton = document.createTextNode("Change moi de style");

	//Insertion des elements texte
	nouvParag.appendChild(nouvText);
	nouvBouton.appendChild(nouvTextBouton);

}

function changerStyle2() {
	var parag2 = document.getElementByClass('parag2');
	parag2.style.color = "blue";
	parag2.style.backgroundColor = "yellow";
	parag2.style.border = "7px solid green";
}
