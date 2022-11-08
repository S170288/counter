// document.getElementById("count-el").innerHTML=5;

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0;

function increment(){
	count+=1
	countEl.textContent=count
}

function save(){
	let constStr= count + " - "
	saveEl.textContent +=constStr
	countEl.textContent=0
	count=0
}

