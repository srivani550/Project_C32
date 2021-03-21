class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        console.log(this.body.speed);
        if(this.body.speed < 8){
            push();
            var pos = this.body.position;
            strokeWeight(2);
            fill("pink");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }

    }

    score(){
        if(this.visibility < 0 && this.visibility > -105){
            score++;
        }
    }
}