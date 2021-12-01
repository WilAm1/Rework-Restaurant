const IMG_PATH = './images/Food/';

const wrapDiv = (food, format) => {
    const imageFile = `${IMG_PATH}${food}.${format}`;
    const div = document.createElement('div');
    div.classList.add('food');
    div.innerHTML = `
            <div class="food-img-container">
                <img id="${food}-img" class="food-img" src="${imageFile}">
            </div>
            <p>${food}</p>
    `;
    return div;

}
const beverageList = ['coke', 'pepsi', 'iced-tea', 'coffee'];
const dishList = ['deluxe', 'ham-and-cheese', 'meat-supreme', 'vegan'];


export default function() {
    const div = document.createElement('div');
    div.id = "menu";
    div.innerHTML = `

        <h2>Menu</h2>
        <h3>Beverage</h3>
        <div id="beverage">
        </div>
        <h3>Main Menu</h3>
        <div id="main-menu">
        </div>
    `;

    const beverageContainer = div.querySelector('#beverage');
    const dishContainer = div.querySelector('#main-menu');
    const beverageDivs = beverageList.map((drink) => wrapDiv(drink, `jpg`));
    const dishDivs = dishList.map((dish) => wrapDiv(dish, `png`));
    beverageContainer.append(...beverageDivs);
    dishContainer.append(...dishDivs);
    return div
}