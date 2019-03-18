const mainContainer = document.getElementById("display-container");

const buildHtmlForParks = (parkName, parkState, visited, currently, hourly, daily) => {
    const parkSection = document.createElement("section");
    parkSection.id = "park-section";

    const parkArticle = document.createElement("article");
    parkArticle.id = "park-article"
    parkArticle.className = visited;
    parkSection.appendChild(parkArticle); // append the article to the section of the parkSection

    const parkH3 = document.createElement("h3");
    parkH3.textContent = `Park Name: ${parkName} `

    const parkPara = document.createElement("p");
    parkPara.textContent = `The park is located in: ${parkState}`;

    parkArticle.appendChild(parkH3);
    parkArticle.appendChild(parkPara);

    const weatherPara = document.createElement("p");
    weatherPara.textContent = "Weather:";
    parkArticle.appendChild(weatherPara);

    const ulElement = document.createElement("ul");
    parkArticle.appendChild(ulElement);

    const liCurrent = document.createElement("li");
    liCurrent.textContent = `Currently: ${currently}`;
    ulElement.appendChild(liCurrent);

    const liHourly = document.createElement("li");
    liHourly.textContent = `Today: ${hourly}`;
    ulElement.appendChild(liHourly);

    const liDaily = document.createElement("li");
    liDaily.textContent = `Week: ${daily}`;
    ulElement.appendChild(liDaily);

    console.log(parkSection);
    mainContainer.appendChild(parkSection);
}

// =============== footer ====================
const footer = document.createElement("footer");
const para = document.createElement("paragraph");
para.innerHTML = "<a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>";
footer.appendChild(para);
mainContainer.appendChild(footer);

// buildHtmlForParks();

const parseAPI = (parsedArray) => {
    console.log(parsedArray); // this is an array
    parsedArray.forEach(parkObj => {
        // console.log(parkObj.name, parkObj.state)
        let currently = "";
        let hourly = "";
        let daily = "";
        api.getWeather(parkObj.latitude, parkObj.longitude)
        .then(function(parsedResponse ) {
            // console.log(parsedResponse.currently.summary);
            // console.log(parsedResponse.hourly.summary);
            // console.log(parsedResponse.daily.summary);
            // console.log(parsedResponse);
            currently = parsedResponse.currently.summary;
            hourly = parsedResponse.hourly.summary;
            daily = parsedResponse.daily.summary;
            buildHtmlForParks(parkObj.name, parkObj.state, parkObj.visited, currently, hourly, daily);
        })
    });
}
