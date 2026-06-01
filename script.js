/* ==========================================
SMOOTH SCROLLING
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();


const target = document.querySelector(
  this.getAttribute("href")
);

if (target) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


});
});

/* ==========================================
SCROLL REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
  element.classList.add("active");
}


});

}

window.addEventListener("scroll", revealElements);

/* ==========================================
TYPING EFFECT
========================================== */

const text =
"I build scalable web platforms & digital systems";

let index = 0;

function typeEffect() {

const typingElement =
document.getElementById("typing");

if (!typingElement) return;

if (index < text.length) {


typingElement.textContent +=
  text.charAt(index);

index++;

setTimeout(typeEffect, 50);


}

}

/* ==========================================
ACTIVE NAVIGATION LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {


const sectionTop =
  section.offsetTop - 120;

const sectionHeight =
  section.clientHeight;

if (
  pageYOffset >= sectionTop &&
  pageYOffset < sectionTop + sectionHeight
) {
  current = section.getAttribute("id");
}


});

navLinks.forEach(link => {


link.classList.remove("active");

if (
  link.getAttribute("href") ===
  `#${current}`
) {
  link.classList.add("active");
}


});

});

/* ==========================================
EMAILJS CONTACT FORM
========================================== */

/*

1. Create account at EmailJS
2. Replace:
   YOUR_PUBLIC_KEY
   YOUR_SERVICE_ID
   YOUR_TEMPLATE_ID
   */

(function () {

if (typeof emailjs !== "undefined") {


emailjs.init(
  "0GApekX1RChqiw6tK"
);


}

})();

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener(
"submit",
function (e) {


  e.preventDefault();

  const submitBtn =
    this.querySelector("button");

  submitBtn.innerText =
    "Sending...";

  submitBtn.disabled = true;

  if (typeof emailjs !== "undefined") {

    emailjs.sendForm(
      "service_3ujfryn",
      "template_oujnwgk",
      this
    )
    .then(() => {

      alert(
        "Message sent successfully!"
      );

      this.reset();

    })
    .catch((error) => {
  console.error("EmailJS Error:", error);

  alert(
    "Failed to send message.\n\n" +
    JSON.stringify(error)
  );
})
    .finally(() => {

      submitBtn.innerText =
        "Send Message";

      submitBtn.disabled = false;

    });

  } else {

    alert(
      "EmailJS not connected."
    );

    submitBtn.innerText =
      "Send Message";

    submitBtn.disabled = false;

  }

}


);

}

/* ==========================================
PAGE LOAD
========================================== */

window.addEventListener(
"DOMContentLoaded",
() => {


revealElements();

typeEffect();


}
);
