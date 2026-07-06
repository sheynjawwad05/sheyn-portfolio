/*==================================================
                PORTFOLIO SCRIPT
                Version 2.0
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
                TYPING ANIMATION
    ==========================================*/

    if (document.querySelector("#typing")) {

        new Typed("#typing", {
            strings: [
                "Network Engineer",
                "CCNA Learner",
                "Networking Enthusiast"
            ],
            typeSpeed: 70,
            backSpeed: 45,
            backDelay: 1800,
            loop: true
        });

    }

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.innerHTML = navbar.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    // Close menu after clicking a link
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {

        if (
            !navbar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {

            navbar.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

}

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

        document.addEventListener("click", (e) => {

            if (
                !navbar.contains(e.target) &&
                !menuBtn.contains(e.target)
            ) {

                navbar.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }

    /*==========================================
                STICKY HEADER
    ==========================================*/

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    /*==========================================
                EMAIL JS
    ==========================================*/

    if (typeof emailjs !== "undefined") {

        emailjs.init("5u8zC9hZdHkfaaBq2");

        const contactForm =
            document.getElementById("contact-form");

        if (contactForm) {

            contactForm.addEventListener("submit", function (e) {

                e.preventDefault();

                emailjs.sendForm(

                    "service_2p5t0rp",

                    "template_x2en9m2",

                    this

                )

                .then(() => {

                    alert("✅ Message sent successfully!");

                    contactForm.reset();

                })

                .catch((error) => {

                    console.error(error);

                    alert("❌ Failed to send message.");

                });

            });

        }

    }

});

/*==============================
        SCROLL TO TOP
==============================*/

const scrollTopBtn = document.querySelector(".scroll-top");

if(scrollTopBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 250){

            scrollTopBtn.classList.add("show");

        }else{

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}