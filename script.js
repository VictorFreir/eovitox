async function animateMovement() {
    var centralButtonsSection = document.getElementById("central-buttons-section");
    var computedStyle = getComputedStyle(centralButtonsSection);
    var viewportWidth = window.innerWidth;
    var topValueInVw = (parseFloat(computedStyle.top) / viewportWidth) * 100;

    console.log(topValueInVw + "vw");

    var maxValue = -100;

    if (topValueInVw > maxValue) {
        centralButtonsSection.style.top = topValueInVw - 0.5 + "vw";

        await new Promise(requestAnimationFrame);

        await animateMovement();
    }
}

function pressed_button() {
    animateMovement();
    console.log(document.getElementsByName("ballon"));
}
