const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  const isHidden = surpriseMessage.hidden;
  surpriseMessage.hidden = !isHidden;
  surpriseButton.textContent = isHidden ? "aku serius, sayang ♡" : "ada satu hal lagi... ♡";
  if (isHidden) {
    surpriseMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    makeHearts(12);
  }
});

function makeHearts(count = 1) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = Math.random() > 0.35 ? "♡" : "♥";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = `${-10 - Math.random() * 25}px`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.animationDuration = `${3.2 + Math.random() * 2.2}s`;
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6000);
  }
}
window.setInterval(() => makeHearts(1), 1800);
