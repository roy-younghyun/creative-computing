class Mouth {
  constructor() {
    this.leftX = -50;
    this.leftY = 0;
    this.leftControlX = -25;
    this.leftControlY = 0;
    this.rightControlX = 25;
    this.rightControlY = 0;
    this.rightX = 50;
    this.rightY = 0;
  }

  updateShape(stress) {
    let s = map(stress, 1, 7, 1, 0);
    
    this.leftControlY = -35 + 70 * s;
    this.rightControlY = -35 + 70 * s;
  }

  display() {
    beginShape();
    vertex(this.leftX, 20 + this.leftY);
    bezierVertex(
      this.leftControlX, 20 + this.leftControlY,
      this.rightControlX, 20 + this.rightControlY,
      this.rightX, 20 + this.rightY
      );
    endShape();
  }
}

