var slideIndex = 3;
cycle()

function pic(x) {
    var element1 = document.getElementById("slider-image-1");
    var element2 = document.getElementById("slider-image-2");
    var element3 = document.getElementById("slider-image-3");
    if (x == 1) {
        element1.style.display = "block";
        element2.style.display = "none";
        element3.style.display = "none";
    }
    if (x == 2) {
        element2.style.display = "block";
        element1.style.display = "none";
        element3.style.display = "none";
    }
    if (x == 3) {
        element3.style.display = "block";
        element2.style.display = "none";
        element1.style.display = "none";
    }
}

function cycle() {
    pic(slideIndex);
    slideIndex++;
    if (slideIndex > 3) { slideIndex = 1 }
    setTimeout(cycle, 10000); // Change image every 2 seconds
}