const toggle = document.getElementsByClassName("navbar-toggler")[0];
console.log(toggle);

const navbar = document.getElementsByClassName("navbar-nav")[0];
console.log(navbar);

toggle.addEventListener("click", () => {
  console.log("card-title");
  navbar.classList.toggle("hide");
});

function togglemuted(x) {
  x.classList.toggle("image-muted");
}

function togglefavourite(x) {
  x.classList.toggle("unfavourite");
}
