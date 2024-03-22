const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let carousel = document.querySelector(".banner-img");
let carouselTitle = document.querySelector("p")
let i = 0;

// Left Arrow

let leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", goLeft);
function goLeft() {
	console.log('go to left slide')
	i--
	if(i<0) {
		i = slides.length-1
	}
	carousel.setAttribute("src", "assets/images/slideshow/" + slides[i].image)
	carouselTitle.innerHTML = slides[i].tagLine
	let dotSelected = document.querySelector(".dot_selected")
	if (dotSelected.previousElementSibling == null) {
		dotContainer.lastElementChild.classList.add("dot_selected")
		dotSelected.classList.remove("dot_selected")
	}
	else {
		dotSelected.previousElementSibling.classList.add("dot_selected")
		dotSelected.classList.remove("dot_selected")
	}
}

// Right Arrow

let rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", goRight);
function goRight() {
	console.log('go to right slide')
	i++
	if (i==slides.length) {
		i = 0
	}
	carousel.setAttribute("src", "assets/images/slideshow/" + slides[i].image)
	carouselTitle.innerHTML = slides[i].tagLine
	let dotSelected = document.querySelector(".dot_selected")
	if (dotSelected.nextElementSibling == null) {
		dotContainer.firstElementChild.classList.add("dot_selected")
		dotSelected.classList.remove("dot_selected")
	}
	else {
		dotSelected.nextElementSibling.classList.add("dot_selected")
		dotSelected.classList.remove("dot_selected")
	}
	
}

// Dots

let dotContainer = document.querySelector(".dots")

// slides.forEach((slide) => console.log(slide)) 
slides.forEach((slide) => {
	const dot = document.createElement("div");
	dot.className = "dot";
	console.log(dot)
	dotContainer.append(dot);
})
// first dot is selected by default
dotContainer.firstElementChild.classList.add("dot_selected")