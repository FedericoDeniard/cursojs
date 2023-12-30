document.addEventListener('DOMContentLoaded', function() {
    const articleBackground = document.getElementsByClassName('background')[0];
    const evenCards = document.getElementsByClassName ('even');
    const oddCards = document.getElementsByClassName('odd');
    const cardsText = document.getElementsByClassName('text');
    const cardsTitle = document.getElementsByClassName('cardTitle');
    const theme = document.getElementById("toggle");
    const images = document.getElementsByClassName('image');
    const headerFooter = document.getElementsByClassName('headerFooter');
    const linkedinSVG = document.getElementsByClassName('linkimg');
    const githubSVG = document.getElementsByClassName('gitimg');

    theme.addEventListener('click', () => {
        const toggleValue = theme.checked;

        if (toggleValue) {
            articleBackground.style.backgroundColor = "#2B2B2B";
            linkedinSVG.src = "./assets/linkedinDark.svg";
            githubSVG.src= "./assets/githubDark.svg";
            for (let i = 0; i < evenCards.length; i++){
                evenCards[i].style.backgroundColor = "#171010"
            }
            for (let i = 0; i < oddCards.length; i++){
                oddCards[i].style.backgroundColor = "#423F3E"
            }
            for (let i = 0; i < cardsText.length; i++){
                cardsText[i].style.color = "#fff"
                cardsText[i].style.textShadow = "1px 1px 2px #000"
            }
            for (let i = 0; i < cardsTitle.length; i++){
                cardsTitle[i].style.color = "#CCCCCC ";
            }
            for (let i = 0; i < images.length; i++){
                images[i].style.boxShadow = "5px 5px 10px 2px #2B2B2B"
            }
            for (let i = 0; i < headerFooter.length; i++){
                headerFooter[i].style.backgroundColor = "#362222";
            }
        } else {
            articleBackground.style.backgroundColor = "#fff";
            linkedinSVG.src = "./assets/linkedin.svg";
            githubSVG.src= "./assets/github.svg";
            for (let i = 0; i < evenCards.length; i++){
                evenCards[i].style.backgroundColor = "#E8C3A0"
            }
            for (let i = 0; i < oddCards.length; i++){
                oddCards[i].style.backgroundColor = "#FFE4B5"
            }
            for (let i = 0; i < cardsText.length; i++){
                cardsText[i].style.color = "#000"
                cardsText[i].style.textShadow = "1px 1px 2px #fff"
            }
            for (let i = 0; i < cardsTitle.length; i++){
                cardsTitle[i].style.color = "#000";
            }
                 for (let i = 0; i < images.length; i++){
                images[i].style.boxShadow = "5px 5px 10px 2px #000"
            }
            for (let i = 0; i < headerFooter.length; i++){
                headerFooter[i].style.backgroundColor = "#ffcd28";
            }
        }
    });
});
