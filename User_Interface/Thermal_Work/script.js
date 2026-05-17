const workInput = document.getElementById('workInput');
const workInputNum = document.getElementById('workInputNum');
const workInputValue = document.getElementById('workInputValue');
const workValue = document.getElementById('workValue');

const gas = document.getElementById('gas');
const piston = document.getElementById('piston');

const PRESSURE = 10;
const BASE_HEIGHT = 20;
const MAX_GROWTH = 70;

function updateSimulation(inputValue) {
    let heat = parseFloat(inputValue);
    if (isNaN(heat) || heat < 0) heat = 0;
    if (heat > 300) heat = 300;

    workInput.value = heat;
    workInputNum.value = heat;
    workInputValue.textContent = heat;

    const deltaV = heat * 0.5; 
    const work = PRESSURE * deltaV;
    workValue.textContent = work.toFixed(2);

    const totalHeightPercent = BASE_HEIGHT + ((heat / 300) * MAX_GROWTH);

    gas.style.height = `${totalHeightPercent}%`;
    piston.style.bottom = `${totalHeightPercent}%`;
}

workInput.addEventListener('input', (e) => {
    updateSimulation(e.target.value);
});

workInputNum.addEventListener('input', (e) => {
        updateSimulation(e.target.value);
});

updateSimulation(workInput.value);
