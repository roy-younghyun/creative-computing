class Shape {
    constructor(world, pos, size, options) {
        // create physical body. store size information.
        this.world = world;
        this.pos = pos;
        this.size = size;
        this.body = this.createBody(pos, options);
        Matter.Composite.add(engine.world, this.body);

    }

    createBody(pos, options) {

    }

    display() {

    }
}