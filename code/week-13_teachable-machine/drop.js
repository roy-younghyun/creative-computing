class Drop {
    constructor(label) {
        this.x = random(0, width);
        this.y = -10;
        this.label = label;
        this.textSource = textSource;
    }

    update() {
        this.speed = random(5, 10);
        this.gravity = 1.05;
        this.y = this.y + this.speed * this.gravity
    }

    draw() {
        let textSource = "A";
        if (this.label==='SSD') {
            textSource = "B";
        }
        text(textSource, this.x, this.y);
    }
}