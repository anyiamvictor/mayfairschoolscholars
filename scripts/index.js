const scrollToTopButton = document.getElementById("scrollToTop");

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}

// Show the scroll-to-top button when the user scrolls down
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Attach the click event to scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", scrollToTop);

//Admission into differenct school feature Get all the <span> elements with class 'hidden'
// Function to show each <span> one at a time
const animationDuration = 4000; // Duration for each span to be displayed
const featureSpans = document.querySelectorAll('.sliding-info-features .hidden');
const pageButtons = document.querySelectorAll('.page-btn');
let currentIndex = 0;
let timeoutId; // Store the timeout ID

function hideAllSpans() {
  featureSpans.forEach((span) => {
    span.classList.add('hidden');
    span.classList.remove('visible');
  });
}

function showFeature(index) {
     hideAllSpans();
    if (index < featureSpans.length) {
          // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // featureSpans[index].classList.add('visible');
      featureSpans[index].classList.remove('hidden');
      
    timeoutId = setTimeout(function () {
        featureSpans[index].classList.remove('visible');
      featureSpans[index].classList.add('hidden');

      // Wrap back to the first span if at the end
      showFeature((index + 1) % featureSpans.length);
    }, animationDuration);

    setTimeout(function () {
        featureSpans[index].classList.remove('hidden');
    featureSpans[index].classList.add('visible');
        

    }, animationDuration ); // Delay before hiding the current span again
  }



pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
      currentIndex = index; // Update the currentIndex when a pagination button is clicked
      showFeature(index);
    });
});
}

showFeature(0);

//Feature to display overview of each school
const creche = document.getElementById('id15');
const pre = document.getElementById('id25');
const nursery = document.getElementById('id35');
const primary = document.getElementById('id45');
const secondary = document.getElementById('id55');


function handleButtonClick(el) {
    const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.classList.remove('clickedActive');
  });
    const clickedButton = el.target;
    if (clickedButton.classList.contains('btn')) {
        clickedButton.classList.add('clickedActive');
    }
}


// Assuming you already have the variables for your buttons and the content you want to append
creche.addEventListener('click', function (e) {
    handleButtonClick(e)
    const crechText = document.getElementById('display-quick-view_text');
    const crechImage = document.getElementById('display-quick-view_image');
    const crechTitle = document.getElementById('school-overview-h1');
    crechTitle.innerHTML='CRECHE'    
    crechText.innerHTML = '';
    crechText.innerHTML=`    <p>We understand that the early years of a child's life are the most crucial in their development.
                            your little ones can learn, grow, and thrive.
                            That's why we're dedicated to providing a safe, nurturing, and stimulating environment where 
                        Our experienced and caring staff members are passionate about early childhood education. 
                        They create a warm and welcoming atmosphere that fosters social, emotional, and cognitive 
                        development. We believe that every child is unique, and our curriculum is designed to cater
                        to their individual needs and interests</p>`
    crechImage.innerHTML = ''
    crechImage.innerHTML=` <img src="./images/creche-one.jpg" alt="crech-one">`
});

pre.addEventListener('click', function (e) {
    handleButtonClick(e)
    const preText = document.getElementById('display-quick-view_text');
    const preImage = document.getElementById('display-quick-view_image');
    const preschoolTitle = document.getElementById('school-overview-h1');
    preschoolTitle.innerHTML = 'PRESCHOOL';

    preText.innerHTML = ''; // Clear the initial content
    preText.innerHTML = `<p> At Mayfair School's Preschool Program, we recognize the profound
                         impact that early childhood education has on a child's development.
                          Our mission is to provide a warm, nurturing, and stimulating environment
                           where young learners can embark on a journey of exploration, curiosity, and a lifelong love for learning.</p> `
    preImage.innerHTML = '';
    preImage.innerHTML = ` <img src="./images/creche-one.jpg" alt="crech-one">`

});

nursery.addEventListener('click', function (e) {
    handleButtonClick(e)
    const nurseryText = document.getElementById('display-quick-view_text');
    const nurseryImage = document.getElementById('display-quick-view_image');
    const nurseryTitle = document.getElementById('school-overview-h1');
    nurseryTitle.innerHTML = 'NURSERY';
    nurseryText.innerHTML = ''; // Clear the initial content
    nurseryText.innerHTML = `<p>At Mayfair Nursery, we're dedicated to providing a safe, nurturing, and stimulating environment for your child's early years. Our passionate staff fosters social, emotional, and cognitive development, tailored to each child's unique needs and interests.</p> `
    nurseryImage.innerHTML = '';
    nurseryImage.innerHTML = ` <img src="./images/creche-one.jpg" alt="crech-one">`

});

primary.addEventListener('click', function (e) {
    handleButtonClick(e)
    const primaryText = document.getElementById('display-quick-view_text');
    const primaryImage = document.getElementById('display-quick-view_image');
    const primaryTitle = document.getElementById('school-overview-h1');
    primaryTitle.innerHTML = 'PRIMARY';

    primaryText.innerHTML = ''; // Clear the initial content;
    primaryText.innerHTML = ` <p>At Mayfair Primary School, 
                        we believe that every child has the potential to become a leader, 
                        scholar, and a positive force in our world. Our commitment to excellence in education extends beyond academics, focusing on character development and leadership skills.</p> `
    primaryImage.innerHTML = ''
    primaryImage.innerHTML = ` <img src="./images/creche-one.jpg" alt="crech-one">`

});

secondary.addEventListener('click', function (e) {
    handleButtonClick(e)
    const secondaryText = document.getElementById('display-quick-view_text');
    const secondaryImage = document.getElementById('display-quick-view_image');
    secondaryText.innerHTML = ''; // Clear the initial content;
    const secondayTitle = document.getElementById('school-overview-h1');

    secondayTitle.innerHTML = 'SECONDARY';
    secondaryText.innerHTML =` <p>At Mayfair School's Secondary Program, we're committed to excellence in education. We believe in our students' potential as future leaders and scholars. Our dedicated faculty fosters academic growth, character development, and leadership skills. We create dynamic, engaging classrooms that nurture critical thinking, creativity, and a love for knowledge.</p>  `
    secondaryImage.innerHTML = ''
    secondaryImage.innerHTML = ` <img src="./images/creche-one.jpg" alt="crech-one">`

});



//Slide show for images
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
}
showSlides();


//Mail sending feature
document.getElementById('send-email').addEventListener('click', function () {
  // Define the email parameters
  const email = 'recipient@example.com'; // Change this to the recipient's email address
  const subject = 'Hello from My Website'; // Change this to the subject of the email
  const body = 'Write your email message here.'; // Change this to the email body

  // Create the mailto URL
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.location.href = mailtoUrl;
});



//whatsapp chatting feature
document.getElementById('whatsappButton').addEventListener('click', function () {
  // Define the phone number and optional message
  const phoneNumber = '+2348035724768'; // Replace with the recipient's phone number
  const message = 'Welcome to MayFair Schools'; // Replace with your desired message (optional)
  // Create the WhatsApp URL
  let whatsappUrl = `https://wa.me/${phoneNumber}`;
  // Append a message (if provided)
  if (message) {
    whatsappUrl += `?text=${encodeURIComponent(message)}`;
  }
  window.open(whatsappUrl, '_blank');
});



//Phone  number calling feature.
function dialPhoneNumber(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}
// Find the button element by its class or ID
const callButton = document.getElementById('call-us');
// Add a click event listener to the button
callButton.addEventListener('click', function () {
  // Specify the phone number you want to dial
  const phoneNumber = '+2347030358400'; // Replace with your actual phone number
  dialPhoneNumber(phoneNumber);
});

