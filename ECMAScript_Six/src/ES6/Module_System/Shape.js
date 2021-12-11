let _color = new WeakMap();

class Shape{
    constructor(color){
        _color.set(this, color);
    }
    get color(){
        return _color.get(this);
    }
    set color(c){
        return _color.set(this, c);
    }
    draw(){
        console.log("Drawing")
    } 
}

export default Shape; // if we want to use this class. we have to do export this way.