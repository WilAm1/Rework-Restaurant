import homeContent from './home.js';
import menuContent from './menu.js';
import aboutContent from './contact.js';

import './styles.css';

const replaceContent = (newContent) => {
    const content = document.querySelector('#content');
    content.replaceChildren(newContent);
};
const header = document.createElement('header');
header.innerHTML = `
            <nav>
                <ul>
                    <li><a href="#" id="home">Home</a> </li>
                    <li><a href="#" id="menu">Menu</a></li>
                    <li><a href="#" id="contact">Contact</a></li>
                </ul>
            </nav>
`
    // document.body.insertBefore(header, document.body.firstChild);
const onLoad = function(div) {
    replaceContent(div);
    const home = div.querySelector('#home');
    const menu = div.querySelector('#menu');
    const contact = div.querySelector('#contact');
    home.addEventListener('click', () => { onLoad(homeContent()) });
    menu.addEventListener('click', () => { onLoad(menuContent()) });
    contact.addEventListener('click', () => { onLoad(aboutContent()) });
};


window.onload = () => { onLoad(aboutContent()) };