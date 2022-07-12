/* fixed top navbar */ 
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 20);
});



/* nav active links */
let links = document.querySelectorAll(".navbar-nav a");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}


