class Station {
    constructor(station) {
        this.id = station.id;
        this.x = map(station.lng, minLng, maxLng, 0, width);
        this.y = map(station.lat, minLat, maxLat, height, 0);
    }


    display() {
        noStroke();
        fill(175);
        circle(this.x, this.y, 5);
    }
}