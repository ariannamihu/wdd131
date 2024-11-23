let temperature = 50; //Fahrenheit
let windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

let windchill = calculateWindChill(temperature, windSpeed).toFixed(2);

const windchillHTML = document.querySelector("#windchill")

if (temperature <= 50 && windSpeed > 3){
    windchillHTML.innerHTML = `Wind Chill: ${windchill}`;
}
else{
    windchillHTML.innerHTML = `Wind Chill: N/A`;
}