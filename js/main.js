
function openNav() {
	document.getElementById("mySidenav").style.width = "270px";
	document.getElementById("main").style.marginLeft = "270px";
	}
  
	function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function myFunction() {
		var x = document.getElementById("header");
		if (x.className === "topnav") {
			  x.className += " responsive";
			} else {
				  x.className = "topnav";
			}
}

function myNavFunction() {
	var x = document.getElementById("nav");
	if (x.className === "topnav") {
		  x.className += " responsive";
		} else {
			  x.className = "topnav";
		}
}


function b1() {
	var iframe = document.getElementById("iFrame");

	iframe.src="https://www.tinkercad.com/embed/aLPgxBxOf0t?editbtn=1";

	if (iframe.style.display === "none") {
		iframe.style.display = "block";
		iframe.style.width = "725px";
        iframe.style.height = "453px";
        iframe.style.frameborder="0";
        iframe.style.marginwidth="0"
        iframe.style.marginheight="0"
        iframe.style.scrolling="no"
	} else {
		iframe.style.display = "none";
	}
}

function b2() {
	var iframe = document.getElementById("pdfFrame");
	
	if (iframe.style.display === "none") {
		iframe.style.display = "block";
	} else {
		iframe.style.display = "none";
	}
}



/* show and hide image grid*/

$("#b3").click(function() {
    $("#ImgGrid").toggle();
});

/*------------*/


var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/* button read more*/

$(document).ready(function(){
  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='πίσω'){
 $(this).text('Βιογραφικό');
     }
     else{
 $(this).text('πίσω');
     }
  });
});



/* button read more events*/

function myEventsFunction() {
	var dots = document.getElementById("dots-events");
	var moreText = document.getElementById("more-events");
	var btnText = document.getElementById("myBtnEvents");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "READ MORE"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "CLOSE"; 
	  moreText.style.display = "inline";
	}
  }

/* button read more news*/

function myNewsFunction() {
	var dots = document.getElementById("dots-news");
	var moreText = document.getElementById("more-news");
	var btnText = document.getElementById("myBtnNews");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "READ MORE"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "CLOSE"; 
	  moreText.style.display = "inline";
	}
  }
