const expTemp = document.getElementById("expTemp");
const expTempNum = document.getElementById("expTempNum");
const expVolume = document.getElementById("expVolume");
const tempDisplay = document.getElementById("tempDisplay");
const cube = document.getElementById("cube");
const resetBtn = document.getElementById("resetBtn");

const V0 = 1000;
const beta = 0.000036;

function updateSimulation(val) {
    let temp = parseFloat(val);
    if (isNaN(temp)) temp = 0;
    if (temp < 0) temp = 0;
    if (temp > 700) temp = 700;
    
    expTemp.value = temp;
    tempDisplay.textContent = temp;
    if (document.activeElement !== expTempNum) {
        expTempNum.value = temp;
    }

    const vFinal = V0 * (1 + (beta * temp));
    expVolume.textContent = vFinal.toFixed(2);

    const visualScale = 1 + (temp / 700) * 0.8;
    cube.style.transform = `scale(${visualScale})`;

    const ratio = temp / 700;
    const r = Math.round(70 + ratio * 150);
    const g = Math.round(130 - ratio * 100);
    const b = Math.round(180 - ratio * 150);
    cube.style.backgroundColor = `rgb(${r},${g}, ${b})`;
}

expTemp.addEventListener("input",(e) => updateSimulation(e.target.value));
expTempNum.addEventListener("input", (e) => updateSimulation(e.target.value));
resetBtn.addEventListener("click", () => updateSimulation(0));

updateSimulation(0);