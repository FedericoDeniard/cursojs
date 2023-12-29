document.addEventListener('DOMContentLoaded', function() {
    const articleBackground = document.getElementsByClassName('background')[0];
    const evenCards = document.getElementsByClassName ('even');
    const oddCards = document.getElementsByClassName('odd');

    const theme = document.getElementById("toggle");

    theme.addEventListener('click', () => {
        const toggleValue = theme.checked;

        if (toggleValue) {
            articleBackground.style.backgroundColor = "#6C6C6C";
            for (let i = 0; i < evenCards.length; i++){
                evenCards[i].style.backgroundColor = "#795548"
            }
            for (let i = 0; i < oddCards.length; i++){
                oddCards[i].style.backgroundColor = "#FFD54F"
            }
        } else {
            articleBackground.style.backgroundColor = "#fff";
            for (let i = 0; i < evenCards.length; i++){
                evenCards[i].style.backgroundColor = "#E8C3A0"
            }
            for (let i = 0; i < oddCards.length; i++){
                oddCards[i].style.backgroundColor = "#FFE4B5"
            }
        }
    });
});
