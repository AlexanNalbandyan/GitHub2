var matrix = [
    [2 , 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 0, 0, 0, 0, 1, 3, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 0, 1, 1, 1,],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 1, 0, 3, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [2 , 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 5, 1, 0, 0, 1, 1, 1,],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 0, 1, 1, 1,],
    [0, 1, 0, 3, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1,]
    
];


var side = 60;
var grassArr = [];
var xotakerArr = [];
var amArr = [];
var gishatichArr = [];
var anmahArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = (new Xotaker(x, y))
                xotakerArr.push(xotaker)
            }
            else if (matrix[y][x] == 3) {
                var am = (new Amenaker(x, y))
                amArr.push(am)
            }
            else if (matrix[y][x] == 4) {
                var gs = (new Gishatich(x,y))
                gishatichArr.push(gs)
            }
            else if (matrix[y][x] == 5) {
                var an = (new Anmah(x,y))
                anmahArr.push(an)
            }
        }
    }


}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

     for (var i in xotakerArr) {
        xotakerArr[i].utel();    
     }

     for(var i in amArr){
       amArr[i].utel();
     }

     for(var i in gishatichArr){
       gishatichArr[i].utel();
     }

     for(var i in anmahArr){
       anmahArr[i].utel();
     }
}
