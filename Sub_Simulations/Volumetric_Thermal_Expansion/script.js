
/*steel = 0.000036 per C
initial volume = 1000 cm^3
starting temp = 0 C
dV = steel * initial volume * change in temp
V_final = initial volume + dV


let slider = document.getElementById("expTemp");
let temp = slider.value;
slider.addEventListener("input", function() {

}

document.getElementById("expTempValue").innerHTML = temp + "°C";
document.getElementById("expVolumeValue").innerHTML = V_final + " cm³";

jkkkjkkkjkjkjkj
*/
/*
let beta = 0.000036;
let V0 = 1000;
let T0 = 0;

let slider = document.getElementById("expTemp");
let numBox = document.getElementById("expTempNum");

slider.addEventListener("input", function() {
    let temp = slider.value;
    numBox.value = temp;
    let dT = temp - T0;
    let dV = beta * V0 * dT;
    let V_final = V0 + dV;

    document.getElementById("expTempValue").innerText = temp;
    document.getElementById("expVolume").innerText = V_final.toFixed(4);
});

numBox.addEventListener("input", function() {
    let temp = numBox.value;
    slider.value = temp;
    let dT = temp - T0;
    let dV = beta * V0 * dT;
    let V_final = V0 + dV;

    document.getElementById("expTempValue").innerText = temp;
    document.getElementById("expVolume").innerText = V_final.toFixed(4);
});
*/
/*
let beta = 0.000036;
let V0 = 1000;
let T0 = 0;

let slider = document.getElementById("expTemp");
let numBox = document.getElementById("expTempNum");
let cube = document.getElementById("cube");

function calculate(temp) {
    let dT = temp - T0;
    let dV = beta * V0 * dT;
    let V_final = V0 + dV;

    document.getElementById("expTempValue").innerText = temp;
    document.getElementById("expVolume").innerText = V_final.toFixed(4);
    
    let baseSize = 100;
    let newSize = baseSize * Math.cbrt(V_final / V0);
    cube.style.width = newSize + "px";
    cube.style.height = newSize + "px";
    
}

slider.addEventListener("input", function() {
    numBox.value = slider.value;
    calculate(slider.value);
});

numBox.addEventListener("input", function() {
    slider.value = numBox.value;
    calculate(numBox.value);
});
*/
const beta = 0.000036;
const V0 = 1000;
const T0 = 0;
const baseSize = 100;

const slider = document.getElementById("expTemp");
const numBox = document.getElementById("expTempNum");
const cube = document.getElementById("cube");
const expTempValue = document.getElementById("expTempValue");
const expVolume = document.getElementById("expVolume");

function calculate(tempStr) {

    const temp = parseFloat(tempStr) || 0; 
    
    const dT = temp - T0;
    const dV = beta * V0 * dT;
    const V_final = V0 + dV;

  
    expTempValue.innerText = temp;
    expVolume.innerText = V_final.toFixed(4);
    
    
    const newSize = baseSize * Math.cbrt(V_final / V0);
    cube.style.width = newSize + "px";
    cube.style.height = newSize + "px";
}

slider.addEventListener("input", function() {
    numBox.value = slider.value;
    calculate(slider.value);
});

numBox.addEventListener("input", function() {
    slider.value = numBox.value;
    calculate(numBox.value);
});

calculate(slider.value);