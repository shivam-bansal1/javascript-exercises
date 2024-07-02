const convertToCelsius = function(tempInFahrenheit) {
    let tempInCelcius;
    tempInCelcius = (tempInFahrenheit-32) * 5/9;
    tempInCelcius = Math.round(tempInCelcius * 10) / 10;

    return tempInCelcius
};

const convertToFahrenheit = function(tempInCelcius) {
    let tempInFahrenheit;
    tempInFahrenheit = tempInCelcius * 9/5 + 32;
    tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;

    return tempInFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
