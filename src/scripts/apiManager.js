const api = {
    getParks: function() {
        return fetch("http://localhost:9099/parks")
        .then(response => response.json())
        .then(parsedResponse => parseAPI(parsedResponse))
    },
    getWeather: function(lat,long) {
        return fetch(`https://api.darksky.net/forecast/7b2f6a53289f0a93da5b0ea8e47e3f8e/${lat},${long}`,{
            method: "GET"
        })
        .then(response => response.json())
    }
}