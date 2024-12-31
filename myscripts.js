// Dark Mode Toggle
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.navbar').classList.toggle('dark-mode');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('dark-mode');
  });
  document.querySelector('.company-name').classList.toggle('dark-mode');
  document.querySelector('.logo').classList.toggle('dark-mode');
});

// Image Slider with Automatic Image Change
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".slider img");
  const totalImages = images.length;

  // Set the first image visible
  images[currentIndex].style.display = "block";

  // Function to change the image
  function showNextImage() {
    // Hide the current image
    images[currentIndex].style.display = "none";

    // Calculate the next index (looping back to 0)
    currentIndex = (currentIndex + 1) % totalImages;

    // Show the next image
    images[currentIndex].style.display = "block";
  }

  // Start the slider (change every 3 seconds)
  setInterval(showNextImage, 3000); // Change image every 3 seconds
});

// Tab Switching Logic for Feature Section
let activeTab = 0;

const feature1ImgSrc = 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTY1NDgwOXw&ixlib=rb-4.0.3&q=80&w=1080';
const feature2ImgSrc = 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTY1NDgxMHw&ixlib=rb-4.0.3&q=80&w=1080';
const feature3ImgSrc = 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTY1NDgwOHw&ixlib=rb-4.0.3&q=80&w=1080';

const feature1Title = 'Export Services';
const feature2Title = 'Customized Solutions';
const feature3Title = 'Global Shipping';

const feature1Description = 'Comprehensive export services to expand your business reach';
const feature2Description = 'Customized export solutions tailored to your business needs';
const feature3Description = 'Efficient and reliable shipping services to global destinations';

const feature1Image = document.getElementById('feature1Image');
const tab1Indicator = document.getElementById('tab1Indicator');
const tab2Indicator = document.getElementById('tab2Indicator');
const tab3Indicator = document.getElementById('tab3Indicator');

function setActiveTab(tabIndex) {
  activeTab = tabIndex;

  // Hide all images first
  document.getElementById('image1').style.display = 'none';
  document.getElementById('image2').style.display = 'none';
  document.getElementById('image3').style.display = 'none';

  // Show the active image and update the indicators
  if (tabIndex === 0) {
    document.getElementById('image1').style.display = 'block';
    tab1Indicator.style.backgroundColor = '#000';
    tab2Indicator.style.backgroundColor = 'transparent';
    tab3Indicator.style.backgroundColor = 'transparent';
  } else if (tabIndex === 1) {
    document.getElementById('image2').style.display = 'block';
    tab1Indicator.style.backgroundColor = 'transparent';
    tab2Indicator.style.backgroundColor = '#000';
    tab3Indicator.style.backgroundColor = 'transparent';
  } else if (tabIndex === 2) {
    document.getElementById('image3').style.display = 'block';
    tab1Indicator.style.backgroundColor = 'transparent';
    tab2Indicator.style.backgroundColor = 'transparent';
    tab3Indicator.style.backgroundColor = '#000';
  }
}
