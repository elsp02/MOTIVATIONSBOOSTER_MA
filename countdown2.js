const countdown2El = document.getElementById("countdown2");
const deadline2 = new Date("2025-07-27T23:00:00");

function updateCountdown2() {
  const now = new Date();
  const diff = deadline2 - now;

  if (diff <= 0) {
    countdown2El.innerText = "🎉 Abgabezeit!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown2El.innerText = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
}

updateCountdown2();
setInterval(updateCountdown2, 1000);
