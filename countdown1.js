const countdown1El = document.getElementById("countdown1");
const finalDeadline = new Date("2025-08-21T09:30:00");

function updateCountdown1() {
  const now = new Date();

  if (now >= finalDeadline) {
    countdown1El.innerText = "freiheit";
    return;
  }

  const diff = finalDeadline - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const countdownText = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;

  countdown1El.innerText = countdownText;
}

updateCountdown1();
setInterval(updateCountdown1, 1000);


