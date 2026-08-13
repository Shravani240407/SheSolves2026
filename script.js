/* =====================================================
   SHE SOLVES 2026 — JAVASCRIPT
===================================================== */


const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));


    const icon =
        menuToggle.querySelector("i");


    if (isOpen) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");


        const icon =
            menuToggle.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   NAVBAR SHADOW ON SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 6px 25px rgba(20,21,43,0.08)";

    }

    else {

        navbar.style.boxShadow =
            "none";

    }

});



/* =====================================================
   REGISTRATION MODAL
===================================================== */

const registerBtn =
    document.getElementById("registerBtn");


const registrationModal =
    document.getElementById("registrationModal");


const closeModal =
    document.getElementById("closeModal");


let lastFocusedElement = null;



/* OPEN MODAL */

registerBtn.addEventListener("click", () => {

    lastFocusedElement = document.activeElement;

    registrationModal.classList.add("active");

    document.body.style.overflow = "hidden";

    closeModal.focus();

});



/* CLOSE MODAL */

function closeRegistrationModal() {

    registrationModal.classList.remove("active");

    document.body.style.overflow = "auto";

    if (lastFocusedElement) {

        lastFocusedElement.focus();

    }

}


closeModal.addEventListener("click", closeRegistrationModal);



/* CLICK OUTSIDE */

registrationModal.addEventListener("click", (event) => {

    if (event.target === registrationModal) {

        closeRegistrationModal();

    }

});



/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" &&
        registrationModal.classList.contains("active")) {

        closeRegistrationModal();

    }

});



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(

        ".detail-card, " +

        ".participate-card, " +

        ".timeline-event, " +

        ".feature, " +

        ".about-card-main, " +

        ".terminal-card"

    );



const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


if (!prefersReducedMotion) {

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });

}