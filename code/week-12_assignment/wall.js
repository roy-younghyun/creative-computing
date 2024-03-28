class Walls {
    constructor(world) {
        this.world = world;
        this.thickness = 30;
        this.shapes = [];
    }

    addSideWalls() {
        const leftSideWall = new Rect(this.world,
            createVector(0, height / 2),
            createVector(this.thickness, height),
            { isStatic: true }
        );
        const rightSideWall = new Rect(this.world,
            createVector(width, height / 2),
            createVector(this.thickness, height),
            { isStatic: true }
        );
        const leftSlope = new Rect(this.world,
            createVector(0, height * 0.45),
            createVector(this.thickness, height * 0.75),
            { isStatic: true, angle: -PI / 4 }
        );
        const rightSlope = new Rect(this.world,
            createVector(width, height * 0.45),
            createVector(this.thickness, height * 0.75),
            { isStatic: true, angle: PI / 4 }
        );
        this.shapes.push(leftSideWall, rightSideWall, leftSlope, rightSlope);
    }

    display() {
        this.shapes.forEach(s => s.display());
    }
}