

document.getElementById("cal").addEventListener("click", main);

function main() {

let input1 = parseInt(document.getElementById("input1").value);
let input2 = parseInt(document.getElementById("input2").value);
let input3 = parseInt(document.getElementById("input3").value);
let input4 = parseInt(document.getElementById("input4").value);
let input5 = parseInt(document.getElementById("input5").value);
let input6 = parseInt(document.getElementById("input6").value);

/////////////////////////////////////////////
var output1 = 3*Math.pow(10,8) * Math.sqrt(2/(input3+1));
document.getElementById("ans1").innerHTML = output1;
/////////////////////////////////////////////
var Eff  = ((input3+1)/2) + ((input3-1)/2) * (1+((12*input5)/output1));
var dL = input5 * (0.412) * ((Eff+0.3)*((output1/input5) + 0.264))/ ((Eff-0.258)*((output1/input5) + 0.8));
var output2 = (3*Math.pow(10,8)/(2*input1*Math.sqrt(Eff))) - (2* dL);
document.getElementById("ans2").innerHTML = output2;
////////////////////////////////////////////
var output3;

if(output1>(2*input5)){
    var b = (377*Math.PI)/(2*input6*Math.sqrt(input3));
    output3 = ((2*input5)/Math.PI)*(b-1-Math.log(b-1)+ ( ((input3-1)/(2*input3)) * Math.log(b-1) ) + 0.39 - (0.61/input3));
}
else if (output1 <= (2*input5)){
    var a = ((input6/60)*Math.sqrt((input3+1)/2)) + ((input3-1)/(input3+1)) * (0.23+(0.11/input3));
    output3 = (8*input5*Math.exp(a))/(Math.exp(2*a)-2);
}
document.getElementById("ans3").innerHTML = output3;
//////////////////////////////////////////////

var output4 = (input2)/(4*Math.sqrt(Eff));
document.getElementById("ans4").innerHTML = output4;

///////////////////////////////////////////////////
var zcc = ((90*Math.pow(input3, 2)) / (input3-1)) *  Math.pow((output2/output1), 2);
console.log(zcc);
var zc = Math.sqrt(50*zcc); 
console.log(zc);

var output5 = (output2/Math.PI)*Math.acos(Math.sqrt(50/zc));
console.log(output5);

document.getElementById("ans5").innerHTML = output5;


/////////////////////////////
document.getElementById("ans6").innerHTML = output1;
//////////////////////////////
document.getElementById("ans7").innerHTML = output2-output5;

/////////////////////////
document.getElementById("ans8").innerHTML = (2*output1)/5;
/////////////////////////
document.getElementById("ans9").innerHTML = output3;
/////////////////
document.getElementById("ans10").innerHTML = output1-((4*output1/5) + output3);
////////////////
document.getElementById("ans11").innerHTML = output5;
////////////////
document.getElementById("ans12").innerHTML = output3;
////////////
document.getElementById("ans13").innerHTML = output4-output5;
////////////




}
