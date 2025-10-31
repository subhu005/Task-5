function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Optional form handling
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  this.reset();
});
