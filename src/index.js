import homeContent from './home.js';

const config = (() => {
    const content = document.querySelector('#content');
    const replaceContent = (newContent) => {
        content.replaceChildren(newContent);
    };
    return {
        replaceContent
    }
})();

const onLoad = function({ replaceContent }) {
    const homePage = homeContent();
    replaceContent(homePage);
    // replaceContent('hei')
    const home = homePage.querySelector('#home');
    home.textContent = 'hello';
    const menu = homePage.querySelector('#menu');
    const contact = homePage.querySelector('#contact');
};


window.onload = () => { onLoad(config) };