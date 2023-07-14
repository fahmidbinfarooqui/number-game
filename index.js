let onebtn = document.getElementById("one")
let twobtn = document.getElementById("two")
let threebtn = document.getElementById("three")
let startbtn = document.getElementById("startgame")
let yourturn = document.getElementById("yourturn")
let myturn = document.getElementById("myturn")
let sum = document.getElementById("sum")
let result = document.getElementById("result")
let reset = document.getElementById("reset")

let value = 0
let target = 23
let userValue = 0
let myValue = 0

reset.style.display = "none"
onebtn.style.display = "none"
twobtn.style.display = "none"
threebtn.style.display = "none"

function startGame() {
	document.getElementById("startgame").style.display = "none"
	document.getElementById("rules").style.display = "none"
	myturn.innerText = "My Turn: "
	yourturn.innerText = "Your Turn: "	
	sum.innerText = "Sum: "
	onebtn.style.display = "inline"
	twobtn.style.display = "inline"
	threebtn.style.display = "inline"
}

function game() {
	yourturn.textContent += userValue + " " 
	if (value % 4 === 1) {
		if (value === target) {
			userWin();
			return;
		}
		myValue = 2
		value += 2
	}
	else if (value % 4 === 2) {
		if (value === target) {
			userWin();
			return;
		}
		myValue = 1 
		value += 1
	}
	else if (value % 4 === 0) {
		if (value === target) {
			userWin();
			return;
		}
		myValue = 3
		value += 3
	}
	else {
		if (value === target) {
			userWin();
			return;
		}
		myValue = Math.ceil(Math.random()*3)
		value += myValue
	}
	myturn.textContent += myValue + " "
	sum.textContent = "Sum: " + value
	if (value === target) {
		meWin();
		return;
	}
}

function one() {
	userValue = 1
	value += userValue
	game()
}

function two() {
	userValue = 2
	value += userValue
	game()
}

function three() {
	userValue = 3
	value += userValue
	game()
}

function userWin() {
	sum.textContent = "Sum: " + value
	result.textContent = "Congrats! You won!!!"
	reset.style.display = "inline"
	onebtn.style.display = "none"
	twobtn.style.display = "none"
	threebtn.style.display = "none"
}

function meWin() {
	sum.textContent = "Sum: " + value
	result.textContent = "Ah-ha! You lost..."
	reset.style.display = "inline"
	onebtn.style.display = "none"
	twobtn.style.display = "none"
	threebtn.style.display = "none"
}

function resetfunc() {
	value = 0
	target = 23
	userValue = 0
	myValue = 0
	reset.style.display = "none"
	onebtn.style.display = "inline"
	twobtn.style.display = "inline"
	threebtn.style.display = "inline"
	yourturn.innerText = "Your Turn: "
	myturn.innerText = "My Turn: "
	result.innerText = ""
	sum.innerText = "Sum: "
}
