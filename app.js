window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureFeelsLike = document.querySelector(".temperature-feels-like");
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
                temperatureDegree.textContent = temp;
                temperatureFeelsLike.textContent = feels_like;
                location.textContent = data.name;
            })
        })
    } else {
        h1.textContent = "Sorry, this isn`t working";
    }

});
