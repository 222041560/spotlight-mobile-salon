/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    const isOpen =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.textContent =
        isOpen ? "✕" : "☰";

});


/* Close menu when a link is clicked */

document
    .querySelectorAll("#navLinks a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });


/* =========================
   SERVICE SELECTION
========================= */

document
    .querySelectorAll("[data-service]")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            const selectedService =
                link.dataset.service;

            const serviceSelect =
                document.getElementById("service");

            serviceSelect.value =
                selectedService;

        });

    });


/* =========================
   BOOKING FORM
========================= */

document
    .getElementById("bookingForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const service =
            document
                .getElementById("service")
                .value;


        const date =
            document
                .getElementById("date")
                .value;


        const location =
            document
                .getElementById("location")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        const bookingMessage = [

            "Hi Spotlight Mobile Salon!",
            "I'd like to make a booking enquiry.",
            "",

            `Name: ${name}`,

            `Service: ${service}`,

            date
                ? `Preferred date: ${date}`
                : "",

            location
                ? `Location/area: ${location}`
                : "",

            message
                ? `Message: ${message}`
                : ""

        ]
        .filter(Boolean)
        .join("\n");


        const whatsappURL =
            "https://wa.me/27746947280?text="
            +
            encodeURIComponent(
                bookingMessage
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    });


/* =========================
   CURRENT YEAR
========================= */

document
    .getElementById("year")
    .textContent =
        new Date().getFullYear();
