
var pics = [
	"imgs/pablo_bed.jpg",
	"imgs/pablo_beg.jpg",
	"imgs/pablo_chair.jpg",
	"imgs/pablo_champion.jpg",
	"imgs/pablo_ear.jpg",
	"imgs/pablo_eyesclosed.jpg", 
	"imgs/pablo_floor.jpg",
	"imgs/pablo_freak.jpg",
	"imgs/pablo_goodboy.jpg",
	"imgs/pablo_human.jpg",
	"imgs/pablo_king.jpg",
	"imgs/pablo_pizza.jpg",
	"imgs/pablo_princess.jpg",
	"imgs/pablo_tongue.jpg",
	"imgs/pablo_yawn.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img")
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 15){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});



