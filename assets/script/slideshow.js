let slideIndex = 0; //global variable

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) //traverse all slides to hide them first
        slides[i].style.display = "none";  
    slideIndex++;

    if (slideIndex > slides.length)
        slideIndex = 1;

    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

showSlides();
