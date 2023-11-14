async function animateMovement() {
    var centralButtonsSection = document.getElementById("central-buttons-section");
    var computedStyle = getComputedStyle(centralButtonsSection);
    var viewportWidth = window.innerWidth;
    var topValueInVw = (parseFloat(computedStyle.top) / viewportWidth) * 100;

    var maxValue = -100;
    let speed = 0.8
    if (topValueInVw > maxValue) {
        centralButtonsSection.style.top = topValueInVw - speed + "vw";
        console.log(topValueInVw);
        await new Promise(requestAnimationFrame);

        await animateMovement();
    }
}

async function disapear_balloon(){
    var balloon = document.getElementsByName("ballon")[0];

    var current_opacity = getComputedStyle(balloon).opacity;
    current_opacity = parseFloat(current_opacity)*100; 

    let speed = 3;

    if (current_opacity >= 0){
        balloon.style.setProperty("opacity", current_opacity-speed+"%");
        console.log(current_opacity);
        await new Promise(requestAnimationFrame);

        await disapear_balloon()
    }

}

async function run_person(){
    let person = document.getElementById("person");
    
    let person_size = parseFloat(getComputedStyle(person).width);
    let maxValue = window.innerWidth;   
    let positionX = parseFloat(getComputedStyle(person).left);
    
    let speed = 5;
    if (positionX <= maxValue){
        console.log(positionX)
        person.style.setProperty("left", positionX+speed+"px");
        await new Promise(requestAnimationFrame);
        await run_person();
    }
    

}

async function pressed_button() {
    await Promise.all([disapear_balloon(), animateMovement()]);

}
