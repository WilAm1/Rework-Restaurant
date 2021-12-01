export default function() {
    const div = document.createElement('div');
    div.id = "home";
    div.innerHTML = `
        <h1>Willy Pizzariea</h1>
        <div id="intro">
            Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
        </div>
        <div id="hours">
            <h2>Hours</h2>
            <p>Monday to Friday</p>
            <p>8 AM - 10 PM</p>
        </div>
        <div id="location">
            <h2>Location</h2>
            <p>123 Totally Made up Street, Pampanga</p>
        </div>
    `;

    return div
}