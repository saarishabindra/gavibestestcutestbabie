/* =====================================================
   OPEN WEBSITE
===================================================== */

const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", function () {

    opening.style.opacity = "0";
    opening.style.transform = "scale(1.05)";

    setTimeout(function () {

        opening.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

    createHearts(18);
});


/* =====================================================
   MUSIC
===================================================== */

const musicButton = document.getElementById("musicButton");
const song = document.getElementById("song");

let playing = false;

musicButton.addEventListener("click", function () {

    if (!playing) {

        song.play();

        musicButton.innerHTML = "❚❚ Pause our song";

        playing = true;

    } else {

        song.pause();

        musicButton.innerHTML = "▶ Play our song";

        playing = false;
    }

});


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 10000);
}


function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(function () {
            createHeart();
        }, i * 150);

    }
}


/* =====================================================
   RANDOM HEARTS WHILE SCROLLING
===================================================== */

setInterval(function () {

    if (document.getElementById("mainContent").style.display !== "none") {

        if (Math.random() > 0.5) {
            createHeart();
        }

    }

}, 3000);


/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        console.log(
            "Could not load image:",
            image.getAttribute("src")
        );

    });

});