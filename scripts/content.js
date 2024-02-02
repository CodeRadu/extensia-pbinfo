const messages = [
  {
    short: "E.P",
    long: "Esti prost",
  },
  {
    short: "E.T",
    long: "Esti tampit",
  },
  {
    short: "E.S",
    long: "Esti slab",
  },
  {
    short: "E.F",
    long: "Esti fraier",
  },
  {
    short: "E.L",
    long: "Esti lefter",
  },
  {
    short: "E.D.C.T",
    long: "Esti dus cu trotineta",
  },
  {
    short: "A.B",
    long: "Ai belit-o",
  },
  {
    short: "S.I",
    long: "Skill issue"
  }
]

const zeroPointMessages = [
  "Bravo fraiere, ai luat 0 puncte!",
  "Ai luat 0 puncte, esti un geniu!",
  "0 puncte? Esti un geniu!",
  "Felicitari fraiere, ai luat 0 puncte!",
  "Please try again later",
  "Please never try again",
  "Oare chiar ai crezut ca o sa iei puncte?",
  "Spanzura-te",
  "Skill issue"
]

function main() {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (
      element.tagName !== "SPAN" &&
      element.tagName !== "STRONG" &&
      element.tagName !== "ABBR"
    )
      return;
    if (element.innerText.includes("E.C")) {
      element.innerText = randomMessage.short;
      element.title = randomMessage.long;
    }
    if (
      element.innerText.includes("Eroare de compilare") ||
      element.innerText.includes("Eroare de Compilare")
    ) {
      element.innerText = randomMessage.long;
    }
    if (element.innerText == "0 puncte") {
      element.innerText = zeroPointMessages[Math.floor(Math.random() * zeroPointMessages.length)];
    }
  });
}

function rotate() {
  const chance = Math.random();
  if (chance < 0.01) {
    document.body.style.transform = "rotate(180deg)";
  }
}

setInterval(main, 100);
setTimeout(rotate, 10);
