class Particle {
    constructor(x, y, size) {
      this.loc = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.friction = 0.95;
      this.size = size;
    }
    
    applyForce(force) {
      this.acc.add(force);
    }
  
    update(size) {
      this.size = 2 + size * 10;
      
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.acc.mult(0);
      this.vel.mult(this.friction);
    
      //if (this.size < 1.0001 || this.age <= 0) {
      //  this.isDead = true;
      //}
    }
    
    bounce() {
        let top = this.size / 2;
        let bottom = height - this.size / 2;
        let left = this.size / 2;
        let right = width - this.size/2;
        if (this.loc.y < top || this.loc.y > bottom) {
            this.vel.y *= -1;
        }
        if (this.loc.x < left || this.loc.x > right) {
            this.vel.x *= -1;
        }
    }

  
    display() {
      //fill(255, this.age/this.maxAge * 255);
      fill(this.size * 35);
      ellipse(this.loc.x, this.loc.y, this.size);
    }
    
  }