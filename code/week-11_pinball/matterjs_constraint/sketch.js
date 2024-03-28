let engine;
let shapes = [];
let walls;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    engine = Matter.Engine.create();
    walls = new Walls(engine.world);
    walls.addBottomWall();

    let anchor = { x: width / 2, y: 50 };
    const size = 25;
    let preCircle = null;

    for (let i = 0; i < 10; i++) {
        const circle = createCircle(anchor.x + (i + 1) * size * 2.1,
            anchor.y, size);
        const constraintOptions = {
            bodyB: circle.body,
            stiffness: 0.5
        }
        if (preCircle) {
            constraintOptions.bodyA = preCircle.body;
        } else {
            constraintOptions.pointA = anchor;
        }

        const constraint = Matter.Consraint.create(constraintOptions);
        Matter.Composite.add(engine.world, constraint);
        preCircle = circle;
    }

    const matterMouse = Matter.Mouse.create();
    const mcOptions = {
        mouse: matterMouse
    };
    const mouseConstraint = MAtter.MouseConstraint.create(engine, mcOptions);
    Matter.Composite.add(engine.world, mouseConstraint);
    Matter.Runner.run(engine);
}

function createCircle(x, y, size, options) {
    let shape = new Circle(engine.world,
        createVector(x, y),
        createVector(size, size),
        options);

    shapes.push(shape);
    return shape;
}

function draw() {
    background(200);
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
}