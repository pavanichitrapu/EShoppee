var hamburger = document.getElementById("ham");
var accord = document.getElementById("accordian");
var sidebar = document.getElementById("sidebar");
//sidebar.appendChild(accord);
hamburger.addEventListener("click", function() {
  accord.style.display = "block";
});
var closeBtn = document.getElementById("cls-btn");
closeBtn.addEventListener("click", function() {
  accord.style.display = "none";
});
