/* =====================================================
   MEBRUKA SEID - WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuButton.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${sectionId}`) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

/* ================= DARK MODE ================= */

const themeButton = document.getElementById("theme-button");

if (themeButton) {

    // Start in light mode unless the visitor has chosen dark mode
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.classList.remove("dark");

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {

            localStorage.setItem("theme", "dark");

            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';
        }

    });

}

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .philosophy-box, .timeline-item, .skill-card, .project-card, .vision-container, .contact-wrapper"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= STAGGER SKILL CARDS ================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});


/* ================= STAGGER PROJECT CARDS ================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 100}ms`;

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= SMOOTH BUTTON FEEDBACK ================= */

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function () {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ================= IMAGE READY FUNCTION ================= */

/*
   Later, when you have your professional photo,
   the placeholder can be replaced with your image.

   Example:

   <img src="images/mebruka.jpg" alt="Mebruka Seid">

*/


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Mebruka Seid | Clinical Pharmacy Portfolio"
);

console.log(
    "Website successfully loaded."
);