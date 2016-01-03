var idElem = "ball";
var src = "src/img/home-simpsons.png";
var srcPain = "src/img/home-simpsons-pain.png";
var audio = new Audio('src/audio/doh.mp3');

var h = 0;
var w = 0;

function id(id){
	return document.getElementById(id);
}

function mover(ele, qnto){

	var top = parseInt(id(ele).style.top);
	var left = parseInt(id(ele).style.left);

	var ww = window.innerWidth - id(ele).width;
	var wh = window.innerHeight - id(ele).height;

	var newTop = dimensao(h, wh, qnto, top);
	var newLeft = dimensao(w, ww, qnto, left);

	if(top < 0)
		h = 0;

	if(left < 0)
		w = 0;

	id(ele).style.top = newTop;
	id(ele).style.left = newLeft;

	h++;
	w++;

	var ball = document.getElementById('ball');

	if(top <= 10 && top >= 0 || left <= 10 && left >= 0 || left >= ww - 10 || top >= wh - 10){
		face(ball, srcPain, 400);
	}

	window.setTimeout("mover('" + ele + "', 2)", 10);

}

function dimensao(count, dimensao, qnto, direcao){

	if(count < dimensao / qnto){
		return parseInt(direcao) + qnto + 'px';
	}else{
		return parseInt(direcao) - qnto + 'px';
	}

}

function createFloater(el, id){

	var floater = document.createElement(el);

	floater.src = src;
	floater.id = id;

	floater.style.position = 'fixed';
	floater.style.top = '0';
	floater.style.left ='0';

	document.body.appendChild(floater);

}

function face(ele, srcModify, time){
	ele.src = srcModify;
	audio.play();
	setTimeout(function(){ ele.src = src; }, time);
}

window.onload = function(){

	createFloater('img', idElem, src);
	mover(idElem, 5);

}
