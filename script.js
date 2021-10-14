// animation on scroll

const scrollElements = document.querySelectorAll('.aos');

window.addEventListener('scroll', AnimationScroll);

function AnimationScroll() {
  scrollElements.forEach(e => {
    if (isVisable(e)) {
      e.classList.add('show-elements');
    }
  })
}

function isVisable(e) {
  const elementPosition = e.getBoundingClientRect();
  let distanceFromTop = -200;
  
  return elementPosition.top - window.innerHeight < distanceFromTop ? true:false;
}

// Show subscribe content

const subscribeLink = document.querySelector('.subscribe-link');
const subsContainer = document.querySelector('.subscribe-container');
const subsForm = document.querySelector('.subscribe-form');

subscribeLink.addEventListener('click', () => {
	subsContainer.style.opacity = '1';
	subsContainer.style.pointerEvents = 'auto';
	subsForm.style.transform = 'translateY(0px)';
})

const subsBtn = document.querySelector('.subs-btn');
const subsMessage = document.querySelector('.subs-message');


//close subsContainer
const close = document.querySelector('.close');

close.addEventListener('click', () => {
	subsContainer.style.opacity = '0';
	subsContainer.style.pointerEvents = 'none';
	subsForm.style.transform = 'translateY(-20px)';
})

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
	nav.classList.toggle('active-nav');
})

anchorLink = document.querySelectorAll('nav ul li a');

anchorLink.forEach( a => {
	a.addEventListener('click', closeNav);
})

function closeNav() {
	nav.classList.remove('active-nav');
}

// watch video 
const linkVideo = document.querySelector('.about-content a');
const videoCon = document.querySelector('.video-container');
const videoContent = document.querySelector('.video-content');
const video = document.querySelector('.video-content video');

linkVideo.addEventListener('click', () => {
	videoCon.style.opacity = '1';
	videoCon.style.pointerEvents = 'auto';
	videoContent.style.transform = 'translateY(0px)';
	video.play();
})

// close video
const closeVidBtn = document.querySelector('.close-video');

closeVidBtn.addEventListener('click', () =>{
	videoCon.style.opacity = '0';
	videoCon.style.pointerEvents = 'none';
	videoContent.style.transform = 'translateY(-20px)';
	video.pause();
})


// submit subscription form
$(document).ready(function(){ 
	$("#form").submit(function(e){
	e.preventDefault();
		let inputValue = document.querySelector('.subscribe-form 		input').value;
  
 	   var atPos = inputValue.indexOf('@');
  		 var dotPos = inputValue.indexOf('.');
  
		// Validation for email

		if (atPos > 1 || atPos - dotPos > 2) {

    		$.post("insert.php", {email: inputValue}, function(data){
    			subsMessage.innerHTML = `Thankyou ${data}`;
    		   subsMessage.style.color = 'green';
    		   inputValue.value = '';
    		})
    	  
  		} else {
  			subsMessage.innerHTML = 'Check your Email';
  			subsMessage.style.color = 'red';
  		}
	});
});


let mes = document.querySelector('.para-message');

$(document).ready(function () { 
	$("#contact-area").submit(function (event) { 
		
		event.preventDefault(); 
		
		var formData = { fname: $("#fname").val(), lname: $("#lname").val(), pnumber: $("#pnumber").val(),email: $("#email").val(),message: $("#message").val() }; 
		
		$.ajax({ 
			type: "POST",
	  	   url: "contacts.php",
	  	   data: formData, 
	  	   success: function(data) { 
				mes.innerHTML = 'Message Successfully Added';
				mes.style.color = 'green';
				$("#fname").val('');
				$("#lname").val('')
				$("#pnumber").val('')
				$("#email").val('')
				$("#message").val('')
			 }
		}); 
		
	}); 
});
