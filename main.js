var p5inst = new p5(function(p)  {
    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(255);
    };
    
    p.draw = function() {
        p.fill(0);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };
});