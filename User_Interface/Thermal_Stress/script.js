const stressTemp = document.getElementById("stressTemp");
const stressTempNum = document.getElementById("stressTempNum");

const stressTempValue = document.getElementById("stressTempValue");
const stressValue = document.getElementById("stressValue");

const rod = document.getElementById("rod");

const E = 200000;
const alpha = 0.000012;
const baseHeight = 60;

const crackTemps = [250, 400, 520, 650];

crackTemps.forEach((temp, index) => {

    const crack = document.createElement("div");

    crack.classList.add("crack");

    crack.style.left = `${25 + (index * 20)}%`;

    crack.style.top = `${10 + (index * 5)}%`;

    crack.style.height = `${70 + (index * 5)}%`;

    crack.id = `crack${index}`;

    rod.appendChild(crack);
});

function calculate(tempValue) {

    const temp = parseFloat(tempValue) || 0;

    stressTemp.value = temp;
    stressTempNum.value = temp;

    stressTempValue.textContent = temp;

    const stress = E * alpha * temp;

    stressValue.textContent = stress.toFixed(2);

    const ratio = temp / 700;

    const r = Math.round(30 + ratio * 225);
    const g = Math.round(100 - ratio * 80);
    const b = Math.round(255 - ratio * 225);

    rod.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const newHeight = baseHeight + (ratio * 70);

    rod.style.height = `${newHeight}px`;

    crackTemps.forEach((crackTemp, index) => {

        const crack = document.getElementById(`crack${index}`);

        if (temp >= crackTemp) {

            crack.style.display = "block";

        } else {

            crack.style.display = "none";
        }
    });
}

stressTemp.addEventListener("input", () => {
    calculate(stressTemp.value);
});

stressTempNum.addEventListener("input", () => {
    calculate(stressTempNum.value);
});

calculate(0);