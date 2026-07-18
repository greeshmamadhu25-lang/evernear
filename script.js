alert("Script is working!");
const messages = [
  "I'm so lucky to have you mr and you too. ❤️",
  "I hope you smiled today.",
  "Don't forget to eat something delicious. 🍜",
  "I'm always cheering for you, even from far away.",
  "I can't wait to make more memories with you.",
  "Thank you for being you. 💜",
  "I'm really proud of you.",
  "You mean more to me than words can say."
];
 
const message = document.getElementById("message");
const smileButton = document.getElementById("smile-btn");

console.log("Button:", smileButton);
console.log("Message:", message);

if (smileButton && message) {
  smileButton.addEventListener("click", () => {
    alert("Button clicked!");

    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
  });
}
const letterButtons = document.querySelectorAll(".open-letter-btn");

letterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const letter = button.nextElementSibling;

    letter.classList.toggle("open");

    if (letter.classList.contains("open")) {
      button.textContent = "📨 Close Letter";
    } else {
      button.textContent = "📩 Open Letter";
    }
  });
});
const finalButton = document.querySelector(".final-btn");

if (finalButton) {
    finalButton.addEventListener("click", () => {
        const message = document.getElementById("finalMessage");

        message.classList.toggle("open");

        if (message.classList.contains("open")) {
            finalButton.textContent = "Close";
        } else {
            finalButton.textContent = "One Last Thing...";
        }
    });
}
const popup = document.getElementById("welcome-popup");
const beginBtn = document.getElementById("begin-btn");

if (popup && beginBtn) {

  if (sessionStorage.getItem("popupShown") === "true") {
    popup.style.display = "none";
  }

  beginBtn.addEventListener("click", () => {
    sessionStorage.setItem("popupShown", "true");
    popup.style.display = "none";
  });

}
