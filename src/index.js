console.log('hello world');


const config = {
    content: document.querySelector('#content'),
    home: document.querySelector('#home'),
    menu: document.querySelector('#menu'),
    contact: document.querySelector('#contact'),
}

const onLoad = function({ content, home, menu, contact }) {

};


document.onload = onLoad;