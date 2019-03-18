const mainContainer = document.getElementById("display-container");

const buildHtmlForParks = (parkName, parkState, visited) => {
    const parkSection = document.createElement("section");
    parkSection.id = "park-section";

    const parkArticle = document.createElement("article");
    parkArticle.id = "park-article"
    parkArticle.className = visited;
    parkSection.appendChild(parkArticle); // append the article to the section of the parkSection

    const parkH3 = document.createElement("h3");
    parkH3.textContent = `Park Name: ${parkName} `
    const parkPara = document.createElement("p");
    parkPara.textContent = `The park is located in: ${parkState}` 
    parkArticle.appendChild(parkH3);
    parkArticle.appendChild(parkPara);
    // console.log(parkSection);
    mainContainer.appendChild(parkSection);
}

// buildHtmlForParks();

const parseAPI = (parsedArray) => {
    console.log(parsedArray); // this is an array 
    parsedArray.forEach(parkObj => {
        // console.log(parkObj.name, parkObj.state)
        buildHtmlForParks(parkObj.name, parkObj.state, parkObj.visited)
    });
}
