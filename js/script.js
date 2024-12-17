// Logo
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".handwriting").classList.add("animate");
});

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("hamburger-dropdown");

// Toggle dropdown on hamburger click
hamburger.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  this.classList.toggle("active"); // Toggle active class
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block"; // Toggle dropdown visibility
});

// Close the dropdown if clicked outside of it
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && dropdown.style.display === "block") {
    dropdown.style.display = "none"; // Hide the dropdown
    hamburger.classList.remove("active"); // Remove active class
  }
});

// Hide dropdown when mouse leaves the hamburger area
hamburger.addEventListener("mouseleave", function () {
  dropdown.style.display = "none"; // Hide the dropdown
  this.classList.remove("active"); // Remove active class
});

// Show dropdown when mouse enters the hamburger area
hamburger.addEventListener("mouseenter", function () {
  if (this.classList.contains("active")) {
    dropdown.style.display = "block"; // Show the dropdown if active
  }
});

// Footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
