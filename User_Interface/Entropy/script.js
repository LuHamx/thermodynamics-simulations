const entropyTempSlider = document.getElementById("entropyTemp");
const entropyTempNum = document.getElementById("entropyTempNum");

const entropyTempValue = document.getElementById("entropyTempValue");
const entropyValue = document.getElementById("entropyValue");

const particleBackground = document.getElementById("particleBackground");


const Q = 334000;

let particlesArray = [];
let currentTemperature = 0;

function calculate(tempValue) {
    const tempCelsius = parseFloat(tempValue) || 0;

    entropyTempSlider.value = tempCelsius;
    entropyTempNum.value = tempCelsius;

    const tempKelvin = tempCelsius + 273.15;
    entropyTempValue.textContent = tempKelvin.toFixed(2);

    const deltaS = Q / tempKelvin;
    entropyValue.textContent = `${deltaS.toFixed(2)} J`;

    currentTemperature = tempCelsius;

    const targetPopulation = 15 + Math.floor(tempCelsius * 0.5); 
    adjustParticleCount(targetPopulation);

    const ratio = tempCelsius / 300;
    const r = Math.round(30 + ratio * 225);
    const g = Math.round(100 - ratio * 80);
    const b = Math.round(255 - ratio * 225);

    particlesArray.forEach(p => {
        p.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}


function createParticle() {
    const el = document.createElement('div');
    el.className = 'particle'; 
    particleBackground.appendChild(el);

    return {
        element: el,
        x: Math.random() * (particleBackground.clientWidth - 10),
        y: Math.random() * (particleBackground.clientHeight - 10),
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
    };
}

function adjustParticleCount(targetCount) {
    while (particlesArray.length < targetCount) {
        particlesArray.push(createParticle());
    }
    while (particlesArray.length > targetCount) {
        const removed = particlesArray.pop();
        if (removed) removed.element.remove();
    }
}

function moveEngine() {
    const speedFactor = 0.5 + (currentTemperature / 20);

    particlesArray.forEach(p => {
        p.x += p.dx * speedFactor;
        p.y += p.dy * speedFactor;

        if (p.x <= 0 || p.x >= particleBackground.clientWidth - 10) p.dx *= -1;
        if (p.y <= 0 || p.y >= particleBackground.clientHeight - 10) p.dy *= -1;

        p.x = Math.max(0, Math.min(particleBackground.clientWidth - 10, p.x));
        p.y = Math.max(0, Math.min(particleBackground.clientHeight - 10, p.y));

        p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
    });

    requestAnimationFrame(moveEngine);
}

entropyTempSlider.addEventListener("input", () => {
    calculate(entropyTempSlider.value);
});

entropyTempNum.addEventListener("input", () => {
    calculate(entropyTempNum.value);
});

moveEngine();
calculate(0);