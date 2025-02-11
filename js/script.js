// Add the 'active' class to the nav bar

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sticky-nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// Function to change slide and update pagination

let currentSlide = 1;
const totalSlides = 4;

function changeSlide() {
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    const currentImage = document.getElementById('bikeImage');
    const currentBikeName = document.getElementById('bikeName');
    currentImage.classList.add('fade-out');
    currentBikeName.classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('bikeName').innerText = getBikeName(currentSlide);
        document.getElementById('bikeImage').src = `./assets/${getBikeImage(currentSlide)}`;
        document.getElementById('engineSpec').innerText = `${getBikeEngine(currentSlide)}`;
        document.getElementById('powerSpec').innerText = `${getBikePower(currentSlide)}`;
        document.getElementById('accelerationSpec').innerText = `${getBikeAcceleration(currentSlide)}`;
        document.getElementById('yearSpec').innerText = getBikeYear(currentSlide);
        document.getElementById('priceSpec').innerText = `${getBikePrice(currentSlide)}M`;
    }, 500);

    setTimeout(() => {
        currentImage.classList.remove('fade-out');
        currentBikeName.classList.remove('slide-in');
    }, 600);

    setTimeout(() => {
        currentBikeName.classList.remove('fade-out');
        currentBikeName.classList.add('slide-in');
    }, 900);

    document.querySelector('.pagination input[type="radio"]:checked').checked = false;
    document.getElementById(`btn${currentSlide}`).checked = true;

    setTimeout(changeSlide, 5000);

    currentSlide++;
}

// Functions to get bike details based on slide number

function getBikeName(slide) {
    switch (slide) {
        case 1:
            return 'CBR1000';
        case 2:
            return 'HORNET';
        case 3:
            return 'CB400';
        case 4:
            return 'CBR600';
        default:
            return 'CBR1000';
    }
}

function getBikeImage(slide) {
    switch (slide) {
        case 1:
            return 'cbr1000rr.png';
        case 2:
            return 'hornet250.png';
        case 3:
            return 'cb400.png';
        case 4:
            return 'cbr600.png';
        default:
            return 'cbr1000rr.png';
    }
}

function getBikeEngine(slide) {
    switch (slide) {
        case 1:
            return '999';
        case 2:
            return '249';
        case 3:
            return '399';
        case 4:
            return '599';
        default:
            return '999';
    }
}

function getBikePower(slide) {
    switch (slide) {
        case 1:
            return '214'
        case 2:
            return '40';
        case 3:
            return '53';
        case 4:
            return '102';
        default:
            return '214';
    }
}

function getBikeAcceleration(slide) {
    switch (slide) {
        case 1:
            return '3.2';
        case 2:
            return '5.9';
        case 3:
            return '4.5';
        case 4:
            return '3.6';
        default:
            return '3.2';
    }
}

function getBikeYear(slide) {
    switch (slide) {
        case 1:
            return '2020';
        case 2:
            return '2006';
        case 3:
            return '2018';
        case 4:
            return '2007';
        default:
            return '2020';
    }
}

function getBikePrice(slide) {
    switch (slide) {
        case 1:
            return '2.9';
        case 2:
            return '1.7';
        case 3:
            return '2.6';
        case 4:
            return '1.9';
        default:
            return '2.9';
    }
}

// Start slideshow

changeSlide();

// Show & hide search box

function toggleSearch() {
    document.querySelectorAll('.search-container').forEach(function(navbar) {
        navbar.classList.toggle("show");
    });
    document.querySelectorAll('#navbar nav ul li').forEach(function(li) {
        li.classList.toggle("hide");
    });
}

// Show & hide sticky navbar and back to top button

const header = document.querySelector(".sticky-nav");
const backToTop = document.querySelector(".back-to-top button");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 750) {
        header.classList.add("show");
        backToTop.classList.add("show");
    } else {
        header.classList.remove("show");
        backToTop.classList.remove("show");
    }
});

// Back to top function

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Footer copyright year

document.querySelector("#year").innerHTML = new Date().getFullYear();