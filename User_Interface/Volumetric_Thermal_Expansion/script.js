const expTemp = document.getElementById("expTemp");
const expTempNum = document.getElementById("expTempNum");
const expTempValue = document.getElementById("expTempValue");
const expVolume = document.getElementById("expVolume");
const cube = document.getElementById("cube");

const V0 = 1000;
const beta = 0.000036;
const baseSize = 140;

function calculate(tempValue) {

    const temp = parseFloat(tempValue) || 0;

    expTemp.value = temp;
    expTempNum.value = temp;

    expTempValue.textContent = temp;

    const V_final = V0 * (1 + (beta * temp));

    expVolume.textContent = V_final.toFixed(2);

    const visualScale = 1 + (temp / 700) * 0.8;
    const newSize = baseSize * visualScale;

    cube.style.width = `${newSize}px`;
    cube.style.height = `${newSize}px`;

    const ratio = temp / 700;
    const r = Math.round(30 + ratio * 225);
    const g = Math.round(100 - ratio * 80);
    const b = Math.round(255 - ratio * 225);

    cube.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

expTemp.addEventListener("input", () => {
    calculate(expTemp.value);
});

expTempNum.addEventListener("input", () => {
    calculate(expTempNum.value);
});

calculate(0);