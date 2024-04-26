let input;
let charRNN;

function setup() {
    createCanvas (300, 300);
    charRNN = ml5.charRNN('./models/harrypotter.txt'.modelReady); 
}

function modelReady() {
    input = createInput();
    input.position(20, 20);

    const button = createButton('generate');
    button.position(input.x + input.width, 20);
    button.mousePressed(generate);
}

function generate() {
    const txt = input.value().toLowerCase();
    
    if (txt.length > 0) {
        const data = {}

        charRNN.generate(data, gotData);
    }
}

function gotData(err, result) {
    if (err) {
        const data = {
            seed: txt,
            temperature: 0.5,
            length: 100
        }

        
    }
}

function draw() {
    background(225);
    if (generation) {
        const w = 50;
        const h = 50;
        const x = width/2 - w/2;
        const y = height/2 - h/2;
        if (generation.score > 0.5) {
            image(fresh, x, y, w, h);
        } else (
            image(rotten, x, y, w, h)
        )
    }
}