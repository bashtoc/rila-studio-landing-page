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

// style current link

// const links = document.querySelectorAll(".links")
// const sections = document.querySelectorAll("section")

// function changeLinkState() {
//   let index = sections.length
//   while (--index && window.scrollY + 50 < sections[index].offsetTop) {
//     // links[index].classList.add("active")
//   }

//   links.forEach((link) => link.classList.remove("active"))
//   changeLinkState()

//   window.addEventListener("scroll", changeLinkState)


// }