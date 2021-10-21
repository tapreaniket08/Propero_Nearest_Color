function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var rgb = [];
    if (result) {
        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);
        rgb.push(r);
        rgb.push(g);
        rgb.push(b)
        return rgb;
    }
    else{
        alert("Invalid Input")
       // document.getElementById("color").innerHTML = "Invalid Input";

    }
    return null;
}

function displayColour() {
    var hexno = document.getElementById("HEX").value
    console.log(hexno)
    inputrgb = hexToRgb(hexno);
    r1 = inputrgb[0];
    g1 = inputrgb[1];
    b1 = inputrgb[2];
    console.log(r1, g1, b1);

    var colorName = ["White", "Black", "Red", "Green", "Blue"];
    var DefRgbCode = [[255, 255, 255], [0, 0, 0], [255, 0, 0], [0,255, 0], [0, 0,255]];
    var ShortDistance = [];
    for (var i = 0; i < colorName.length; i++) {
        var r2 = DefRgbCode[i][0];
        var g2 = DefRgbCode[i][1];
        var b2 = DefRgbCode[i][2];

        var distance = Math.sqrt(Math.pow(r2 - r1, 2) +
            Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
        ShortDistance.push(distance);
        var indexMinValue = ShortDistance.indexOf(Math.min(...ShortDistance));
        //console.log(r1, g1, b1);
        //console.log(r2, g2, b2);
        //console.log(distance);
        //console.log(indexMinValue);

    }
    console.log(ShortDistance);
    console.log(colorName[indexMinValue]);
    var output=colorName[indexMinValue];
    document.getElementById("color").innerHTML = output;

    if (output==="Black"){
        document.body.style.backgroundColor="Black"
    }
    if (output==="White"){
        document.body.style.backgroundColor="White"
    }
    if (output==="Red"){
        document.body.style.backgroundColor="Red"
    }
    if (output==="Green"){
        document.body.style.backgroundColor="Green"
    }
    if (output==="Blue"){
        document.body.style.backgroundColor="Blue"
    }
}
