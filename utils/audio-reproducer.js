
// Se reproduce la nusica al presionar cualquier tecla
export const startAudio = (audio, audioStarted) => {
    document.addEventListener("keydown", function (event) {
        if (!audioStarted) {
        audio.play();
        audioStarted = true;
        }
    });
}