const countdown1El = document.getElementById("countdown1");
const deadline1 = new Date("2025-06-25T00:00:00");

function updateCountdown1() {
  const now = new Date();
  const diff = deadline1 - now;

  if (diff <= 0) {
    countdown1El.innerText = "🎉 Countdown 1 vorbei!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown1El.innerText = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
}

updateCountdown1();
setInterval(updateCountdown1, 1000);
