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
createCircle(6).draw()

//Constructor functioon
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw through constructor: " + this.radius)
    }

}
new Circle(4).draw();