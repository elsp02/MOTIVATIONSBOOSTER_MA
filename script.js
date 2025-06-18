// === script.js ===
const abgabeDatum = new Date("2025-07-27T23:00:00").getTime();

function updateCountdown() {
  const jetzt = new Date().getTime();
  const abstand = abgabeDatum - jetzt;

  const tage = Math.floor(abstand / (1000 * 60 * 60 * 24));
  const stunden = Math.floor((abstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuten = Math.floor((abstand % (1000 * 60 * 60)) / (1000 * 60));
  const sekunden = Math.floor((abstand % (1000 * 60)) / 1000);

  if (abstand < 0) {
    document.getElementById("countdown").innerHTML = "🚀 Abgabezeit erreicht!";
  } else {
    document.getElementById("countdown").innerHTML =
      `${tage} Tage ${stunden} Std ${minuten} Min ${sekunden} Sek`;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);