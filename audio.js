  const audio = document.getElementById("bg-music");
  const button = document.getElementById("audio-toggle");

  let isPlaying = false;

  button.addEventListener("click", () => {
    if (!isPlaying) {
      audio.currentTime = 6;  // Start bei Sekunde 4
      audio.play();
      button.textContent = "PAUSE";
    } else {
      audio.pause();
      button.textContent = "MUSIC";
    }
    isPlaying = !isPlaying;
  });
