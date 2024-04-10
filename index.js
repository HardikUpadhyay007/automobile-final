document.getElementById("contact-button").onclick = function () {
    window.location.href = "./src/contact.html";
};

document.getElementById("sign-up").onclick = function () {
    window.location.href = "./src/signup.html";
};

// document.getElementById("about-us-btn").onclick = function () {
//     window.location.href = "#page2";
// };
document.getElementById("about-us-btn").addEventListener("click", function () {
    var element = document.getElementById("page2");
    element.scrollIntoView({ behavior: "" });
});

document
    .getElementById("about-us-sec")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
        var element = document.getElementById("page2");
        element.scrollIntoView({ behavior: "smooth" });
    });

document
    .getElementById("service-menu-item")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
        var element = document.getElementById("page3");
        element.scrollIntoView({ behavior: "smooth" });
    });

document
    .getElementById("about-us-btn")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
        var element = document.getElementById("page2");
        element.scrollIntoView({ behavior: "smooth" });
    });

const textToType = "New Way To Design Your Car!"; // Your desired text
const delay = 100; // Delay between typing each character (in milliseconds)

let index = 0;
const typedTextElement = document.getElementById("typed-text");

function typeText() {
    if (index < textToType.length) {
        typedTextElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, delay);
    }
}

typeText(); // Start typing animation

