import Shape from "./Shape";

class Rectangle extends Shape{
    constructor(color = "Green",weight, height){
        super(color)
        this.height = height;
        this.weight = weight;
    }
    calculateArea(){
        return this.height * this.weight;
    }

}
export default Rectangle;