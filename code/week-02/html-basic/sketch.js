let btn;

function setup() {
    const canvas = createCanvas (windowWidth, windowHeight);
    canvas.addClass('background');
    background(200);
}

function mouseDragged() {
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function windoResized() {
    resizeCanvas(windowWidth, windowHeight);
}