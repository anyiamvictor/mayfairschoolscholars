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





// const navLinks = document.querySelectorAll('#nav_ul li a');

// // Add click event listeners to each navigation link
// navLinks.forEach((link) => {
// link.addEventListener('click', () => {

//     // Remove the "clicked" class from all navigation links
//     navLinks.forEach((navLink) => {
//     navLink.classList.remove('clicked');
//     navLink.style.opacity = 1;

//     });

//     // Add the "clicked" class to the clicked navigation link
//     link.classList.add('clicked');
//   });
// });


//Admission into differenct school feature Get all the <span> elements with class 'hidden'

// Function to show each <span> one at a time
const animationDuration = 2000; // Duration for each span to be displayed
const featureSpans = document.querySelectorAll('.creche-features .hidden');
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


// Assuming you already have the variables for your buttons and the content you want to append

creche.addEventListener('click', function () {
  const schoolOverview = document.getElementById('school-overview');
  schoolOverview.innerHTML = ''; // Clear the initial content
 const newContent = `
            <h1 id="school-overview-h1" >CRECHE</h1>
                
                <div class="display-quick-view">
                    <div id="display-quick-view_image">
                        <img src="./images/creche-one.jpg" alt="crech-one">
                    </div>
                <div class="display-quick-view_info">
                    
                    <div class="display-quick-view_text">
                        <p>we understand that the early years of a child's life are the most crucial in their development.
                            That's why we're dedicated to providing a safe, nurturing, and stimulating environment where 
                        your little ones can learn, grow, and thrive.
                        Our experienced and caring staff members are passionate about early childhood education. 
                        They create a warm and welcoming atmosphere that fosters social, emotional, and cognitive 
                        development. We believe that every child is unique, and our curriculum is designed to cater
                        to their individual needs and interests</p>
                    </div>
                    
                    <div class="creche-features">
                            <span id="id15" class="hidden">
                                <h1>Early Learning</h1>
                                <p>Our curriculum is designed to encourage curiosity and a love for learning. Through age-appropriate activities and play, children develop essential skills such as problem-solving, critical thinking, and creativity.</p>
                            </span>
                            <span id="id25" class="hidden">
                                <h1>Safety and Well-beign</h1>
                                <p>Your child's safety is our top priority. Our facility is equipped with secure entry systems, and our staff is trained in first aid and emergency procedures. We also provide nutritious meals to ensure your child's well-being.</p>
                            </span>
                            <span id="id35" class="hidden">
                                <h1>Social Development</h1>
                                <p>We encourage positive social interactions and help children build essential social skills like communication, sharing, and empathy. Our structured playtime and group activities support healthy social development.</p>
                            </span>
                            <span id="id45" class="hidden">
                                <h1>Individualized Care</h1>
                                <p>We understand that every child has unique needs and interests. Our small teacher-to-child ratios allow us to provide individualized attention and care.</p>
                            </span>
                            <span id="id55" class="hidden">
                                <h1>Parental Involvement</h1>
                                <p>We believe in open communication with parents. Regular updates, parent-teacher meetings, and events involving families help create a strong partnership between home and school</p>
                            </span>

                        </div>

                        <div class="pagination">
                            <button class="page-btn" data-index="0">1</button>
                            <button class="page-btn" data-index="1">2</button>
                            <button class="page-btn" data-index="2">3</button>
                            <button class="page-btn" data-index="3">4</button>
                            <button class="page-btn" data-index="4">5</button>
                        </div>      
                </div>
            </div>
            
        `

        schoolOverview.innerHTML = newContent; // Append the new content
        showFeature(0);
    
});

pre.addEventListener('click', function () {
  const schoolOverview = document.getElementById('school-overview');
  schoolOverview.innerHTML = ''; // Clear the initial content

  const newContent = `
    <h1 id="school-overview-h1" >PRE School</h1>
                
                <div class="display-quick-view">
                    <div id="display-quick-view_image">
                        <img src="./images/creche-one.jpg" alt="crech-one">
                    </div>
                <div class="display-quick-view_info">
                    
                    <div class="display-quick-view_text">
                        <p>At Mayfair School's Preschool Program, we recognize the profound impact that early childhood education has on a child's development. Our mission is to provide a warm, nurturing, and stimulating environment where young learners can embark on a journey of exploration, curiosity, and a lifelong love for learning.</p>
                    </div>
                    
                    <div class="creche-features">
                            <span id="id15" class="hidden">
                                <h1>Play-Based Learning</h1>
                                <p> We believe that play is a child's natural way of learning. Our curriculum is designed to engage children in age-appropriate activities that promote creativity, problem-solving, and social interaction</p> </span>
                           
                                <span id="id25" class="hidden">
                                <h1>Social and Emotional Development</h1>
                                <p>We place a strong emphasis on building essential social skills like communication, sharing, and empathy. Our nurturing environment helps children develop a positive self-concept and emotional resilience</p> </span>
                            
                                <span id="id35" class="hidden">
                                <h1>Early Literacy and Numeracy</h1>
                                <p>We introduce children to the joy of reading, writing, and mathematics through interactive and fun activities. Our goal is to ignite a passion for learning that will last a lifetime.</p> </span>
                            
                                <span id="id45" class="hidden">
                                <h1>Creativity and Expression</h1>
                                <p>We encourage children to express themselves through art, music, and imaginative play. These activities foster creativity, self-confidence, and a sense of individuality</p></span>
                            
                                <span id="id55" class="hidden">
                                <h1>Parental Involvement</h1>
                                <p>We believe that parents are essential partners in a child's educational journey. We maintain open and regular communication with parents, involving them in their child's progress and the school community</p>  </span>

                        </div>

                        <div class="pagination">
                            <button class="page-btn" data-index="0">1</button>
                            <button class="page-btn" data-index="1">2</button>
                            <button class="page-btn" data-index="2">3</button>
                            <button class="page-btn" data-index="3">4</button>
                            <button class="page-btn" data-index="4">5</button>
                        </div>      
                </div>
            </div>
            
        `;

  schoolOverview.innerHTML = newContent; // Append the new content
});

nursery.addEventListener('click', function () {
  const schoolOverview = document.getElementById('school-overview');
  schoolOverview.innerHTML = ''; // Clear the initial content

  const newContent = `
    <h1 id="school-overview-h1" >NURSERY</h1>
                
                <div class="display-quick-view">
                    <div id="display-quick-view_image">
                        <img src="./images/creche-one.jpg" alt="crech-one">
                    </div>
                <div class="display-quick-view_info">
                    
                    <div class="display-quick-view_text">
                        <p>we understand that the early years of a child's life are the most crucial in their development.
                            That's why we're dedicated to providing a safe, nurturing, and stimulating environment where 
                        your little ones can learn, grow, and thrive.
                        Our experienced and caring staff members are passionate about early childhood education. 
                        They create a warm and welcoming atmosphere that fosters social, emotional, and cognitive 
                        development. We believe that every child is unique, and our curriculum is designed to cater
                        to their individual needs and interests</p>
                    </div>
                    
                    <div class="creche-features">
                            <span id="id15" class="hidden">
                                <h1>Early Learning</h1>
                                <p>Our curriculum is designed to encourage curiosity and a love for learning. Through age-appropriate activities and play, children develop essential skills such as problem-solving, critical thinking, and creativity.</p>
                            </span>
                            <span id="id25" class="hidden">
                                <h1>Safety and Well-beign</h1>
                                <p>Your child's safety is our top priority. Our facility is equipped with secure entry systems, and our staff is trained in first aid and emergency procedures. We also provide nutritious meals to ensure your child's well-being.</p>
                            </span>
                            <span id="id35" class="hidden">
                                <h1>Social Development</h1>
                                <p>We encourage positive social interactions and help children build essential social skills like communication, sharing, and empathy. Our structured playtime and group activities support healthy social development.</p>
                            </span>
                            <span id="id45" class="hidden">
                                <h1>Individualized Care</h1>
                                <p>We understand that every child has unique needs and interests. Our small teacher-to-child ratios allow us to provide individualized attention and care.</p>
                            </span>
                            <span id="id55" class="hidden">
                                <h1>Parental Involvement</h1>
                                <p>We believe in open communication with parents. Regular updates, parent-teacher meetings, and events involving families help create a strong partnership between home and school</p>
                            </span>

                        </div>

                        <div class="pagination">
                            <button class="page-btn" data-index="0">1</button>
                            <button class="page-btn" data-index="1">2</button>
                            <button class="page-btn" data-index="2">3</button>
                            <button class="page-btn" data-index="3">4</button>
                            <button class="page-btn" data-index="4">5</button>
                        </div>      
                </div>
            </div>
            
     `
  ;

  schoolOverview.innerHTML = newContent; // Append the new content
});
    
primary.addEventListener('click', function () {
  const schoolOverview = document.getElementById('school-overview');
  schoolOverview.innerHTML = ''; // Clear the initial content

  const newContent = `
     <h1 id="school-overview-h1" >PRIMARY</h1>
                
                <div class="display-quick-view">
                    <div id="display-quick-view_image">
                        <img src="./images/creche-one.jpg" alt="crech-one">
                    </div>
                <div class="display-quick-view_info">
                    
                    <div class="display-quick-view_text">
                        <p>we understand that the early years of a child's life are the most crucial in their development.
                            That's why we're dedicated to providing a safe, nurturing, and stimulating environment where 
                        your little ones can learn, grow, and thrive.
                        Our experienced and caring staff members are passionate about early childhood education. 
                        They create a warm and welcoming atmosphere that fosters social, emotional, and cognitive 
                        development. We believe that every child is unique, and our curriculum is designed to cater
                        to their individual needs and interests</p>
                    </div>
                    
                    <div class="creche-features">
                            <span id="id15" class="hidden">
                                <h1>Early Learning</h1>
                                <p>Our curriculum is designed to encourage curiosity and a love for learning. Through age-appropriate activities and play, children develop essential skills such as problem-solving, critical thinking, and creativity.</p>
                            </span>
                            <span id="id25" class="hidden">
                                <h1>Safety and Well-beign</h1>
                                <p>Your child's safety is our top priority. Our facility is equipped with secure entry systems, and our staff is trained in first aid and emergency procedures. We also provide nutritious meals to ensure your child's well-being.</p>
                            </span>
                            <span id="id35" class="hidden">
                                <h1>Social Development</h1>
                                <p>We encourage positive social interactions and help children build essential social skills like communication, sharing, and empathy. Our structured playtime and group activities support healthy social development.</p>
                            </span>
                            <span id="id45" class="hidden">
                                <h1>Individualized Care</h1>
                                <p>We understand that every child has unique needs and interests. Our small teacher-to-child ratios allow us to provide individualized attention and care.</p>
                            </span>
                            <span id="id55" class="hidden">
                                <h1>Parental Involvement</h1>
                                <p>We believe in open communication with parents. Regular updates, parent-teacher meetings, and events involving families help create a strong partnership between home and school</p>
                            </span>

                        </div>

                        <div class="pagination">
                            <button class="page-btn" data-index="0">1</button>
                            <button class="page-btn" data-index="1">2</button>
                            <button class="page-btn" data-index="2">3</button>
                            <button class="page-btn" data-index="3">4</button>
                            <button class="page-btn" data-index="4">5</button>
                        </div>      
                </div>
            </div>
            
        `;

  schoolOverview.innerHTML = newContent; // Append the new content
}); 
    
secondary.addEventListener('click', function () {
  const schoolOverview = document.getElementById('school-overview');
  schoolOverview.innerHTML = ''; // Clear the initial content

  const newContent = `
    <h1 id="school-overview-h1" >SECONDARY</h1>
                
                <div class="display-quick-view">
                    <div id="display-quick-view_image">
                        <img src="./images/creche-one.jpg" alt="crech-one">
                    </div>
                <div class="display-quick-view_info">
                    
                    <div class="display-quick-view_text">
                        <p>At Mayfair School's Secondary Program, we are driven by a commitment to excellence in education and the unwavering belief that our students have the potential to become leaders and scholars of tomorrow. Our institution is built on a foundation of fostering not just academic growth, but also character development and leadership skills.
                        Our experienced faculty members are passionate about teaching and mentorship. They create a dynamic and engaging learning environment that encourages critical thinking, creativity, and a thirst for knowledge</p>
                    </div>
                    
                    <div class="creche-features">
                            <span id="id15" class="hidden">
                                <h1>Academic Excellence</h1>
                                <p>We provide a rigorous and comprehensive curriculum that challenges students to reach their full academic potential. Our dedicated teachers guide and support students on their educational journey.</p> </span>
                            
                                <span id="id25" class="hidden">
                                <h1>Character Development</h1>
                                <p>YWe believe in nurturing well-rounded individuals. Our character education programs instill values such as integrity, responsibility, and respect, shaping students into compassionate and principled citizens</p> </span>
                           
                                <span id="id35" class="hidden">
                                <h1>Leadership Skills</h1>
                                <pWe actively promote leadership skills through extracurricular activities, clubs, and community service opportunities. Our goal is to develop confident and capable leaders who can make a positive impact on society.</p> </span>
                           
                                <span id="id45" class="hidden">
                                <h1>College and Career Readiness</h1>
                                <p>We prepare students for the future by offering guidance and resources for college and career planning. Our comprehensive counseling services help students make informed decisions about their academic and professional paths.</p> </span>
                            
                                <span id="id55" class="hidden">
                                <h1>Holistic Growth</h1>
                                <p>We understand that education is not just about academics. We encourage students to explore their interests in sports, arts, and other extracurricular activities, fostering their creativity and teamwork.</p> </span>

                        </div>

                        <div class="pagination">
                            <button class="page-btn" data-index="0">1</button>
                            <button class="page-btn" data-index="1">2</button>
                            <button class="page-btn" data-index="2">3</button>
                            <button class="page-btn" data-index="3">4</button>
                            <button class="page-btn" data-index="4">5</button>
                        </div>      
                </div>
            </div>
            
        `;

  schoolOverview.innerHTML = newContent; // Append the new content
});




let slideIndex = 0;
showSlides();

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



    

