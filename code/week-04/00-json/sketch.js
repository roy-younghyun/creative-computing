let data;

function preload() {
  data = loadJSON('data.json');
}

async function setup() {
  createCanvas(400, 400);
  background(220);

  let res = await fetch('data.json');
  data = await res.json();
}

function draw() {
  background(220);
  if (!data) return;

  /*  for (let i = 0; i < data.shapes.length; i++) {
      const shapeObj = data.shapes[i];
      fill(shapeObj.color);
      if (shapeObj.shape === 'circle') {
        circle(shapeObj.pos[0], shapeObj.pos[1], 100);
      } else {
        rect(shapeObj.pos[0], shapeObj.pos[1], 100, 100);
      }
    }*/

data.shapes.sort((a, b) => a.pos[0] - b.pos[0]);

const filtered = data.shapes.filter(item => item.pos[0] > 150);

filtered.forEach((shapeObj) => {
    fill(shapeObj.color);
    if (shapeObj.shape === 'circle') {
      circle(shapeObj.pos[0], shapeObj.pos[1], 100);
    } else {
      rect(shapeObj.pos[0], shapeObj.pos[1], 100, 100);
    }
  })
}