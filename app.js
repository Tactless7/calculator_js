		// Mise à null des variables

var nb1 = null;
var nb2 = null;
var ope = null;
var resultat = null;


		// Mise en place des fonctions avec les différentes opérations

function add(a,b) {
	var result = a +b;
	return result; 
}

function substract(a,b){
	var result = a - b;
	return result;
}

function multiply(a,b){
	var result = a * b;
	return result;
}

function divide(a,b){
	var result = a / b;
	return result;
}

function calc(x,y,z){
	if (z === 'addition'){
		var result = add(x,y);
		return result;
	}
	else if (z === 'substraction'){
		var result = substract(x,y);
		return result;
	}
	else if (z === 'multiplication'){
		var result = multiply(x,y);
		return result;

	}
	else if (z === 'division'){
		var result = divide(x,y);
		return result;
	}
	else {
		return alert('Erreur totalement anormale ! Mais que s\'est-il passé ?');
	}
}

		//Lorsqu'on clique sur un bouton numérique

$('.number').click(function(){
	var numButton = parseInt($(this).data('num'));
	console.log(numButton);

	if(nb1 === null) {
		nb1 = numButton;
		$('#result').append(numButton)
	}
	else if (nb2 === null) {
		nb2 = numButton;
		$('#result').append(numButton)
	}
	else {
		alert('Remettez à 0 avec CE');
	}

});



		// Lorsqu'on clique sur un opérateur

$('#btn-plus').click(function(){
	if(ope === null){
		ope = 'addition';
		$('#result').append(' + ');
	}
	else {
		alert('Vous avez déjà choisi un opérateur, remettez à 0 avec CE si besoin.')
	}
});
$('#btn-minus').click(function(){
	if(ope === null){
		ope = 'substraction';
		$('#result').append(' - ');
	}
	else {
		alert('Vous avez déjà choisi un opérateur, remettez à 0 avec CE si besoin.')
	}
});
$('#btn-div').click(function(){
	if(ope === null){
		ope = 'division';
		$('#result').append(' / ');
	}
	else {
		alert('Vous avez déjà choisi un opérateur, remettez à 0 avec CE si besoin.')
	}
});
$('#btn-mult').click(function(){
	if(ope === null){
		ope = 'multiplication';
		$('#result').append(' x ');
	}
	else {
		alert('Vous avez déjà choisi un opérateur, remettez à 0 avec CE si besoin.')
	}
});

		
		// Lorsqu'on clique sur égal

$('#btn-equal').click(function(){
	resultat = calc(nb1,nb2,ope);
	console.log(resultat);
	$('#result').text(resultat);
});


		//Remise à zéro avec CE

$('#btn-del').click(function(){
	nb1 = null;
	nb2 = null;
	ope = null;
	$('#result').text('');
	console.log('Remise à zéro');
});

