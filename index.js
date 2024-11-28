$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

let isScrolling = false;

document.addEventListener("scroll", function () {
  if (!isScrolling) {
    isScrolling = true;
    
    setTimeout(function () {
      const portfolioItems = document.querySelectorAll(".section"); // Select all elements with the "section" class
      
      portfolioItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top; // Get the element's top position relative to the viewport
        const windowHeight = window.innerHeight;

        // Add the "visible" class if the element is in the viewport
        if (itemPosition < windowHeight - 50) { // Adjust the threshold (-50 for a slight offset)
          item.classList.add("visible");
        }
      });
      
      isScrolling = false;
    }, 50); // Delay execution to allow for scrolling to finish
  }
});