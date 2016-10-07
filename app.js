		// Mise à null des variables

var nb1 = null;
var nb2 = null;
var ope = null;
var resultat = null;

var ope_plus = '+';
var ope_minus = '-';
var ope_multiply = 'x';
var ope_divide = '/';


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
	if(nb2 != 0) {
	var result = a / b;
	return result;
	}
	else{
		alert('Vous ne pouvez diviser par 0. Recommencez depuis le début.')
	}
}

function calc(x,y,z){
	if (z === ope_plus){
		var result = add(x,y);
		return result;
	}
	else if (z === ope_minus){
		var result = substract(x,y);
		return result;
	}
	else if (z === ope_multiply){
		var result = multiply(x,y);
		return result;

	}
	else if (z === ope_divide){
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


	// Lorsqu'on tape un nombre au clavier
function keyCodeNumber(value){
		if (nb1 === null) {
			nb1 = value ;
			$('#result').append(nb1);
		}
		else if (nb2 === null){
			nb2 = value ;
			$('#result').append(nb2);
		}
		else {
			alert('Remettez à 0 avec CE.');
		}
	}

	//Lorsqu'on tape un opérateur au clavier
function keyCodeOpe(ope_ope){
	if (ope === null){
			ope = ope_ope ;
			$('#result').append(' ' + ope + ' ');
		}
		else{
			alert('Vous avez déjà choisi un opérateur, remettre à 0 avec CE si besoin');
		}
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
		resultEqual(); 
		//alert('you pressed enter !');		// CA MAAAAAARCHE	
	}
	else if (e.which === 48){
		keyCodeNumber(0);
	}
	else if (e.which === 49){
		keyCodeNumber(1);
	}
	else if (e.which === 50){
		keyCodeNumber(2);
	}
	else if (e.which === 51){
		keyCodeNumber(3);
	}
	else if (e.which === 52){
		keyCodeNumber(4);
	}
	else if (e.which === 53){
		keyCodeNumber(5);
	}
	else if (e.which === 54){
		keyCodeNumber(6);
	}
	else if (e.which === 55){
		keyCodeNumber(7);
	}
	else if (e.which === 56){
		keyCodeNumber(8);
	}
	else if (e.which === 57){
		keyCodeNumber(9);
	}

	else if (e.which === 43){
		keyCodeOpe(ope_plus);
	}
	else if (e.which === 45){
		keyCodeOpe(ope_minus);
	}
	else if (e.which === 47){
		keyCodeOpe(ope_divide);
	}
	else if (e.which === 42){
		keyCodeOpe(ope_multiply);
	}
});	