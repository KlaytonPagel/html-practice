const screen = document.getElementById("screen");
const pen = screen.getContext("2d");
let width = window.innerWidth - 20;
let height = window.innerHeight - 20;
screen.width = width;
screen.height = height;

class circleThing {
    constructor(pen) {
        this.pen = pen;
        this.colors = ["red", "blue", "green", "white", "orange", "yellow", "black"]

        this.outerRadius = width / 3;
        this.outerX = width / 2;
        this.outerY = height / 2;
        this.outerTop = this.outerY - this.outerRadius;
        this.outerBottom = this.outerY + this.outerRadius;

        this.innerRadius = this.outerRadius / 10;
        this.innerX = width / 2;
        this.innerY = height / 2
        this.innerDirectionY = 1;
        this.innerDirectionX = 0;
        this.innerSpeed = 5;
        this.innerColor = "red";
        this.innerColorIndex = 0;

        console.log("created circle thing")
    }

    createOuterCircle() {
        this.pen.lineWidth = 5;
        this.pen. beginPath();
        this.pen.arc(this.outerX, this.outerY, this.outerRadius, 0, Math.PI * 2);
        this.pen.stroke();
    }

    createInnerCircle() {
        this.pen.lineWidth = 10;
        this.pen.beginPath();
        this.pen.fillStyle = this.innerColor
        this.pen.arc(this.innerX, this.innerY, this.innerRadius, 0, Math.PI * 2);
        this.pen.stroke();
        this.pen.fill();
    }

    checkCollision() {
        if (this.innerY + this.innerRadius > this.outerBottom) {
            this.innerDirectionY = -1;
            this.innerRadius+= 1
            this.changeColor()
        } else if (this.innerY - this.innerRadius < this.outerTop) {
            this.innerDirectionY = 1;
            this.innerRadius += 1
            this.changeColor()
        }
    }

    changeColor() {
        if (this.innerColor === this.colors[this.colors.length - 1]) {
            this.innerColor = this.colors[0]
            this.innerColorIndex = 0;
        } else {
            this.innerColor = this.colors[this.innerColorIndex += 1]
        }
    }

    update() {
        this.checkCollision()
        this.pen.clearRect(0, 0, width, height);
        this.innerY += this.innerSpeed * this.innerDirectionY;
        this.innerX += 0.5 * this.innerDirectionX;
        this.createInnerCircle();
        this.createOuterCircle();
    }
}

let circ = new circleThing(pen);

function running() {
    circ.update();
    requestAnimationFrame(running);
}

running();