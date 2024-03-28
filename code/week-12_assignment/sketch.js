let engine;
let shapes = [];
let walls;
let leftPaddle;
let rightPaddle;
let obstacle1;
let score = 0;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    noStroke();

    engine = Matter.Engine.create();
    walls = new Walls(engine.world);
    walls.addSideWalls();

    leftPaddle = new Rect(engine.world,
        createVector(width * 0.35, height * 0.8),
        createVector(width * 0.2, 20),
        { isStatic: true, angle: PI / 4 });

    rightPaddle = new Rect(engine.world,
        createVector(width * 0.65, height * 0.8),
        createVector(width * 0.2, 20),
        { isStatic: true, angle: -PI / 4 });

    obstacle1 = new Rect(engine.world, createVector(width * 0.25, height * 0.2), createVector(20, 20), { isStatic: true, angle: PI / 4 });
    obstacle2 = new Rect(engine.world, createVector(width * 0.5, height * 0.2), createVector(20, 20), { isStatic: true, angle: PI / 4 });
    obstacle3 = new Rect(engine.world, createVector(width * 0.75, height * 0.2), createVector(20, 20), { isStatic: true, angle: PI / 4 });
    obstacle4 = new Rect(engine.world, createVector(width * 0.375, height * 0.4), createVector(20, 20), { isStatic: true, angle: PI / 4 });
    obstacle5 = new Rect(engine.world, createVector(width * 0.625, height * 0.4), createVector(20, 20), { isStatic: true, angle: PI / 4 });

    shapes.push(leftPaddle, rightPaddle, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5);

    Matter.Runner.run(engine);

    setInterval(() => {
        if (shapes.length < 8) {
            const options = {
                friction: 0,
                frictionAir: 0,
                restitution: 0.98,
                intertia: Infinity
            }

            this.createCircle(random(width * 0.25, width * 0.75), -10, options);
        }
    }, 1000);
}

function createCircle(x, y, options) {
    let shape = new Circle(engine.world,
        createVector(x, y),
        createVector(25, 25),
        options);

    shapes.push(shape);

    let collision = Matter.SAT.collides(shape, leftPaddle);
    if (collision.collided) { score += 1; }
}

function draw() {
    background(20);
    walls.display();
    /*shapes.forEach(shape => {
        shape.display();
    });*/

    for (let i = shapes.length - 1; i >= 0; i--) {
        const s = shapes[i];
        s.display();
        if (s.isDead()) {
            shapes.splice(i, 1);
        }


    }

    let targetLeftAngle = PI / 4;
    let targetRightAngle = - PI / 4;

    if (keyIsPressed) {
        if (keyIsDown(LEFT_ARROW)) {
            targetLeftAngle = -PI / 4
        }
        if (keyIsDown(RIGHT_ARROW)) {
            targetRightAngle = PI / 4;
        }
    }

    leftPaddle.animAngle(targetLeftAngle);
    rightPaddle.animAngle(targetRightAngle);


    fill(255);
    textFont('HELVETICA');
    textSize(30);
    textAlign(CENTER);
    text(score, width * 0.5, height * 0.8);
}

// How can I make the rotating anchor point to be close to the edges?
// Can I make the objects detect collision?