let playArea=document.querySelector(".play_block");
let turn=0;
let posOne;
let posTwo;
let gameStarter=0;
let gameWinner=0;
let q=0;

let posOneArr=[

];

let posTwoArr=[
	
];

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






function playerTurn(e){
	if(e.textContent==""&& gameStarter==0){
		if(turn%2==0){
		e.insertAdjacentHTML("afterbegin",`<p style="color:red";>X</p>`);
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
		//console.log(`posOne is `+posOneArr);
		//console.log(`posTwo is `+posTwoArr);
	}
}




function checkEquals(posArrays){
	posArrays.sort(function(a, b){return a - b});
	checkTwoMassives(posArrays);
	if(gameWinner==1){
		console.log(`Winner is ${posArrays}::::${turn}`);
		gameStarter++;
		if(turn%2==0){
			document.querySelector("#text_message").innerHTML="Winner is X";
		}else{
			document.querySelector("#text_message").innerHTML="Winner is O";
		}
	}
	else if(turn==8){
		document.querySelector("#text_message").innerHTML="The match ended in a draw!!!";
	}
}


function restartGame(){
	turn=0;
	posTwoArr=[];
	posOneArr=[];
	gameStarter=0;
	gameWinner=0;
	console.log(document.querySelectorAll(".plates").innerHTML);
	for(let i=1;i<10;++i){
		document.getElementById(i).innerHTML="";
		console.log(document.getElementById(i).innerHTML);
	}
	document.querySelector("#text_message").innerHTML="Let`s go to play!";
}



function checkTwoMassives(posArrays){
	let j=0;
	for(let i=0;i<winnerPositions.length;++i){// 3posArrays to All winnerPositions numbers
		// cut a blocks of big array
		for(let k=0;k<5;++k){ // 3posArrays to 3 winnerPositions numbers
			for(let w=0;w<3;++w){///// 1posArray to 3winnerPositions
				if(posArrays[k]==winnerPositions[j][w]){
					++q;
					if(q>=3){
						gameWinner=1;

					}
				}
			}	
		}
		q=0;
		++j;	
	}
}