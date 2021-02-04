function myFunction(rubrique) {
  var x = document.getElementById(rubrique);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 