let playArea=document.querySelector(".play_block");
let turn=0;
let posOne;
let posTwo;
let gameStarter=0;
let gameWinner=0;
let q=0;
let posOneArr=[];
let posTwoArr=[];
let rainbow;
let winnerPositions=[
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7],
];

/////////////////////////////////////////////////////////////////////////

function playerTurn(e){
	if(e.textContent==""&& gameStarter==0){
		if(turn%2==0){
		e.insertAdjacentHTML("afterbegin",`<p style="color:red;";>X</p>`);
		posOne=e.getAttribute("id");
		posOneArr.push(posOne);
		checkEquals(posOneArr);
		turn++;
		}else{
			e.insertAdjacentHTML("afterbegin",`<p style="color:white";>O</p>`);
			posTwo=e.getAttribute("id");
			posTwoArr.push(posTwo);
			checkEquals(posTwoArr);
			turn++;
		}
	}
}


function checkEquals(posArrays){
	posArrays.sort(function(a, b){return a - b});
	checkTwoMassives(posArrays);
	if(gameWinner==1){
		gameStarter++;
		if(turn%2==0){
			document.querySelector("#text_message").innerHTML="Winner is X";
		}else{
			document.querySelector("#text_message").innerHTML="Winner is O";
		}
	}
	else if(turn==8){
		document.querySelector("#text_message").innerHTML="The match ended in a draw!!!";
		document.querySelector(".border_1").classList.add("green");
		document.querySelector(".border_2").classList.add("green");
		document.querySelector(".border_3").classList.add("green");
		document.querySelector(".border_4").classList.add("green");
	}
}


function checkTwoMassives(posArrays){
	let j=0;
	for(let i=0;i<winnerPositions.length;++i){
		for(let k=0;k<5;++k){ 
			for(let w=0;w<3;++w){
				if(posArrays[k]==winnerPositions[j][w]){
					++q;
					if(q>=3){
						gameWinner=1;
						rainbowing();
					}
				}
			}	
		}
		q=0;
		++j;	
	}
}

//////////////////////////////////////////////////////////////////////////
function restartGame(){
	turn=0;
	posTwoArr=[];
	posOneArr=[];
	gameStarter=0;
	gameWinner=0;
	clearInterval(rainbow);
	document.querySelector("#text_message").style.color="#a9ff00";
	document.querySelector("#text_message").style.transform="scale(1)";
	for(let i=1;i<10;++i){
		document.getElementById(i).innerHTML="";
	}
	document.querySelector("#text_message").innerHTML="Let`s go to play!";
	document.querySelector(".border_1").classList.remove("red");
	document.querySelector(".border_2").classList.remove("red");
	document.querySelector(".border_3").classList.remove("red");
	document.querySelector(".border_4").classList.remove("red");
	document.querySelector(".border_1").classList.remove("white");
	document.querySelector(".border_2").classList.remove("white");
	document.querySelector(".border_3").classList.remove("white");
	document.querySelector(".border_4").classList.remove("white");
	document.querySelector(".border_1").classList.remove("green");
	document.querySelector(".border_2").classList.remove("green");
	document.querySelector(".border_3").classList.remove("green");
	document.querySelector(".border_4").classList.remove("green");
}

function rainbowing(){
	if(turn%2==0){
			console.log("fff");
			document.querySelector(".border_1").classList.add("red");
			document.querySelector(".border_2").classList.add("red");
			document.querySelector(".border_3").classList.add("red");
			document.querySelector(".border_4").classList.add("red");
		}else{
			document.querySelector(".border_1").classList.add("white");
			document.querySelector(".border_2").classList.add("white");
			document.querySelector(".border_3").classList.add("white");
			document.querySelector(".border_4").classList.add("white");
		}
		rainbow=setInterval(function(){
		if(document.querySelector("#text_message").style.color=="red"){
			document.querySelector("#text_message").style.color="yellow";
			document.querySelector("#text_message").style.transform="scale(1)";
		}else if(document.querySelector("#text_message").style.color=="yellow"){
			document.querySelector("#text_message").style.color="#a9ff00";
			document.querySelector("#text_message").style.transform="scale(1.3)";
		}else if(document.querySelector("#text_message").style.color="#a9ff00"){
			document.querySelector("#text_message").style.color="red";
			document.querySelector("#text_message").style.transform="scale(1.3)";
		}
	},300);
}
