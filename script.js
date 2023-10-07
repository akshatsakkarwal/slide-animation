const icon = document.querySelectorAll(".icon");
const shadow = document.querySelector("#shadow")

icon.forEach( function(e,index) {
    e.addEventListener("click", function() {
        shadow.style.transform = `translateX(${index*112.5}px`;
    } )
} )