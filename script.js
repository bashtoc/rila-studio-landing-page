var x = document.getElementById("myTopnav");

// close the navbar when the user clicks on any of the nev links
function closeNav() {
  x.className = "topnav";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    closeNav();
  }
}

// close the navbar when the user clicks outside the navbar or scrolls
function check(e) {
  if ($(e.target).closest(".topnav").length == 0) {
    var opened = $(".topnav").hasClass("responsive");
    if (opened) {
      closeNav();
    }
  }
}

$("body").bind("click", function (e) {
  check(e);
});

closeNav();
window.addEventListener("scroll", closeNav);
