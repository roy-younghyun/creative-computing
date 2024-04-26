function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

class Body {
    constructor() {
      this.shape = 'rectangle';
      this.size = 100;
    }

    updateShape(happiness) {
        if (happiness === 1) {
            this.shape = '8-star';
          } else if (happiness == 2) {
            this.shape = '6-star';
          } else if (happiness == 3) {
            this.shape = '4-star';
          } else if (happiness == 4) {
            this.shape = 'rectangle';
          } else if (happiness == 5) {
            this.shape = 'hexagon';
          } else if (happiness == 6) {
            this.shape = 'octagon';
          } else if (happiness == 7) {
            this.shape = 'circle';
          }
    }
    
    display() {
        if (this.shape === '8-star') {
            star(0, 0, this.size, this.size-20, 8);
          } else if (this.shape === '6-star') {
            star(0, 0, this.size, this.size-20, 6);
          } else if (this.shape === '4-star') {
            star(0, 0, this.size, this.size-20, 4);
          } else if (this.shape === 'rectangle') {
            rectMode(CENTER);
            rect(0, 0, this.size * 1.5, this.size * 1.5);
          } else if (this.shape === 'hexagon') {
            polygon(0, 0, this.size, 6);
          } else if (this.shape === 'octagon') {
            polygon(0, 0, this.size, 8);
          } else if (this.shape === 'circle') {
            circle(0, 0, this.size * 1.8);
          }
    }
  }