const circle = {
    radius: 5.3,
    position: {
        x: 3,
        y: 2
    },

    draw: function() {
        console.log("drawing around (" + circle.position.x + "," + circle.position.y + ") with " + circle.radius + " radius")
    }
}
circle.draw();

//Factory method
function createCircle(radius) {
    return {
        radius ,
        draw : function() {
            console.log("Draw through factory method: " + this.radius)
        }

    };
}
let circle2 = createCircle(6)
circle2.draw()
console.log("cirlce2 :" + circle2)

//Constructor functioon
function Circle (radius) {
    console.log(this)
    this.radius = radius;
    this.draw = function() {
        console.log("Draw through constructor: " + this.radius)
    }

}
let circle3 =new Circle(4);
circle3.draw();
console.log(circle3)

console.log(Circle.length)
