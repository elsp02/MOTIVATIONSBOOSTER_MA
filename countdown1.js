const countdown1El = document.getElementById("countdown1");
const firstDeadline = new Date("2025-06-27T00:00:00");

const countdownDuration = 8 * 24 * 60 * 60 * 1000; // 8 Tage in ms
const textPhaseDuration = 12 * 60 * 60 * 1000;     // 12 Stunden in ms
const fullCycle = countdownDuration;

function updateCountdown1() {
  const now = new Date();
  let diff;
  let message = "";

  if (now < firstDeadline) {
    // Noch vor dem ersten Stichtag
    diff = firstDeadline - now;
  } else {
    // Zyklus nach dem ersten Countdown
    const timeSinceFirst = now - firstDeadline;
    const currentCycleOffset = timeSinceFirst % fullCycle;

    if (currentCycleOffset < textPhaseDuration) {
      // In den ersten 12 Stunden eines Zyklus
      message = "wird erstellt..."; //neus bild freugeschalten
    }

    // Berechne verbleibende Zeit bis zum Ende des aktuellen 8-Tage-Zyklus
    diff = countdownDuration - currentCycleOffset;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const countdownText = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;

  countdown1El.innerText = message
    ? `${message}\n${countdownText}`
    : countdownText;
}

updateCountdown1();
setInterval(updateCountdown1, 1000);
