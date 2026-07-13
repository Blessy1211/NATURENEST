// NatureNest Website JavaScript


// Smooth page loading animation

document.addEventListener("DOMContentLoaded", function(){


    document.body.style.opacity = "0";


    setTimeout(function(){

        document.body.style.transition = "0.5s";

        document.body.style.opacity = "1";


    },100);



});






// Contact Form Success Message


const contactForm = document.querySelector("form");


if(contactForm){


    contactForm.addEventListener("submit", function(event){


        event.preventDefault();



        alert(
            "🌿 Thank you for contacting NatureNest!\n\nWe will get back to you soon."
        );



        contactForm.reset();



    });


}







// Button Animation


const buttons = document.querySelectorAll("button");


buttons.forEach(function(button){


    button.addEventListener("mouseenter",function(){


        button.style.transform="scale(1.05)";


    });



    button.addEventListener("mouseleave",function(){


        button.style.transform="scale(1)";


    });


});







// Navbar Shadow on Scroll


window.addEventListener("scroll",function(){


    const navbar=document.querySelector(".navbar");


    if(window.scrollY > 50){


        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.15)";


    }


    else{


        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";


    }



});