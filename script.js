const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

       let button = document.getElementById("likebutton");

    button.addEventListener('click',(e) => {
        e.preventDefault;
        e.target.classList.toggle("animate");

        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 700);
    }, false);


$( document ).ready(function() {
 
	//set up variables
	var $opencam = $('.opencam');
	var $closecam = $('.closecam');
	var $buttonsnap = $('.buttonsnap');
	var $video = $('#video');
	var $canvas = $('#canvas');
 
	var context = $canvas[0].getContext('2d');
	var strr;
 
 
	//function to open the camera video feed
	function opencam() {
		navigator.getUserMedia= navigator.getUserMedia ||   navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia ;
	    if(navigator.getUserMedia) {
	      navigator.getUserMedia({video:true },  streamWebCam ,throwError) ;
	    }
	}
 
	function streamWebCam(stream){
    	const  mediaSource = new MediaSource(stream);
	    try {
	      video.srcObject = stream;
	    } catch (error) {
	      video.src = URL.createObjectURL(mediaSource);
	    }
    	video.play();
    	strr=stream;
    }
 
 
	//function to close the camera
	function closecam() {
		video.pause();
		try {
			video.srcObject = null;
		} catch {
			video.src = null;
		}
 
		var track = strr.getTracks()[0];
		track.stop();
	}
 
	//function to take a snapshot
	function buttonsnap() {
		canvas.width=video.clientWidth;
    	canvas.height=video.clientHeight;
    	context.drawImage(video,0,0);
	}
 
	//handle any errors
	function throwError(e){
		alert(e.name);
	}
 
	//assign click actions to buttons
	$opencam.on('click', function(e) {
		e.preventDefault();
		opencam();
		$closecam.show();
		$buttonsnap.show();
	});
 
	$closecam.on('click', function(e) {
		e.preventDefault();
		closecam();
		$closecam.hide();
		$buttonsnap.hide();
	});
 
	$buttonsnap.on('click', function(e) {
		e.preventDefault();
		snap();
	});

});

