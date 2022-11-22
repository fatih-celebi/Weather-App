window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDegreeKelvin = document.querySelector(".temperature-degree-kelvin");
    let temperatureFeelsLikeKelvin = document.querySelector(".temperature-feels-like-kelvin");
    let location = document.querySelector(".location-timezone");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let apiKey = "879c06bd326a87da4ffc25cdacf6a1ea";
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
            fetch(api) 
            .then(Response => {
                return Response.json();
            })
            .then(data => {
                console.log(data);
                let {temp, feels_like} = data.main;
                temperatureDegreeKelvin.textContent = temp.toFixed(1);
                temperatureFeelsLikeKelvin.textContent = feels_like;
                location.textContent = data.name;

                // Add button and a function displaying temperature in Celsius
                let showCelsiusButton = document.querySelector(".show-celsius");
                let temperatureDegreeCelsius = document.querySelector(".temperature-degree-celsius");

                showCelsiusButton.addEventListener("click", () => {
                    let degreeInCelsius = Math.round(temp - 273);
                    temperatureDegreeCelsius.textContent = `It is ${degreeInCelsius} C :))`
                })
            })
        })
    } else {
        h1.textContent = "Sorry, this isn`t working";
    } 
});
