function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");	

      document.getElementById("menu-bg").classList.toggle("change-bg");	
}



 // window.onscroll = function()
   // {myFunction()};

  // var nav =
 //   document.getElementById("nav");

 // var sticky = nav.offsetTop;

  //  function myFunction(){
  //  if (window.pageYOffset >=sticky){
  //  nav.classList.add("sticky")
   //  } else{
  //    nav.classList.remove("sticky");
  //  }
 //  }
//
const PullToRefresh = document.getElementById('pull_to_refresh');
let touchstartY = 0;

document.addEventListener('touchmove', e => {
  const touchY = e.touches[0].clientY;
  const touchDiff = touchY - touchstartY;
  if (touchDiff > 0 && window.scrollY == 0) {
    PullToRefresh.classList.add('visible');
    e.preventDefault();
  }
});

document.addEventListener('touchend', e => {
  if (PullToRefresh.classList.contains('visible')) {
    PullToRefresh.classList.remove('visible');
    location.reload();
  }
});

const sendEmailBtn = document.getElementById("sendEmailBtn");
sendEmailBtn.addEventListener("click", sendEmail);

function sendEmail(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;

  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return;
  }

  const recipientEmail = "mike.hasoungaragedoor@gmail.com";
  const subject = "Contact Us Form Submission";

  // Compose the mailto URI with the email details.
  const mailtoUri = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Open the user's default email client with the pre-filled email.
  window.location.href = mailtoUri;
}

function initMap() {
  var mapOptions = {
      center: { lat: 42.9279246, lng: -81.2364458 },
      zoom: 17
  };

  // Create the map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add a marker to show the location
  var marker = new google.maps.Marker({
      position: { lat: 42.9279246, lng: -81.2364458 },
      map: map,
      title: "1281 Ernest Ave, London, ON N6E 2B2, Canada"
  });
}




