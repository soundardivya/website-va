let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoplayInterval; // Variable to hold the autoplay interval

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }
  
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000); // Change interval as needed (2000 milliseconds = 2 seconds)
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
  stopAutoplay(); // Stop autoplay when user interacts with the buttons
});
document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
  stopAutoplay(); // Stop autoplay when user interacts with the buttons
});

showSlide(slideIndex);
startAutoplay(); // Start autoplay when the page loads


// ---------------------team section-------------------

const slider = document.querySelector('.testimonials-slider');
const testimonials = document.querySelectorAll('.testimonial-item');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let autoSlideInterval;

testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => changeSlide(i));
});

const updateDots = (index) => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

const changeSlide = (index) => {
    clearInterval(autoSlideInterval);
    slider.scrollTo({
        left: index * slider.offsetWidth,
        behavior: 'smooth'
    });
    currentSlide = index;
    updateDots(index);
    startAutoSlide();
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        let nextSlide = currentSlide + 1 >= testimonials.length ? 0 : currentSlide + 1;
        changeSlide(nextSlide);
    }, 3000);
};

updateDots(0); 
startAutoSlide(); 



// Function to close the toggle menu
function closeMenu() {
  document.querySelector('.nav-links').classList.remove('active');
}

// Add event listener to the hamburger icon to toggle the menu
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Add event listeners to each section link to close the menu when clicked
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', closeMenu);
});