import homeContent from './home.js';
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
    menu.addEventListener('click', () => { console.log('hel') });
    contact.addEventListener('click', () => { onLoad(homeContent()) });


};


window.onload = () => { onLoad(homeContent()) };