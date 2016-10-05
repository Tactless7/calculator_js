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
	if (z === '+'){
		var result = add(x,y);
		return result;
	}
	else if (z === '-'){
		var result = substract(x,y);
		return result;
	}
	else if (z === 'x'){
		var result = multiply(x,y);
		return result;

	}
	else if (z === '/'){
		var result = divide(x,y);
		return result;
	}
	else {
		return alert('Erreur totalement anormale ! Mais que s\'est-il passé ?');
	}
}

function resultEqual(){
	resultat = calc(nb1,nb2,ope);
	console.log(resultat);
	$('#result').text(resultat);
}

		//Lorsqu'on clique sur un bouton numérique

$('.number').click(function(){
	var numButton = parseInt($(this).data('num'));
	console.log(numButton);

	if(nb1 === null) {
		nb1 = numButton;
		$('#result').append(numButton);
	}
	else if (nb2 === null) {
		nb2 = numButton;
		$('#result').append(numButton);
	}
	else {
		alert('Remettez à 0 avec CE');
	}
	$('.number').blur();
});
		
		// Lorsqu'on clique sur un opérateur

$('.ope').click(function(){
	var operateur = $(this).data('ope');
	console.log(operateur);
	if(ope === null){
		ope = operateur;
		$('#result').append(' ' + operateur + ' ');
	}
	else {
		alert('Vous avez déjà choisi un opérateur, remettez à 0 avec CE si besoin.')
	}
	$('.ope').blur();
});	
	
		// Lorsqu'on clique sur égal

$('#btn-equal').click(function(){
	resultEqual();
	$('#btn-equal').blur();
});


		//Remise à zéro avec CE

$('#btn-del').click(function(){
	nb1 = null;
	nb2 = null;
	ope = null;
	$('#result').text('');
	console.log('Remise à zéro');
	$('#btn-del').blur();
});


		// Input clavier

$(document).keypress(function(e){
	if (e.which === 13 || e.which === 61) {
		console.log('keypress 13')
		resultEqual(); 
		//alert('you pressed enter !');		// CA MAAAAAARCHE	
	}
	else if (e.which === 48){
		if (nb1 === null) {
			nb1 = 0 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 0 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 49){
		if (nb1 === null) {
			nb1 = 1 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 1 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 50){
		if (nb1 === null) {
			nb1 = 2 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 2 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 51){
		if (nb1 === null) {
			nb1 = 3 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 3 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 52){
		if (nb1 === null) {
			nb1 = 4 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 4 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 53){
		if (nb1 === null) {
			nb1 = 5 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 5 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 54){
		if (nb1 === null) {
			nb1 = 6 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 6 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 55){
		if (nb1 === null) {
			nb1 = 7 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 7 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 56){
		if (nb1 === null) {
			nb1 = 8 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 8 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}
	else if (e.which === 57){
		if (nb1 === null) {
			nb1 = 9 ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = 9 ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}

	else if (e.which === 43){
		if (ope === null){
			ope = '+' ;
			$('#result').append(' ' + ope + ' ');
		}
		else{
			alert('Vous avez déjà choisi un opérateur, remettre à 0 avec CE si besoin');
		}
	}
	else if (e.which === 45){
		if (ope === null){
			ope = '-' ;
			$('#result').append(' ' + ope + ' ');
		}
		else{
			alert('Vous avez déjà choisi un opérateur, remettre à 0 avec CE si besoin');
		}
	}
	else if (e.which === 47){
		if (ope === null){
			ope = '/' ;
			$('#result').append(' ' + ope + ' ');
		}
		else{
			alert('Vous avez déjà choisi un opérateur, remettre à 0 avec CE si besoin');
		}
	}
	else if (e.which === 42){
		if (ope === null){
			ope = '*' ;
			$('#result').append(' ' + ope + ' ');
		}
		else{
			alert('Vous avez déjà choisi un opérateur, remettre à 0 avec CE si besoin');
		}
	}
});	