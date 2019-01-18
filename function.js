function cat(name){
    this.name = name;
    this.stomach =[];   
}
cat.prototype.eat = function(Mouse){
    this.stomach.push(Mouse);
}
module.exports = cat;