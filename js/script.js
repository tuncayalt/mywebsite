$(function(){
	$(".navbar-toggle").blur(function(event){
		$("#bs-navbar-collapse-1").collapse('hide');
	});
});

//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('#img-jumbo').parallax("30%", 0.1);
        /*add as necessary*/
    }
});

document.getElementById("copy-year").innerHTML = (new Date().getFullYear());
