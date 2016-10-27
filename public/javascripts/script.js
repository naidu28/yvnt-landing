var splash = {
	counter: 0
}

$(document).ready(function() {
	// Add smooth scrolling to all links
  $("#scroll-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });	
})

window.setInterval(splashUpdate, 6000);

function splashUpdate() {
	var splashImages = $(".splash-img");
	var current = splashImages[splash.counter];
	if (splash.counter >= 3)
		splash.counter = 0;
	else
		splash.counter++;
	var next = splashImages[splash.counter];

	$(next).fadeIn(100, function() {});
	$(current).fadeOut(200, function() {});
	console.log(splash.counter);
}