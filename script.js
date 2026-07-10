
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

const button = document.querySelector(".enter-btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
});
const letterButtons = document.querySelectorAll(".open-letter-btn");

letterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const letter = button.nextElementSibling;

        if (letter.style.display === "none") {
            letter.style.display = "block";
            button.textContent = "Close Letter";
        } else {
            letter.style.display = "none";
            button.textContent = "Open Letter";
        }

    });
});
