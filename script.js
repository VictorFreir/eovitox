async function animateMovement() {
    var centralButtonsSection = document.getElementById("central-buttons-section");
    var computedStyle = getComputedStyle(centralButtonsSection);
    var viewportWidth = window.innerWidth;
    var topValueInVw = (parseFloat(computedStyle.top) / viewportWidth) * 100;

    var maxValue = -100;
    let speed = 0.8
    if (topValueInVw > maxValue) {
        centralButtonsSection.style.top = topValueInVw - speed + "vw";
        await new Promise(requestAnimationFrame);

        await animateMovement();
    }
}

async function disapear_balloon(){
    var balloon = document.getElementsByName("ballon")[0];

    var current_opacity = getComputedStyle(balloon).opacity;
    current_opacity = parseFloat(current_opacity)*100; 

    let speed = 3;

    if (current_opacity > 0){
        balloon.style.setProperty("opacity", current_opacity-speed+"%");
        await new Promise(requestAnimationFrame);

        await disapear_balloon()
    }

}

async function run_out_person(){
    let person = document.getElementById("person");
    
    let person_size = parseFloat(getComputedStyle(person).width);
    let maxValue = window.innerWidth;   
    let positionX = parseFloat(getComputedStyle(person).left);
    
    let speed = 5;
    if (positionX <= maxValue){

        person.style.setProperty("left", positionX+speed+"px");
        await new Promise(requestAnimationFrame);
        await run_out_person();
    }

}

async function darkenScreen() {
    var overlay = document.getElementById("overlay");

    var current_opacity = getComputedStyle(overlay).opacity;
    current_opacity = parseFloat(current_opacity)*100; 

    let speed = 3;

    if (current_opacity < 100){
        overlay.style.setProperty("opacity", current_opacity+speed+"%");
        await new Promise(requestAnimationFrame);

        await darkenScreen();
    }

}

async function lightenScreen() {
    var overlay = document.getElementById('overlay');
    
    var current_opacity = getComputedStyle(overlay).opacity;
    current_opacity = parseFloat(current_opacity)*100;

    var speed = 3;

    if (current_opacity > 0){
        overlay.style.setProperty("opacity", current_opacity-speed+"%");
        
        await new Promise(requestAnimationFrame);
        await lightenScreen();
    }
}

async function set_start_position(){
    let person = document.getElementById("person");
    
    person.style.setProperty("left", "-10vw");
}

async function run_in_person(){
    let person = document.getElementById("person");
    
    let maxValue = window.innerWidth;   
    let positionX = parseFloat(getComputedStyle(person).left);
    
    let speed = 5;
    if (positionX <= 100){
        console.log(positionX)
        person.style.setProperty("left", positionX+speed+"px");
        await new Promise(requestAnimationFrame);
        await run_out_person();
    }
    
}

async function pressed_button() {
    await Promise.all([disapear_balloon(), animateMovement()]);
    await run_out_person();
    await darkenScreen();
    await lightenScreen();
    await set_start_position();
    await run_in_person(); 
}

