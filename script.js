
const openButton = document.getElementById("openLetter");
const opening = document.getElementById("opening");
const letter = document.getElementById("letter");

const music = document.getElementById("backgroundMusic");
const musicPlayer = document.getElementById("musicPlayer");
const musicToggle = document.getElementById("musicToggle");
const equalizer = document.getElementById("equalizer");

openButton.addEventListener("click", async () => {

    opening.style.display = "none";

    letter.classList.remove("hidden");

    musicPlayer.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    try {
        await music.play();

        musicToggle.textContent = "Ⅱ";
        equalizer.classList.remove("paused");

    } catch (error) {
        console.log("Não foi possível iniciar a música:", error);
        musicToggle.textContent = "▶";
        equalizer.classList.add("paused");
    }

});

musicToggle.addEventListener("click", async () => {

    if (music.paused) {

        try {
            await music.play();
            musicToggle.textContent = "Ⅱ";
            equalizer.classList.remove("paused");
        } catch (error) {
            console.log("Erro ao reproduzir música:", error);
        }

    } else {

        music.pause();
        musicToggle.textContent = "▶";
        equalizer.classList.add("paused");

    }

});
