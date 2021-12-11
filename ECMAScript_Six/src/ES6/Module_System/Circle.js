// import Shape from "./Shape";
import Rectangle from "./Rectangle";

class Circle extends Rectangle{
    constructor(radius){
        super()
        this.radius = radius;
    }
    calculateArea(){
        return 2 * Math.PI * this.radius;
    }

}
export default Circle;