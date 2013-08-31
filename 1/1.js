/**
 * Stan Gumeniuk i@igo.su
 * Date: 31.08.13
 * Time: 22:14
 */

function Point(x,y){
    this.x = x;
    this.y = y;
}

var p = new Point (1,1);

console.log(p);

//Try to add function via prototype
Point.prototype.r = function(){
    return Math.sqrt (
        this.x * this.x + this.y * this.y
    );
};

console.log(p.r());
console.log(p);
