class ParticleSystem {
    constructor(image) {
      this.image = image;
      this.particles = [];
    }

    update() {
        for (let i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];
        const x = floor(p.loc.x);
        const y = floor(p.loc.y);

        const pixelIndex = (x + y * width) * 4;
        const r = this.image.pixels[pixelIndex];
        const g = this.image.pixels[pixelIndex + 1];
        const b = this.image.pixels[pixelIndex + 2];
        const brightness = (r+g+b)/3/255;
        

        for (let j = i+1; j < this.particles.length; j++) {
            let otherP = this.particles[j];
            let distance = p.loc.dist(otherP.loc);
            if ( distance < (p.size + otherP.size)/2) {
                let push = p5.Vector.sub(p.loc, otherP.loc);
                push.normalize();
                push.div(distance*2);
                push.limit(0.05);
                p.applyForce(push);
                otherP.applyForce(push.mult(-1));
            }
        }
    }
}

    /*draw() {
      this.image.loadPixels();
      for (let i = this.particles.length-1; i >= 0; i-- ) { 
        let p = this.particles[i];
        
        var pixelIndex = ( Math.floor(p.loc.x) + Math.floor(p.loc.y) * width) * 4;
        var r = this.image.pixels[pixelIndex+0];
        var g = this.image.pixels[pixelIndex+1];
        var b = this.image.pixels[pixelIndex+2];
        var size = 2 + (r+g+b)/3/255 * 10;
        
        for (let j=i; j >=0; j--) {
          let op = this.particles[j];
          
          let distance = p.loc.dist(op.loc);
          if (distance < (p.size + op.size) * 0.5 + 1) {
            var pushForce = p5.Vector.sub(p.loc, op.loc);
            pushForce.normalize();
            pushForce.mult(1/(distance+1) * 0.25);
            pushForce.limit(3);
            p.applyForce(pushForce);
            op.applyForce(pushForce.mult(-1)); 
          }
        }
        
        p.update(size);
        p.display();
        
        if (p.isDead) {
          this.particles.splice(i, 1);
        }
      }
    }*/
    
  
    addParticles(pos, numOfParticles) {
      for (let i = 0; i < numOfParticles; i++ ) {
        let randomSize = random(2, 10);
        let particle = new Particle(pos, 10);
        let randomX = cos(random(0, PI*2)) * 0.1;
        let randomY = sin(random(0, PI*2)) * 0.1;
        let randomForce = createVector(randomX, randomY);
        particle.applyForce(randomForce);
        this.particles.push(particle);
  
      }
    }
  }