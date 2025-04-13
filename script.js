let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  fetch("https://formspree.io/f/xvgklykr", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // Affichez un message de succès sur la même page
        form.innerHTML =
          "<h3>Merci pour votre message !</h3><p>J'y répondrai dès que possible.</p>";
      } else {
        // Gestion des erreurs
        form.innerHTML =
          "<h3>Oups ! Une erreur s'est produite.</h3><p>Veuillez réessayer plus tard.</p>";
      }
    })
    .catch((error) => console.error("Error:", error));

  e.preventDefault(); // Empêche la soumission normale du formulaire
});
