export default function() {
    const div = document.createElement('div');
    div.id = "home";
    div.innerHTML = `
        <h1>Willy's Pizzariea</h1>
        <div id="kino-container">
                <img id="face" src="./images/kinoface.png">                
        </div>

        <div id="intro">
        <p> Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
        </div>

    `;

    return div
}