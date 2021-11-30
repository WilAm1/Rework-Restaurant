import homeContent from './home.js';
import menuContent from './menu.js';
import aboutContent from './about.js';

import './styles.css';


const replaceContent = (newContent) => {
    const content = document.querySelector('#content');
    content.replaceChildren(newContent);
};

const onLoad = function(div) {
    replaceContent(div);
    const home = div.querySelector('#home');
    const menu = div.querySelector('#menu');
    const contact = div.querySelector('#contact');
    home.addEventListener('click', () => { onLoad(homeContent()) });
    menu.addEventListener('click', () => { onLoad(menuContent()) });
    contact.addEventListener('click', () => { onLoad(aboutContent()) });
};


window.onload = () => { onLoad(menuContent()) };