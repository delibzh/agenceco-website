window.addEventListener("scroll", function () {
  console.log("Scrill détecté");

  const nav = this.document.querySelector(".navFixed");
  if (this.window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
