const audio = document.getElementById("miAudio");
const playButton = document.getElementById("play-button");
const progressBar = document.getElementById("barrita");
const timeActual = document.getElementById("time-actual");
const timeFinal = document.getElementById("time-final");

let isPlaying = false;

playButton.addEventListener("click", function () {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
    // Actualizar la barra de progreso
    progressBar.value = (currentTime / duration) * 100;
    
    // Actualizar el contador de tiempo actual y final
    timeActual.textContent = formatTime(currentTime);
    timeFinal.textContent = formatTime(duration);
});

// Función para formatear el tiempo en formato mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    console.log(minutes);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

console.log("si");