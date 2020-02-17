class cuadrado{
    constructor(measure,color,y, x){
        this._width=measure;
        this._height=measure;
        this._color=color;
        this._y=y;
        this._x=x;
    }

    get width(){
        return this._width;
    }

    set width(value){
        this._width = value;
    }

    get height(){
        return this._height;
    }

    set height(value){
        this._height = value;
    }

    get color(){
        return this._color;
    }

    set color(value){
        this._color = value;
    }

    get y(){
        return this._y;
    }

    set y(value){
        this._y = value;
    }

    get x(){
        return this._x;
    }

    set x(value){
        this._x = value;
    }

    static creator(){
        var objetio = new cuadrado("75px","darkred", 385,385);
        $("div").css("background-color",objetio.color);
        $("div").css("width",objetio.width);
        $("div").css("height",objetio.height);
        $("div").css("top",objetio.y);
        $("div").css("left",objetio.x);
        return objetio;
    }

    static creator2(objetitio){
        var objetio = new cuadrado(objetitio.height, objetitio.color, objetitio.y,objetitio.x);
        $("div").css("background-color",objetio.color);
        $("div").css("width",objetio.width);
        $("div").css("height",objetio.height);
        $("div").css("top",objetio.y);
        $("div").css("left",objetio.x);
        return objetio;
    }

}

function update(ejeX, ejeY) {
    this._x += ejeX;
    this._y += ejeY;
}
