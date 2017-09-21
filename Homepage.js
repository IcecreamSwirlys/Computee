function Adhese() {
	var navbar = document.getElementById("navbar");

	navbar.classList.toggle("navbar-stuck");
}





// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 0,    // the scene should last for a scroll distance of 100px
        offset: 100        // start this scene after scrolling for 50px
    })
    .setPin(".my-sticky-element") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller









 var mn = $(".navbar");


 $(window).scroll(function() {
	if ( $(this).scrollTop() > 250) {
		mn.addClass("navbar-stuck");
	} else {
		mn.removeClass("navbar-stuck");
	}
});