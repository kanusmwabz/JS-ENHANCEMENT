const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
];

function typeWelcomeMessage(message, index) {
  if (index < message.length) {
    document.getElementById("welcome-text").innerHTML += message.charAt(index);
    index++;
    setTimeout(() => typeWelcomeMessage(message, index), 100);
  }
}

window.onload = function () {
  const welcomeMessage = "Welcome to JavaScript";
  typeWelcomeMessage(welcomeMessage, 0);
  getRandomQuote();
};

function changeText() {
  const nameInput = document.getElementById("nameInput");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (nameInput.value) {
    welcomeMessage.innerHTML = `Hello, ${nameInput.value}! Welcome to the world of JavaScript!`;
    nameInput.style.display = "none"; // Hide the input field after entering the name
    animation(); // Trigger animation after name entry
  } else {
    welcomeMessage.innerHTML = "Please enter your name!";
  }
}

function getRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomIndex];
}

function animation() {
  const jsConfetti = new JSConfetti();

  // Trigger the confetti animation
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡", "💥", "✨", "💫", "🌸"],
    emojiSize: 40,
    confettiNumber: 100,
    spread: 70,
  });
}
