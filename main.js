// Added "favorite thing" and "where to buy" input fields to DOM

const addInputToDom = () => {
    return `
    <form id="form" action="/index.html" method="post">
        <fieldset>
            <label for="thing">Favorite Thing:</label>
            <input type="text" name="thing" id="thing">
        </fieldset>
        <fieldset>
            <label for="location">Where to Buy:</label>
            <input type="text" name="location" id="location">
        </fieldset>
    </form>
    `
};

const inputElement = document.getElementById("input");

inputElement.innerHTML += addInputToDom();


// Added "save to wishlist" button to DOM

const addButtonToDom = () => {
    return `
    <button id="button">Save to Wishlist</button>
    `
};

const buttonElement = document.getElementById("button");

buttonElement.innerHTML += addButtonToDom();


// Adding listener event to button

const container = document.querySelector("#list");

document.querySelector("#button").addEventListener("click", event => {
    const favoriteThing = document.querySelector("#thing");
    const location = document.querySelector("#location");

    container.innerHTML += `
        <section>
            <p>I can purchase ${favoriteThing.value} at ${location.value}</p>
        </section>
    `

    favoriteThing.value = "";
    location.value = "";

});






