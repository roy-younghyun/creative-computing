let happinessSlider, weatherSlider, tirednessSlider, stressSlider;
let faceX, faceY;
let newBody, newEyes, newMouth;
let shapes = [];

function setup() {
    createCanvas(400, 650);

    happinessSlider = createSlider(1, 7, 4);
    happinessSlider.position(width / 2 - 60, 445);

    weatherSlider = createSlider(1, 7, 4);
    weatherSlider.position(width / 2 - 60, 495);

    tirednessSlider = createSlider(1, 7, 4);
    tirednessSlider.position(width / 2 - 60, 545);

    stressSlider = createSlider(1, 7, 4);
    stressSlider.position(width / 2 - 60, 595);

    newBody = new Body();
    newEyes = new Eyes();
    newMouth = new Mouth();
}

function draw() {
    background(220);

    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(0, 400, width, 250);

    fill(0);
    textAlign(CENTER);
    text('How are you feeling today?', width / 2, 430);
    text('How was the weather today?', width / 2, 480);
    text('How tired were you?', width / 2, 530);
    text('How much stress did you deal with today?', width / 2, 580);

    textAlign(LEFT);
    text('Great!', width / 2 + 70, 450);
    text('Sunny', width / 2 + 70, 500);
    text('Exhausted', width / 2 + 70, 550);
    text('A lot!', width / 2 + 70, 600);

    textAlign(RIGHT);
    text('So-so!', width / 2 - 70, 450);
    text('Gloomy', width / 2 - 70, 500);
    text('Not tired!', width / 2 - 70, 550);
    text('None!', width / 2 - 70, 600);

    if (faceX && faceY) {
        push();
        translate(faceX, faceY);
        shapes[0].updateShape(happinessSlider.value());
        shapes[1].updateShape(tirednessSlider.value());
        shapes[2].updateShape(stressSlider.value());

        push();
        let weatherColorR = map(weatherSlider.value(), 1, 7, 120, 240);
        let weatherColorB = map(weatherSlider.value(), 1, 7, 200, 100);
        fill(weatherColorR, 150, weatherColorB);
        shapes[0].display();
        pop();

        shapes[1].display();

        push();
        noFill();
        stroke(0);
        strokeWeight(12);
        shapes[2].display();
        pop();
    }
}

function mousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= 400) {
        faceX = mouseX;
        faceY = mouseY;
        }


    
        shapes = [];

        shapes.push(newBody);
        shapes.push(newEyes);
        shapes.push(newMouth);
}