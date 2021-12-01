export default function() {
    const div = document.createElement('div');
    div.id = "home";
    div.innerHTML = `
        <h2>Serving Pizza for 5 years and counting</h2>
        <div id="contact-container">
            <p>📞 1123 123 96</p>
            <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
        </div>
        <h3>Interested? Message Us</h3>
        <form action="#">
            <div class="input-box">
                <label for="name">Name</label><input type="text" id="name" required autofocus>
            </div>
            <div class="input-box">
                <label for="email">Email</label><input type="email" id="email" required>
            </div>
            <div class="input-box">
                <label for="address">Address</label><input type="text" id="address" required>
            </div>
            <div class="input-box">
                <label for="message">Message</label>
                <textarea required id="message" name="message" rows="4" cols="50">
                    I like to order...
                    </textarea>
            </div>
            <button type="submit">Let's Roll</button>
        </form>
        
    `;

    return div
}