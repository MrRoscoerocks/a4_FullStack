/*
 var images = ["jsBackgroundO.jpg", "css3BackgroundO.jpg", "javaBackgroundO.jpg", "html5BackgroundO.jpg"];
 $(function() {
 var i = 0;
 $("body").css("background-image", "url(images/" + images[i] + ")");
 setInterval(function() {
 i++;
 if (i == images.length) {
 i = 0;
 }
 $("body").fadeOut("slow", function() {
 $(this).css("background-image", "url(images/" + images[i] + ")");
 $(this).fadeIn("slow");
 });
 }, 4000);
 });
 */
var imageFile = ["jsBackgroundO.jpg", "css3BackgroundO.jpg", "javaBackgroundO.jpg", "html5BackgroundO.jpg", "jqueryBackgroundO.jpg"];
var currentIndex = 0;
var autoBGchanger = setInterval(BCswitcher, 3000);

$(document).ready(function() {
	initializer();
});

function initializer() {
	backgroundInitial();
	invertColors();
}

// Invert Switch :
function invertColors() {
	$('#invertSwitch').click(function() {
		//alert("Toggling invert switch");
		document.getElementById('invertSwitch').checked.toggle;
		if (document.getElementById('invertSwitch').checked == true) {
			inverter();
			//alert("Colors Inverted");
		}
		if (document.getElementById('invertSwitch').checked == false) {
			inverter();
			//alert("Colors Returned to normal");
		}

	});
}

function inverter() {
	// the css we are going to inject
	var css = 'html {-webkit-filter: invert(100%);',

	    head = document.getElementsByTagName('head')[0],
	    style = document.createElement('style');

	// a hack, so you can "invert back" clicking the bookmarklet again
	if (!window.counter) {
		window.counter = 1;
	} else {
		window.counter++;
		if (window.counter % 2 == 0) {
			var css = 'html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
		}
	};

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	//injecting the css to the head
	head.appendChild(style);
}

// Background Switch :
function backgroundInitial() {
	$('#backgroundSwitch').click(function() {
		//alert("Toggling background switch");
		document.getElementById('backgroundSwitch').checked.toggle;
		if (document.getElementById('backgroundSwitch').checked == true) {
			clearInterval(autoBGchanger);
			clickBackground();
		}
		if (document.getElementById('backgroundSwitch').checked == false) {
			autoBackground();
		}

	});
}

function autoBackground() {
	//alert("Now autoSwitching background");
	autoBGchanger = setInterval(BCswitcher, 3000);
}

function BCswitcher() {
	if (currentIndex == imageFile.length) {
		currentIndex = 0;
	}
	$("body").css('background-image', 'url("images/' + imageFile[currentIndex++] + '")');

}

function clickBackground() {
	//alert("Click the title to switch the background");
	$("#titleDiv").click(function() {
		clickSwitcher();
	});
	function clickSwitcher() {
		if (currentIndex == imageFile.length) {
			currentIndex = 0;
		}
		$("body").css('background-image', 'url("images/' + imageFile[currentIndex++] + '")');
	}

}