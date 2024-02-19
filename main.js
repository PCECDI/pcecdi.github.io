var slideIndex = 1;
var slides = document.querySelectorAll('img.coucou');
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides[i].classList.remove("fade-in");
		slides[i].classList.add("fade-out");
	}

	slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].classList.remove("fade-out");
	slides[slideIndex - 1].classList.add("fade-in");
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}