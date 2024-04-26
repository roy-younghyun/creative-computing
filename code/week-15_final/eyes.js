class Eyes {
    constructor() {
        this.shape = 'circle';
    }

    updateShape(tiredness) {
        if (tiredness === 1) {
            this.shape = 'tired-1';
        } else if (tiredness == 2) {
            this.shape = 'tired-2';
        } else if (tiredness == 3) {
            this.shape = 'tired-3';
        } else if (tiredness == 4) {
            this.shape = 'tired-4';
        } else if (tiredness == 5) {
            this.shape = 'tired-5';
        } else if (tiredness == 6) {
            this.shape = 'tired-6';
        } else if (tiredness == 7) {
            this.shape = 'tired-7';
        }
    }

    display() {
        if (this.shape === 'tired-1') {
            rectMode(CENTER);
            rect(- 20, - 20, 12, 50, 10);
            rect(20, - 20, 12, 50, 10);

        } else if (this.shape === 'tired-2') {
            rectMode(CENTER);
            rect(- 20, - 20, 12, 40, 10);
            rect(20, - 20, 12, 40, 10);
        } else if (this.shape === 'tired-3') {
            rectMode(CENTER);
            rect(- 20, - 20, 12, 30, 10);
            rect(20, - 20, 12, 30, 10);
        } else if (this.shape === 'tired-4') {
            rectMode(CENTER);
            rect(- 20, - 20, 19, 19, 10);
            rect(20, - 20, 19, 19, 10);
        } else if (this.shape === 'tired-5') {
            rectMode(CENTER);
            rect(- 25, - 20, 30, 12, 10);
            rect(25, - 20, 30, 12, 10);
        } else if (this.shape === 'tired-6') {
            rectMode(CENTER);
            rect(- 30, - 20, 40, 12, 10);
            rect(30, - 20, 40, 12, 10);
        } else if (this.shape === 'tired-7') {
            rectMode(CENTER);
            rect(- 35, - 20, 50, 12, 10);
            rect(35, - 20, 50, 12, 10);
        }
    }
}