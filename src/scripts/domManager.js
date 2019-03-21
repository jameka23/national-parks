const headContainer = document.getElementById("header-container");

const parksHeader = document.createElement("h1");
parksHeader.textContent = "National Parks"
headContainer.appendChild(parksHeader);

clearElement = domElement => {
    while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
    }
  };

const buildHtmlForParks = (parkName, parkState, visited, currently, hourly, daily, parkDeleteIdButton) => {
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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Park";
    deleteButton.setAttribute("id", `delete-park--${parkDeleteIdButton}`);
    parkArticle.appendChild(deleteButton);

    deleteButton.addEventListener("click", handleDelete);
    return parkSection;
}

const parseAPI = (parsedArray) => {
    console.log(parsedArray); // this is an array
    let parkSectionFrag = document.createDocumentFragment();
    parsedArray.forEach(parkObj => {
        let currently = "";
        let hourly = "";
        let daily = "";
        let parkId = parkObj.id;
        api.getWeather(parkObj.latitude, parkObj.longitude)
        .then(function(parsedResponse ) {
            currently = parsedResponse.currently.summary;
            hourly = parsedResponse.hourly.summary;
            daily = parsedResponse.daily.summary;
            parkSectionFrag.appendChild(buildHtmlForParks(parkObj.name, parkObj.state, parkObj.visited, currently, hourly, daily, parkId));
            mainContainer.appendChild(parkSectionFrag)
        })
    })
}

