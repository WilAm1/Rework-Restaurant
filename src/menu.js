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

    return div
}