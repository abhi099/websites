// image slider
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("show-slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";

    dots[myIndex-1].className += " active";
    setTimeout(carousel, 4000);
}
// slide script end.