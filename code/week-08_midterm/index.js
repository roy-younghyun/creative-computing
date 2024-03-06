const nameForm = document.querySelector(".nameForm");
const nameInput = document.querySelector(".nameInput");
const card = document.querySelector(".card");

nameForm.addEventListener("submit", async event => {

    event.preventDefault();

    const name = nameInput.value;

    if (name) {
        try {
            const characterData = await getCharacterData(name);
            displayCharacterInfo(characterData);
        }
        catch(error) {
            console.error(error);
            displayError("Could not fetch character data");
        }
    } else {
        displayError("Please enter a name");
    }

});

async function getCharacterData(name) {

    const apiUrl = `https://swapi.dev/api/people/?search=${name}`;

    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error("Could not fetch character data");
    }

    return await response.json();
}

function displayCharacterInfo(data) {

    console.log(data);
    const {results: [{birth_year, eye_color, gender, hair_color, height, name, skin_color}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const nameDisplay = document.createElement("h1");
    const birthYear = document.createElement("p");
    const heightDisplay = document.createElement("p");
    const eyeColor = document.createElement("p");
    const hairColor = document.createElement("p");
    const skinColor = document.createElement("p");
    const genderEmoji = document.createElement("p");

    nameDisplay.textContent = name;
    birthYear.textContent = `Birth: ${birth_year}`;
    heightDisplay.textContent = `Height: ${height}cm`;
    eyeColor.textContent = `Eye Color: ${eye_color}`;
    hairColor.textContent = `Hair Color: ${hair_color}`;
    skinColor.textContent = `Skin Color: ${skin_color}`;
    genderEmoji.textContent = getGenderEmoji(gender);

    nameDisplay.classList.add("nameDisplay");
    birthYear.classList.add("birthYear");
    heightDisplay.classList.add("heightDisplay");
    eyeColor.classList.add("eyeColor");
    hairColor.classList.add("hairColor");
    skinColor.classList.add("skinColor");
    genderEmoji.classList.add("genderEmoji");

    card.appendChild(nameDisplay);
    card.appendChild(birthYear);
    card.appendChild(heightDisplay);
    card.appendChild(eyeColor);
    card.appendChild(hairColor);
    card.appendChild(skinColor);
    card.appendChild(genderEmoji);


   

}

function getGenderEmoji(gender) {
    switch(true) {
        case (gender == "male"):
            return "🙋🏻‍♂️";
        case (gender == "female"):
            return "🙋🏻‍♀️";
        case (gender == "n/a"):
            return "🤖";
        default:
            return "❓";
    }

}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContext = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}