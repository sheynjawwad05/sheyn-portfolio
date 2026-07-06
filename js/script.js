// ===============================
// Typing Animation
// ===============================

if(document.querySelector("#typing")){

    new Typed("#typing",{

        strings:[
            "Network Engineer",
            "CCNA Learner",
            "Networking Enthusiast"
        ],

        typeSpeed:70,
        backSpeed:45,
        backDelay:1800,
        loop:true

    });

}

/*==============================
        EMAIL JS
==============================*/

emailjs.init("5u8zC9hZdHkfaaBq2");

const contactForm = document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(

            "service_2p5t0rp",

            "template_x2en9m2",

            this

        )

        .then(function(){

            alert("Message Sent Successfully!");

            contactForm.reset();

        })

        .catch(function(error){

            alert("Failed to send message!");

            console.log(error);

        });

    });

}