const IMG_PATH = './images/Food/'

const wrapDiv = (food, format) => {
    const imageFile = `${IMG_PATH}${food}.${format}`;
    const div = document.createElement('div');
    div.classList.add('food');
    div.innerHTML = `
            <img id="${food}-img" src="${imageFile}">
            <p>${food}</p>
    `;
    return div;

}
const beverageList = ['coke', 'pepsi', 'iced-tea', 'coffee'];
const dishList = ['deluxe', 'ham-and-cheese', 'meat-supreme', 'vegan'];


export default function() {
    const div = document.createElement('div');
    div.id = "home";
    div.innerHTML = `
            <header>
            <nav>
                <ul>
                    <li><a href="#" id="home">Home</a> </li>
                    <li><a href="#" id="menu">Menu</a></li>
                    <li><a href="#" id="about">About</a></li>
                    <li><a href="#" id="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <h2>Menu</h2>
        <div id="beverage">
            <h3>Beverage</h3>
        </div>
        <div id="main-menu">
            <h3>Main Menu</h3>
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