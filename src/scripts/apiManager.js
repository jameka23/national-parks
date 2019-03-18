const api = {
    getParks: function() {
        return fetch("http://localhost:9099/parks")
        .then(response => response.json())
        .then(parsedResponse => parseAPI(parsedResponse))
    }
}