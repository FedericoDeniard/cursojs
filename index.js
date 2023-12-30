// Dark Theme function
document.addEventListener("DOMContentLoaded", function () {
  const articleBackground = document.getElementsByClassName("background")[0];
  const theme = document.getElementById("toggle");
  const zoomText = document.getElementById("zoomText");

  const savedTheme = localStorage.getItem("darkTheme");
  if (savedTheme === "true") {
    theme.checked = true;
    applyDarkTheme();
  }

  theme.addEventListener("click", () => {
    const toggleValue = theme.checked;
    if (toggleValue) {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
    localStorage.setItem("darkTheme", toggleValue.toString());
  });

  function applyDarkTheme() {
    const evenCards = document.getElementsByClassName("even");
    const oddCards = document.getElementsByClassName("odd");
    const cardsText = document.getElementsByClassName("text");
    const titles = document.getElementsByClassName("title");
    const images = document.getElementsByClassName("image");
    const headerFooter = document.getElementsByClassName("headerFooter");
    articleBackground.style.backgroundColor = "#2B2B2B";
    for (let i = 0; i < evenCards.length; i++) {
      evenCards[i].style.backgroundColor = "#171010";
    }
    for (let i = 0; i < oddCards.length; i++) {
      oddCards[i].style.backgroundColor = "#423F3E";
    }
    for (let i = 0; i < cardsText.length; i++) {
      cardsText[i].style.color = "#fff";
      cardsText[i].style.textShadow = "1px 1px 2px #000";
    }
    for (let i = 0; i < titles.length; i++) {
      titles[i].style.color = "#CCCCCC";
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.boxShadow = "5px 5px 10px 2px #2B2B2B";
    }
    for (let i = 0; i < headerFooter.length; i++) {
      headerFooter[i].style.backgroundColor = "#362222";
      zoomText.style.color = "#CCCCCC";
    }
  }

  function applyLightTheme() {
    const evenCards = document.getElementsByClassName("even");
    const oddCards = document.getElementsByClassName("odd");
    const cardsText = document.getElementsByClassName("text");
    const titles = document.getElementsByClassName("title");
    const images = document.getElementsByClassName("image");
    const headerFooter = document.getElementsByClassName("headerFooter");
    articleBackground.style.backgroundColor = "#fff";
    for (let i = 0; i < evenCards.length; i++) {
      evenCards[i].style.backgroundColor = "#E8C3A0";
    }
    for (let i = 0; i < oddCards.length; i++) {
      oddCards[i].style.backgroundColor = "#FFE4B5";
    }
    for (let i = 0; i < cardsText.length; i++) {
      cardsText[i].style.color = "#000";
      cardsText[i].style.textShadow = "1px 1px 2px #fff";
    }
    for (let i = 0; i < titles.length; i++) {
      titles[i].style.color = "#000";
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.boxShadow = "5px 5px 10px 2px #000";
    }
    for (let i = 0; i < headerFooter.length; i++) {
      headerFooter[i].style.backgroundColor = "#ffcd28";
      zoomText.style.color = "#000";
    }
  }
});

// Zoom slider function
const slider = document.getElementById("zoom");
slider.addEventListener("input", () => {
  const cards = document.getElementsByClassName("card");
  const images = document.getElementsByClassName("image");
  const cardsTitle = document.getElementsByClassName("cardTitle");
  const zoomText = document.getElementById("zoomText");
  const cardsText = document.getElementsByClassName("text");
  zoomText.innerText = `${slider.value}%`;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = `calc(300px + ${slider.value}px)`;
    cards[i].style.height = `calc(450px + ${slider.value}px)`;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = `calc(200px + ${slider.value}px)`;
    images[i].style.height = `calc(300px + ${slider.value}px)`;
  }
  for (let i = 0; i < cardsTitle.length; i++) {
    cardsTitle[i].style.fontSize = `calc(35px + (${slider.value}px/10))`;
  }
  for (let i = 0; i < cardsText.length; i++) {
    cardsText[i].style.fontSize = `calc(13.7px + (${slider.value}px/70))`;
  }
});
